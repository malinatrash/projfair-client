import ArmApi from './ArmApi';
import ArmApiMock from './ArmApiMock';

export const armApi =
  import.meta.env.VITE_MOCK_API === 'true' ? new ArmApiMock() : new ArmApi();
