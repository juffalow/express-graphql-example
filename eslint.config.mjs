import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    ignores: [
      'node_modules',
      'cdk.out',
      'jest.config.js',
      '**/*.js',
      '**/*.d.ts',
    ],
  },
);
