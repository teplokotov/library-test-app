module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        // 'standard-with-typescript',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        project: ['./tsconfig.app.json'],
        ecmaVersion: 'latest',
        sourceType: ['module'],
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    plugins: ['react', 'react-refresh', 'eslint-plugin-import'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'warn',
        'eslint-comments/require-description': 'error',
        'eslint-comments/no-unlimited-disable': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'import/no-cycle': 'warn',
        'prefer-const': 'warn',
        semi: ['warn', 'always'],
        quotes: ['error', 'single'],
        'no-multi-spaces': 'error',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        'import/no-unresolved': ['error', { ignore: ['\\.svg'] }],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
