/**
 * 提交代码时会在服务器端执行 eslint 做校验
 * 通过参数解析获取到仓库地址，默认使用 `src`
 */
const argv = JSON.parse(process.env.npm_config_argv);
const sourceDir = argv.original.length === 3 ? argv.original[2] : 'src';

module.exports = {
  extends: ['.'],
  settings: {
    'import/resolver': {
      node: {
        paths: [sourceDir]
      }
    }
  },
  rules: {
    // 忽略 node_modules 中的引用，因为服务器端检查不会安装依赖包
    'import/no-unresolved': ['error', { 'ignore': ['^[\\w@]'] }]
  }
};
