module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
    es6: true,
    browser: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:vuejs-accessibility/recommended', 
      ],
      rules: {
        'vue/multi-word-component-names': [0],
        'vue/max-attributes-per-line': ['error', {
          'singleline': {
            'max': 3,
          },      
          'multiline': {
            'max': 1,
          },
        }],
        'vue/html-self-closing': [0, {
          'html': {
            'void': 'never',
            'normal': 'always',
            'component': 'always',
          },
          'svg': 'always',
          'math': 'always',
        }],
        'vue/html-indent': ['error', 2, {
          'attribute': 1,
          'baseIndent': 1,
          'closeBracket': 0,
          'alignAttributesVertically': true,
          'ignores': [],
        }],
      },
    },
    {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: [
          'packages/nuxt/tsconfig.json', 
          'packages/uniapp/tsconfig.json', 
          'tsconfig.json',
        ],
      },
      parser: '@typescript-eslint/parser',
      excludedFiles: ['**/*.md/*.*'],
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
      },
    },
  ],
  plugins: [
    'vue', 
    '@typescript-eslint', 
    'vuejs-accessibility',
  ],
  extends: [
    'plugin:security/recommended', 
  ],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
  },
  'ignorePatterns': [
    'node_modules',
    '*.min.*',
    '*.d.ts',
    'dist',
    'output',
    'out',
    'coverage',
    'public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'Dockerfile',
    'LICENSE*',
    'CHANGELOG.md',
    'temp',
    '__snapshots__',
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    '!.github',
    '!.vitepress',
    '!.vscode',
    '.vitepress/cache',
  ],
};
