import { Options as KyOptions, KyInstance } from 'ky';
import { type Client, type Config } from './client/client';
export type KyClientConfig = Config & {
    kyInstance?: KyInstance;
    kyOptions?: KyOptions;
};
/**
 * Create a Billit client that uses `ky` for HTTP requests instead of the native `fetch`.
 */
export declare const createKyClient: (config?: KyClientConfig) => Client;
