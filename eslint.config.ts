import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    vue: true,
    typescript: true,
    unocss: true,
    markdown: false,
    formatters: {
      css: true,
      html: true,
    },
    rules: {
      'no-console': 'off',
    },
    ignores: ['**/public/**'],
  },
  // vue规则定制
  {
    files: ['**/*.vue'],
    rules: {
      // 限制属性数量换行
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 6 },
        multiline: { max: 1 },
      }],
    },
  },
  // ts规则定制
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      // 允许any
      'ts/no-explicit-any': 'off',
      // 强制使用import type导入类型
      'ts/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      }],
      // 禁止未使用的变量，但允许使用下划线忽略
      'ts/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
)
