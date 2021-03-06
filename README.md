# external-script

## external script not work
```
yarn install
yarn serve
```

## external script work

**vuex/package.json**
```diff
{
  "name": "vuex",
  "version": "4.0.0-rc.2",
  "description": "state management for Vue.js",
  "main": "dist/vuex.cjs.js",
  "exports": {
    ".": {
+      "module": "./dist/vuex.esm-bundler.js",
      "require": "./dist/vuex.cjs.js",
      "import": "./dist/vuex.mjs"
    },
    "./": "./"
  },
  "module": "dist/vuex.esm-bundler.js",
  "browser": "dist/vuex.esm-browser.js",
  "unpkg": "dist/vuex.global.js",
  "jsdelivr": "dist/vuex.global.js",
  "typings": "types/index.d.ts",
  "sideEffects": false,
  "files": [
    "dist",
    "types/index.d.ts",
    "types/helpers.d.ts",
    "types/logger.d.ts",
    "types/vue.d.ts"
  ],
  "scripts": {
    "dev": "node examples/server.js",
    "build": "node scripts/build.js",
    "lint": "eslint src test",
    "test": "npm run lint && npm run build && npm run test:types && npm run test:unit && npm run test:ssr && npm run test:e2e && npm run test:esm",
    "test:unit": "jest --testPathIgnorePatterns test/e2e",
    "test:e2e": "start-server-and-test dev http://localhost:8080 'jest --testPathIgnorePatterns test/unit'",
    "test:ssr": "cross-env VUE_ENV=server jest --testPathIgnorePatterns test/e2e",
    "test:types": "tsc -p types/test",
    "test:esm": "node test/esm/esm-test.js",
    "coverage": "jest --testPathIgnorePatterns test/e2e --coverage",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "release": "node scripts/release.js",
    "docs": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "yarn docs:build && vitepress serve docs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vuex.git"
  },
  "author": "Evan You",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/vuejs/vuex/issues"
  },
  "homepage": "https://github.com/vuejs/vuex#readme",
  "peerDependencies": {
    "vue": "^3.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "@rollup/plugin-buble": "^0.21.3",
    "@rollup/plugin-commonjs": "^16.0.0",
    "@rollup/plugin-node-resolve": "^10.0.0",
    "@rollup/plugin-replace": "^2.3.2",
    "@types/node": "^14.14.6",
    "@vue/compiler-sfc": "^3.0.2",
    "babel-jest": "^26.0.1",
    "babel-loader": "^8.1.0",
    "brotli": "^1.3.2",
    "chalk": "^4.0.0",
    "conventional-changelog-cli": "^2.0.31",
    "cross-env": "^7.0.2",
    "css-loader": "^2.1.0",
    "enquirer": "^2.3.5",
    "eslint": "^6.8.0",
    "eslint-plugin-vue-libs": "^4.0.0",
    "execa": "^4.0.0",
    "express": "^4.17.1",
    "fs-extra": "^9.0.1",
    "jest": "^26.0.1",
    "puppeteer": "^5.4.1",
    "regenerator-runtime": "^0.13.5",
    "rollup": "^2.33.0",
    "rollup-plugin-terser": "^7.0.2",
    "semver": "^7.3.2",
    "start-server-and-test": "^1.11.0",
    "todomvc-app-css": "2.1.0",
    "typescript": "^4.0.5",
    "vitepress": "^0.9.0",
    "vue": "^3.0.2",
    "vue-loader": "^16.0.0-beta.1",
    "vue-style-loader": "^4.1.2",
    "webpack": "^4.43.0",
    "webpack-dev-middleware": "^3.7.2",
    "webpack-hot-middleware": "^2.25.0"
  }
}

```