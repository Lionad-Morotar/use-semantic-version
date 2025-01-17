<p align="center">
  <img width="555" alt="use-semantic-version" src="https://github.com/Lionad-Morotar/use-semantic-version/blob/release/docs/assets/logo.png?raw=true">
</p>

<p align="center">
  <!-- npm version -->
  <a href="https://github.com/Lionad-Morotar/use-semantic-version"><img src="https://img.shields.io/npm/v/use-semantic-versions.svg" alt="npm package"></a>
  <!-- ci status -->
  <a href="https://github.com/Lionad-Morotar/use-semantic-version/actions/workflows/ci-on-release.yml"><img src="https://github.com/Lionad-Morotar/use-semantic-version/actions/workflows/ci-on-release.yml/badge.svg?branch=release" alt="build status"></a>
  <!-- license -->
  <a href="https://github.com/Lionad-Morotar/use-semantic-version/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Lionad-Morotar/use-semantic-version" alt="LICENSE"></a>
</p>

# use-semantic-version

a simple hook in Vue3 to manage semantic versioning

## Brief

simple usage:

```ts
import { useSemanticVersion } from 'use-semantic-version';

const { version, major, minor, patch, majoring, minoring, patching } = useSemanticVersion();

console.log('version:', version.value); // 0.0.1

patching();

console.log('version:', version.value); // 0.0.2
```

compare two versions:

```ts
const { compareTo } = useSemanticVersion();
const { compareTo, version: version2 } = useSemanticVersion();

console.log('compare:', compareTo(version2)); // ComputedRef<'>' |  '<' | '='>
```

## Package Info

package size: ~50loc & <<1kb

## License

MIT License

## Related

* [use-version](https://www.npmjs.com/package/@hmans/use-version)
