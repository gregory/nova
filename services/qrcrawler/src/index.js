import puppeteer from '@cloudflare/puppeteer';

/** @typedef {{ url: string }} QueueMessage */

const AGE_COOKIE_NAME = 'agecheck';
const AGE_COOKIE_VALUE = '1';

const JOB_STATUS = {
  WAITING: 0,
  FAILED: -1,
  SUCCEEDED: 1,
};

async function setAgeCookie(page, url) {
  const { hostname } = new URL(url);
  await page.setCookie({
    name: AGE_COOKIE_NAME,
    value: AGE_COOKIE_VALUE,
    domain: hostname,
    path: '/',
  });
}

const addPhoneToHistory = (history, url, number) => {
  if (!number) {
    return;
  }
  let entry = history.find((item) => item.url === url);
  if (!entry) {
    entry = { url, phoneNumbers: [] };
    history.push(entry);
  }
  if (!entry.phoneNumbers.includes(number)) {
    entry.phoneNumbers.push(number);
  }
};

async function collectPageLinks(url, browser) {
  const page = await browser.newPage();
  try {
    await setAgeCookie(page, url);
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const pageLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('li.page-item a.page-link')).slice(1)// We should ignore the first page
        .map((node) => node.href)
        .filter(Boolean);
      return Array.from(new Set(links));
    });

    return Array.from(new Set([url, ...pageLinks]));
  } finally {
    await page.close();
  }
}

async function collectListingLinks(url, browser) {
  const page = await browser.newPage();
  try {
    await setAgeCookie(page, url);
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    return await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('article a.avatar-item'))
        .map((node) => node.href)
        .filter(Boolean);
      return Array.from(new Set(links));
    });
  } finally {
    await page.close();
  }
}

async function crawlUrl(url, browser) {
  const page = await browser.newPage();

  try {
    await setAgeCookie(page, url);
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const {
      phoneNumber='',
      region,
      profileLink,
      profileName,
      languages,
      publicationText,
      nationality,
      website,
    } = await page.evaluate(() => {
      const phoneNodes = document.querySelectorAll(
        'div#description-content  a.btn-floating[href^="tel:"]'
      );
      const profileNodes = document.querySelectorAll(
        'div#description-content  a[href^="https://www.quartier-rouge.be/profil/"]'
      );
      const regionNodes = document.querySelectorAll(
        'div#description-content  a[href^="https://www.quartier-rouge.be/region/"]'
      );
      const websiteNodes = document.querySelectorAll('div#hours-content a[rel=noopener]');

      const [phoneNumber] = Array.from(phoneNodes)
        .map((node) => node.href?.trim().split('tel:')[1] ?? '')
        .filter((value) => value.length > 0);
      const [profileName] = Array.from(profileNodes)
        .map((node) => node.textContent?.trim() ?? '')
        .filter((value) => value.length > 0);
      const [profileLink] = Array.from(profileNodes)
        .map((node) => node.href?.trim() ?? '')
        .filter((value) => value.length > 0);

      const [region] = Array.from(regionNodes)
        .map((node) => node.textContent?.trim() ?? '')
        .filter((value) => value.length > 0);
      const [website] = Array.from(websiteNodes)
        .map((node) => node.href?.trim() ?? '')
        .filter((value) => value.length > 0);

      const languageLabels = Array.from(document.querySelectorAll('div.dl-item b'))
        .filter((node) => (node.textContent ?? '').trim().toLowerCase().startsWith('langues'))
        .map((node) => node.parentElement)
        .filter((node) => node);
      const nationalityLabel = Array.from(document.querySelectorAll('div.dl-item b')).find(
        (node) => (node.textContent ?? '').trim().toLowerCase().startsWith('nationalité')
      );
      const nationality =
        nationalityLabel?.parentElement?.querySelector('span')?.textContent?.trim() ?? '';
      const languages = languageLabels
        .flatMap((node) =>
          Array.from(node.querySelectorAll('span'))
            .map((span) => span.textContent?.trim() ?? '')
            .filter((value) => value.length > 0)
        )
        .flatMap((value) => value.split(',').map((entry) => entry.trim()))
        .filter((value) => value.length > 0);

      const publicationText = profileNodes[0]?.closest('p')?.textContent?.trim() ?? '';

      return {
        phoneNumber,
        profileName,
        region,
        profileLink,
        languages,
        publicationText,
        nationality,
        website,
      };
    });

    const publicationTimestamp = parsePublicationTimestamp(publicationText);

    return {
      url,
      phoneNumber,
      profileName,
      region,
      profileLink,
      languages,
      publicationText,
      publicationTimestamp,
      nationality,
      website,
    };
  } finally {
    await page.close();
  }
}

function parsePublicationTimestamp(text) {
  const now = new Date();
  const fallback = now.toISOString();
  if (!text) {
    return fallback;
  }

  const markerMatch = text.match(/\(\d{2}\)\s*([^]+)$/);
  const slice = markerMatch ? markerMatch[1] : text;
  const dateMatch = slice.match(
    /\ble\s+(\d{1,2})\s+([a-zA-Zéûôîïëàç]+)(?:\s*[-–]\s*(\d{1,2}:\d{2}))?/i
  );
  const timeOnlyMatch = slice.match(/\b[àa]\s+(\d{1,2}:\d{2})/i);
  if (!dateMatch && !timeOnlyMatch) {
    return fallback;
  }

  const day = dateMatch ? Number.parseInt(dateMatch[1], 10) : now.getDate();
  const monthName = dateMatch ? dateMatch[2].toLowerCase() : null;
  const time = (dateMatch && dateMatch[3]) || (timeOnlyMatch && timeOnlyMatch[1]) || '';

  const monthIndexByName = {
    janvier: 0,
    fevrier: 1,
    février: 1,
    mars: 2,
    avril: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    aout: 7,
    août: 7,
    septembre: 8,
    octobre: 9,
    novembre: 10,
    decembre: 11,
    décembre: 11,
  };

  const monthIndex = monthName ? monthIndexByName[monthName] : now.getMonth();
  if (Number.isNaN(day) || monthIndex === undefined) {
    return fallback;
  }

  const [hour = '00', minute = '00'] = time.split(':');
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const year = monthName && monthIndex > currentMonth ? currentYear - 1 : currentYear;

  const result = new Date(
    year,
    monthIndex,
    day,
    Number.parseInt(hour, 10),
    Number.parseInt(minute, 10),
    0
  );

  if (Number.isNaN(result.getTime())) {
    return fallback;
  }

  return result.toISOString();
}

function toCsv(rows, headers) {
  const escape = (value) => {
    const text = value == null ? '' : String(value);
    return `"${text.replace(/"/g, '""')}"`;
  };

  const lines = [];
  lines.push(headers.map(escape).join(';'));
  for (const row of rows) {
    lines.push(headers.map((key) => escape(row[key])).join(';'));
  }
  return lines.join('\n');
}

async function insertSeedJobs(env, urls) {
  if (!urls.length) {
    return [];
  }

  const { FETCH_WITHIN_HOURS = 2 } = env;
  const fetchWithinHoursAgo = new Date(
    Date.now() - Number.parseInt(FETCH_WITHIN_HOURS, 10) * 60 * 60 * 1000
  ).toISOString();
  const placeholders = urls.map(() => '?').join(',');
  const { results } = await env.DB.prepare(
    `SELECT url, jobStatus, jobUpdatedAt FROM crawl_jobs WHERE url IN (${placeholders})`
  )
    .bind(...urls)
    .all();
  const existingByUrl = new Map(results.map((row) => [row.url, row]));
  const pendingUrls = urls.filter((url) => {
    const existing = existingByUrl.get(url);
    if (!existing) {
      return true;
    }
    if (existing.jobStatus < 0) {
      return true;
    }
    if (existing.jobStatus === JOB_STATUS.SUCCEEDED) {
      return existing.jobUpdatedAt < fetchWithinHoursAgo;
    }
    return false;
  });

  if (pendingUrls.length === 0) {
    return [];
  }

  const now = new Date().toISOString();
  const statements = pendingUrls.map((url) =>
    env.DB.prepare(
      'INSERT OR IGNORE INTO crawl_jobs (url, jobStatus, jobScheduledAt, jobUpdatedAt) VALUES (?, ?, ?, ?)'
    ).bind(url, JOB_STATUS.WAITING, now, now)
  );

  await env.DB.batch(statements);
  return pendingUrls;
}

async function saveCrawlResult(env, result) {
  const now = new Date().toISOString();
  const profileLink = result.profileLink ?? result.url;
  const phoneEntry = {
    url: result.url,
    phoneNumbers: result.phoneNumber ? [result.phoneNumber] : [],
  };

  if (!profileLink) {
    throw new Error('Missing profile link');
  }

  const existing = await env.DB.prepare(
    `SELECT url, phoneNumber, profileName, region, profileLink, languages, publicationText,
      publicationTimestamp, nationality, createdAt, phoneHistory, website
     FROM crawl_results WHERE profileLink = ?`
  )
    .bind(profileLink)
    .first();

  if (!existing) {
    await env.DB.prepare(
      `INSERT INTO crawl_results
        (url, phoneNumber, profileName, region, profileLink, languages, publicationText, publicationTimestamp, nationality,  website)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        result.url,
        result.phoneNumber,
        result.profileName,
        result.region ?? '',
        profileLink,
        JSON.stringify(result.languages ?? []),
        result.publicationText ?? '',
        result.publicationTimestamp ?? '',
        result.nationality ?? '',
        result.website ?? ''
      )
      .run();
    return;
  }

  let phoneHistory = [];
  if (existing.phoneHistory ) {
    try {
      phoneHistory = JSON.parse(existing.phoneHistory);
    } catch {
      phoneHistory = [];
    }
  }

  const existingTimestamp = existing.publicationTimestamp ?? '';
  const isNewer =
    !existingTimestamp ||
    (result.publicationTimestamp && result.publicationTimestamp >= existingTimestamp);

  const hasPhoneConflict =
    result.phoneNumber && existing.phoneNumber && result.phoneNumber !== existing.phoneNumber;

  if (hasPhoneConflict) {
    if (isNewer) {
      addPhoneToHistory(phoneHistory, existing.url || result.url, existing.phoneNumber);
    } else {
      addPhoneToHistory(phoneHistory, result.url, result.phoneNumber);
    }
  }

  const phoneNumber = isNewer ? result.phoneNumber ?? '' : existing.phoneNumber ?? '';
  const resolved = isNewer
    ? {
      url: result.url,
      profileName: result.profileName ?? '',
      region: result.region ?? '',
      languages: JSON.stringify(result.languages ?? []),
      publicationText: result.publicationText ?? '',
      publicationTimestamp: result.publicationTimestamp ?? '',
      nationality: result.nationality ?? '',
      website: result.website ?? '',
    }
    : {
      url: existing.url ?? result.url,
      profileName: existing.profileName ?? '',
      region: existing.region ?? '',
      languages: existing.languages ?? JSON.stringify([]),
      publicationText: existing.publicationText ?? '',
      publicationTimestamp: existing.publicationTimestamp ?? '',
      nationality: existing.nationality ?? '',
      website: existing.website ?? '',
    };

  await env.DB.prepare(
    `UPDATE crawl_results SET
    url = ?,
    phoneNumber = ?,
    profileName = ?,
    region = ?,
    languages = ?,
    publicationText = ?,
    publicationTimestamp = ?,
    nationality = ?,
    createdAt = ?,
    phoneHistory = ?,
    website = ?
   WHERE profileLink = ?`
  )
    .bind(
      resolved.url,
      phoneNumber,
      resolved.profileName,
      resolved.region,
      resolved.languages,
      resolved.publicationText,
      resolved.publicationTimestamp,
      resolved.nationality,
      now,
      JSON.stringify(phoneHistory),
      resolved.website,
      profileLink
    )
    .run();

}

async function updateJobStatus(env, url, status) {
  const now = new Date().toISOString();
  await env.DB.prepare(
    'UPDATE crawl_jobs SET jobStatus = ?, jobUpdatedAt = ? WHERE url = ?'
  )
    .bind(status, now, url)
    .run();
}

async function handlePageQueueBatch(batch, env) {
  let browser;
  try {
    console.log('launching for page batch')
    browser = await puppeteer.launch(env.BROWSER);
    console.log('launched for page batch')
  } catch {
    console.log('---------FAILED TO LAUNCH')
    batch.retryAll();
    return;
  }

  for (const message of batch.messages) {
    try {
      const page = new URL(message.body.url).searchParams.get('page')
      console.log('[PAGE %s] CRAWLING PAGE',page)
      const listingUrls = await collectListingLinks(message.body.url, browser);
      console.log('[PAGE %s] FOUND %s urls', page, listingUrls.length)
      const seedUrls = listingUrls; //.slice(0, 1); // Only take the first one per page (testing).
      const scheduledUrls = await insertSeedJobs(env, seedUrls);
      console.log('[PAGE %s] SCHEDULED %s urls', page, scheduledUrls.length)

      if (scheduledUrls.length > 0) {
        await env.CRAWL_QUEUE.sendBatch(
          scheduledUrls.map((item) => ({ body: { page, url: item } }))
        );
      }
      message.ack();
    } catch (error) {
      console.error('Seed page crawl failed', { url: message.body.url, error });
      message.retry();
    }
  }

  await browser.close();
}

async function handleCrawlQueueBatch(batch, env) {
  let browser;
  try {
    console.log('launching')
    browser = await puppeteer.launch(env.BROWSER);
    console.log('launched')
  } catch {
    console.log('---------FAILED TO LAUNCH')
    batch.retryAll();
    return;
  }

  for (const message of batch.messages) {
    try {
      const result = await crawlUrl(message.body.url, browser);
      //if(!result.phoneNumber) {
        //await updateJobStatus(env, message.body.url, JOB_STATUS.FAILED);
        //console.log('[PAGE %s] MISSING PHONE %s - %s posted at %s', message.body.page, result.profileName, result.url, result.publicationTimestamp)
        //message.ack()
        //continue
      //}
      await saveCrawlResult(env, result);
      await updateJobStatus(env, message.body.url, JOB_STATUS.SUCCEEDED);
      console.log('[PAGE %s] INSERTING %s(%s) from %s: %s - posted at %s', message.body.page, result.profileName, result.nationality, result.region, result.phoneNumber, result.publicationTimestamp)
      message.ack();
    } catch (error) {
      console.error('Crawler failed', { url: message.body.url, error });
      await updateJobStatus(env, message.body.url, JOB_STATUS.FAILED);
      message.retry();
    }
  }

  await browser.close();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/results') {
      const parsedLimit = Number.parseInt(url.searchParams.get('limit') ?? '', 10);
      const limit = Number.isFinite(parsedLimit) ? parsedLimit : 50;
      const { results } = await env.DB.prepare(
        'SELECT * FROM crawl_results ORDER BY phoneNumber, createdAt DESC LIMIT ?'
      )
        .bind(limit)
        .all();
      return Response.json({ count: results.length, results });
    }

    if (request.method === 'GET' && url.pathname === '/results.csv') {
      const parsedLimit = Number.parseInt(url.searchParams.get('limit') ?? '', 10);
      const limit = Number.isFinite(parsedLimit) ? parsedLimit : 1000;
      const { results } = await env.DB.prepare(
        'SELECT * FROM crawl_results ORDER BY phoneNumber, createdAt DESC LIMIT ?'
      )
        .bind(limit)
        .all();
      const headers = [
        'website',
        'profileName',
        'phoneNumber',
        'region',
        'languages',
        'nationality',
        'profileLink',
        'url',
        'publicationText',
        'publicationTimestamp',
        'createdAt',
        'contactedAt',
        'phoneHistory',
      ];
      const csv = toCsv(results, headers);
      return new Response(csv, {
        headers: {
          'content-type': 'text/csv; charset=utf-8',
          'content-disposition': 'attachment; filename="qrcrawler-results.csv"',
        },
      });
    }

    if (request.method === 'GET' && url.pathname.startsWith('/jobs/')) {
      const statusKey = url.pathname.split('/')[2] ?? '';
      const statusMap = {
        ok: JOB_STATUS.SUCCEEDED,
        ko: JOB_STATUS.FAILED,
        waiting: JOB_STATUS.WAITING,
      };
      if (!(statusKey in statusMap)) {
        return new Response('Use /jobs/ok, /jobs/ko, or /jobs/waiting', { status: 400 });
      }
      const parsedLimit = Number.parseInt(url.searchParams.get('limit') ?? '', 10);
      const limit = Number.isFinite(parsedLimit) ? parsedLimit : 50;
      const { results } = await env.DB.prepare(
        'SELECT * FROM crawl_jobs WHERE jobStatus = ? ORDER BY jobUpdatedAt DESC LIMIT ?'
      )
        .bind(statusMap[statusKey], limit)
        .all();
      return Response.json({ count: results.length, results });
    }

    if (request.method === 'POST' && url.pathname === '/seed') {
      const seedUrl = env.SEED_URL;

      if (!seedUrl) {
        return new Response('Missing url', { status: 400 });
      }

      const seededUrl = new URL(seedUrl);
      if (!seededUrl.searchParams.get('page')) {
        seededUrl.searchParams.set('page', '1');
      }

      const browser = await puppeteer.launch(env.BROWSER);
      try {
        const pageLinks = await collectPageLinks(seededUrl.toString(), browser)//.then(res => res.slice(0,2))
        console.log('FOUND %s page links', pageLinks.length)
        await env.PAGE_QUEUE.sendBatch(pageLinks.map((link) => ({ body: { url: link } })));

        return Response.json({ queued: pageLinks.length, pageLinks });
      } finally {
        await browser.close();
      }
    }

    if (request.method === 'POST' && url.pathname === '/crawl') {
      const body = await request.json();
      if (!body?.url) {
        return new Response('Missing url', { status: 400 });
      }

      await insertSeedJobs(env, [body.url]);
      await env.CRAWL_QUEUE.send({ url: body.url });
      return Response.json({ queued: 1, url: body.url });
    }

    return new Response('Use POST /seed or POST /crawl', { status: 404 });
  },
  async queue(batch, env) {
    const queueName = batch.queue || batch.queueName;
    if (queueName === 'qrcrawler-page-queue') {
      await handlePageQueueBatch(batch, env);
      return;
    }
    if (queueName === 'qrcrawler-crawl-queue') {
      await handleCrawlQueueBatch(batch, env);
    }
  },
};
