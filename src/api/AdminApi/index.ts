import AdminApi from './AdminApi';
import AdminApiMock from './AdminApiMock';

export const adminApi =
  import.meta.env.VITE_MOCK_API === 'true'
    ? new AdminApiMock()
    : new AdminApi();
