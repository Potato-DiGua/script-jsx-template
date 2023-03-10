module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier"
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
        // "react/react-in-jsx-scope": "off"
    },
}
