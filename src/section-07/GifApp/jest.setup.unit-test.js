import { jest } from '@jest/globals';

jest.mock('./src/config/env', () => ({
  apiKey: 'test-api-key'
}));