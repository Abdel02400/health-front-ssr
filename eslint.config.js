import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: { react },
    settings: {
      react: { 'version': 'detect' },
    },
    rules: {
      'linebreak-style': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      'indent': ['error', 4, {'SwitchCase':  1}],
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
      'max-len': ['error', 250],
      'prefer-destructuring': ['error', {'AssignmentExpression': {'array': false}}],
      'semi': ['error', 'always'],
      'react/prefer-stateless-function': ['error', { 'ignorePureComponents': false }],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-use-before-define': 'off',
      'no-unused-vars': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/button-has-type': 'off',
      'class-methods-use-this': 'off',
      'no-shadow': 'off',
      'no-plusplus': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'no-prototype-builtins': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/no-unescaped-entities': 'off',
      'no-underscore-dangle': 'off',
      'react/jsx-boolean-value': 'off',
      'lines-between-class-members': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      'import/no-extraneous-dependencies': ['error', { 'devDependencies': [] }],
      'react/no-danger': 'off',
      'react/require-default-props': 'off',
    },
  },
  {
    files: ['server/**/*.{ts,tsx}', 'scripts/**/*.ts', 'vite*.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
]);