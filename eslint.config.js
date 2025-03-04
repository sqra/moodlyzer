import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';

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
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2023: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    ...reactHooks.configs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};