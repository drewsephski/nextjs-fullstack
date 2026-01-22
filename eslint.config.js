import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import nextPlugin from '@next/eslint-plugin-next'

const compat = new FlatCompat({
  baseConfig: {
    extends: ['next/core-web-vitals', 'prettier']
  }
})

export default [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', '.env*']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'next': nextPlugin
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules
    }
  }
]
