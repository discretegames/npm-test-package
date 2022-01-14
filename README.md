# [NPM Test Packing][1]

Just a test [NPM](https://www.npmjs.com/) TypeScript package to learn how things work, following
[these instructions](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c).

Install the package with:

```text
npm install @discretegames/npm-test-package
```

or

```text
yarn add @discretegames/npm-test-package
```

Use the package like:

```js
import TestPackage, { var1, var2, var3, func1, func2 } from "@discretegames/npm-test-package";

func1("Hello, World!");
```

Run `npm run deploy` to publish the package to [NPM][1] (this does `npm publish --access=public`).

Run `npm version <update_type>` with `patch`, `minor`, or `major` to advance the version. Do this before a new publish.

Run `npm run build` to turn the TS in /src into JS in /dist (publish does this automatically).

[Git repo.](https://github.com/discretegames/npm-test-package)

[1]: https://www.npmjs.com/package/@discretegames/npm-test-package
