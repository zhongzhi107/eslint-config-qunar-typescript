/**
 * 该文件供 node 工程使用
 * typescript-react 工程请使用 eslint-config-qunar-typescript-react
 */

// 提交代码时会在服务器端执行 eslint 做校验
// 通过参数解析获取到仓库地址，默认使用 `src`
const argv = JSON.parse(process.env.npm_config_argv);
const sourceDir = argv.original.length === 3 ? original[2] : 'src';

module.exports = {
  extends: ['eslint-config-qunar-base'].map(require.resolve),
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
        paths: [sourceDir]
      }
    },
    'import/extensions': ['.js', '.ts', '.mjs']
  },
  rules: {
    // 使用 ts 类型时会有问题，先禁用
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    // semi: 'off',
    // '@typescript-eslint/semi': ['error', 'always'],
    // 规范文件命名：[a-z.-]
    'qunar/filename-case': 'error'
  }
};
