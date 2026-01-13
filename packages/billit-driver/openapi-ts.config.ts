
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.sandbox.billit.be/swagger/docs/v1', // sign up at app.heyapi.dev
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
  },
  plugins: [
    '@hey-api/schemas',
    '@hey-api/client-fetch',
     'zod', // Switch to valibot: https://github.com/hey-api/openapi-ts/blob/a17130e5cf2acad5559516c153f2e2c61e9ae807/docs/openapi-ts/plugins/valibot.md?plain=1#L3
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
      //validator: 'zod',
      validator: { request: 'zod', },
    },
  ],
});

