import { jest } from '@jest/globals';

jest.mock('./src/common/config/env', () => ({
  apiKey: 'test-api-key'
}));