import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  extends: [
    js.configs.recommended,
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-refresh/recommended',
    'prettier', 
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: [
    'react-hooks',
    'react-refresh',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    ...reactHooks.configs.recommended.rules,
  },
};
