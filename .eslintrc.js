module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'no-var': 'error',
        allowEmptyCatch: 'off',
        'prettier/prettier': 'error',
        'prefer-const': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'vue/no-unused-vars': [
            'warn',
            {
                ignorePattern: '^_',
            },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-parsing-error': [
            'error',
            {
                'control-character-reference': false,
            },
        ],
        'vue/no-v-html': 'off',
        'vue/no-setup-props-destructure': 'off',
        '@typescript-eslint/no-empty-function': 'off',
    },
    globals: {
        uni: true,
        uniUI: true,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
}
