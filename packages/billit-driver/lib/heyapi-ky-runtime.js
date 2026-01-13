// src/heyapi-ky-runtime.ts
import ky from 'ky';
export const createClientConfig = (config = {}) => ({
    ...config,
    // Replace Fetch API with ky, but return a native Response
    fetch: async (input, init) => {
        // Build a URL string for ky
        const url = typeof input === 'string'
            ? input
            : input instanceof URL
                ? input.toString()
                : input.url;
        console.log('-----------', url);
        return ky(url, {
            method: init?.method,
            headers: init?.headers,
            body: init?.body,
            credentials: init?.credentials,
            signal: init?.signal,
            // Let ky use the platform fetch (Workers) if present
            fetch: config.fetch ?? fetch,
        });
    },
});
