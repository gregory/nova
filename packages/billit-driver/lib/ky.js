//import { createClient, createConfig, } from './client/client';
//import { createClientConfig } from './heyapi-ky-runtime';
//export const createKyClient =({apiKey}: { apiKey: string }) => createClient(createClientConfig(createConfig({
//headers: { 'ApiKey': apiKey },
//baseUrl: 'https://api.sandbox.billit.be',
//})));
import ky from 'ky';
import { createClient } from './client/client';
/**
 * Create a Billit client that uses `ky` for HTTP requests instead of the native `fetch`.
 */
export const createKyClient = (config = {}) => {
    const { kyInstance, kyOptions, ...rest } = config;
    const instance = kyInstance ?? ky.create(kyOptions);
    const kyFetch = (input, init) => instance(input, init);
    return createClient({
        ...rest,
        fetch: kyFetch,
    });
};
