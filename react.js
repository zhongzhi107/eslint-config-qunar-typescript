/**
 * 该文件供 node 工程使用
 * typescript-react 工程请使用 eslint-config-qunar-typescript/react
 */

module.exports = {
  extends: ['eslint-config-qunar-typescript'].map(require.resolve),
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        paths: [sourceDir]
      }
    },
    'import/extensions': ['.js', '.ts', '.jsx']
  },
  rules: {
    // 规范文件命名：[a-z.-]
    'qunar/filename-case': 'off'
  }
};
