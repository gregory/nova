//import { createClient, createConfig, } from './client/client';
//import { createClientConfig } from './heyapi-ky-runtime';
//export const createKyClient =({apiKey}: { apiKey: string }) => createClient(createClientConfig(createConfig({
  //headers: { 'ApiKey': apiKey },
  //baseUrl: 'https://api.sandbox.billit.be',
//})));
import ky, { Options as KyOptions, KyInstance } from 'ky';
import { createClient, type Client, type Config } from './client/client';

export type KyClientConfig = Config & {
  kyInstance?: KyInstance;
  kyOptions?: KyOptions;
};

/**
 * Create a Billit client that uses `ky` for HTTP requests instead of the native `fetch`.
 */
export const createKyClient = (config: KyClientConfig = {}): Client => {
  const { kyInstance, kyOptions, ...rest } = config;
  const instance = kyInstance ?? ky.create(kyOptions);

  const kyFetch: typeof globalThis.fetch = (input: RequestInfo | URL, init?: RequestInit) =>
    instance(input as any, init as any) as unknown as Promise<Response>;

  return createClient({
    ...rest,
    fetch: kyFetch,
  });
};
