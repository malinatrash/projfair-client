/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_MOCK_API?: 'true' | 'false';
  readonly VITE_MOCK_AUTH?: 'true' | 'false';
  readonly VITE_API_URL_LOCAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
