import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    },
    ignores: ['dist', 'src-tauri'],
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  prettierConfig,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
])
