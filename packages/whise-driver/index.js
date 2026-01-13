const ky = require('ky').default || require('ky');

const DEFAULT_BASE_URL = 'https://api.whise.eu/v1';

const createWhiseClient = ({
	baseUrl = DEFAULT_BASE_URL,
	token,
	fetch: customFetch,
	kyOptions = {},
} = {}) => {
	const headers = token
		? {
				Authorization: /^Bearer\s/i.test(token) ? token : `Bearer ${token}`,
		  }
		: undefined;

	return ky.create({
		prefixUrl: baseUrl.replace(/\/$/, ''),
		fetch: customFetch,
		headers,
		retry: {
			limit: 2,
			methods: ['get', 'post', 'put', 'delete', 'patch'],
			statusCodes: [408, 413, 429, 500, 502, 503, 504],
		},
		hooks: {
			beforeRequest: [
				(request) => {
					request.headers.set('accept', 'application/json');
					if (!request.headers.has('content-type') && request.method !== 'GET') {
						request.headers.set('content-type', 'application/json');
					}
				},
			],
		},
		...kyOptions,
	});
};

const withJsonBody = (options = {}, body) => {
	if (body === undefined || options.json || options.body || options.form) return options;
	return { ...options, json: body };
};

const get = (client, path, options) => client.get(path, options).json();
const post = (client, path, body, options) => client.post(path, withJsonBody(options, body)).json();
const put = (client, path, body, options) => client.put(path, withJsonBody(options, body)).json();
const del = (client, path, options) => client.delete(path, options).json();

module.exports = {
	createWhiseClient,
	get,
	post,
	put,
	del,
	DEFAULT_BASE_URL,
};
