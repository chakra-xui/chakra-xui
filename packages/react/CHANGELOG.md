# Change Log

## 1.1.0

### Minor Changes

- [`6a410f77`](https://github.com/chakra-xui/chakra-xui/commit/6a410f778f534e00e01fdf0d3ce1ffdd1d7b138e)
  [#2834](https://github.com/chakra-xui/chakra-xui/pull/2834) Thanks
  [@TimKolberger](https://github.com/TimKolberger)! - Allow `extendTheme` to
  accept optional second argument `baseTheme` to customize:

  ```jsx
  const theme = extendTheme(
    { colors: { red: { 500: "#ff0000" } } },
    // the base theme to customize with the above overrides
    yourTheme,
  )
  ```

  If no `baseTheme` is provided, defaults to the Chakra theme.

* [`a0e0bd9a`](https://github.com/chakra-xui/chakra-xui/commit/a0e0bd9a5d45fe08887f8df8d3eccc84951578df)
  [#2816](https://github.com/chakra-xui/chakra-xui/pull/2816) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add gradient support to
  chakra style props. This PR adds to props:

  - `bgGradient`: a shorthand, convenient style prop to apply theme-aware
    gradients.
  - `bgClip`: a shorthand for `background-clip` CSS attribute. Useful when
    creating text gradients.
  - `backgroundClip`: the typical `background-clip` CSS attribute. Useful when
    creating text gradients.

  ## The Background Gradient API

  To add a gradient to a component, pass the `bgGradient` prop and set its value
  following the API below:

  - `linear(<direction>, <from>, <to>)`
  - `radial(<from>, <to>)`

  and other valid css gradient properties. For linear gradients, the direction
  can be either of the following values:

  ```js
  "to-t" // 'to top'
  "to-tr" // 'to top right'
  "to-r" // 'to right'
  "to-br" // 'to bottom right'
  "to-b" // 'to bottom'
  "to-bl" // 'to bottom left'
  "to-l" // 'to left'
  "to-tl" // 'to top left'

  ```

  ```jsx
  <Box w="500px" h="200px" bgGradient="linear(to-r, gray.300, pink.200)" />
  ```

  You can use both theme-aware color tokens or raw CSS color values.

  ```jsx
  <Box w="500px" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
  ```

  ### Multiple Color Stops

  This is a gradient with multiple stops

  ```jsx
  <Box w="500px" h="200px" bgGradient="radial(gray.300,yellow.400,pink.200)" />
  ```

  ## The Text Gradient API

  To add a text gradient, pass the `bgGradient` following the API and `bgClip`
  prop to `text`.

  ```jsx
  <Text
    bgGradient="linear(to-l,#7928CA,#FF0080)"
    bgClip="text"
    fontSize="7xl"
    fontWeight="extrabold"
  >
    Welcome to Chakra xui
  </Text>
  ```

### Patch Changes

- [`916588a5`](https://github.com/chakra-xui/chakra-xui/commit/916588a5bbb771ff3f07b0ceb160bef57cdd6a8a)
  [#2783](https://github.com/chakra-xui/chakra-xui/pull/2783) Thanks
  [@TimKolberger](https://github.com/TimKolberger)! - Fixed an issue where
  `extendTheme` did not allow string properties besides ColorHue in the `colors`
  attribute of the theme override.

  ```jsx
  extendTheme({
    colors: {
      myColor: {
        text: "#ff0000",
      },
    },
  })
  ```

- Updated dependencies
  [[`1e6db1e0`](https://github.com/chakra-xui/chakra-xui/commit/1e6db1e068c6bc0a4c6c6893d1716d284dcbb8f8),
  [`5c8f0838`](https://github.com/chakra-xui/chakra-xui/commit/5c8f08382858c0bbc77d875db52859e7c304392f),
  [`f09a1cbf`](https://github.com/chakra-xui/chakra-xui/commit/f09a1cbf2eaef537b31b1f2fdf1e7c685e1926bb),
  [`46e24c58`](https://github.com/chakra-xui/chakra-xui/commit/46e24c5820ef2726a4fb16a190efda39fb0b075a)]:
  - @chakra-xui/checkbox@1.1.0
  - @chakra-xui/radio@1.1.0
  - @chakra-xui/skeleton@1.0.4
  - @chakra-xui/pin-input@1.1.2
  - @chakra-xui/switch@1.0.3
  - @chakra-xui/system@1.1.1

## 1.0.4

### Patch Changes

- [`5bff79a1`](https://github.com/chakra-xui/chakra-xui/commit/5bff79a1ba6989d279fc432d5040c72cd75b392e)
  Thanks [@jmiazga](https://github.com/jmiazga)! - Updated framer-motion
  peerDependencies to v3

- Updated dependencies
  [[`730a2da1`](https://github.com/chakra-xui/chakra-xui/commit/730a2da19b652614bc051b9f80313d211b22d1de),
  [`0f1e34f2`](https://github.com/chakra-xui/chakra-xui/commit/0f1e34f2c2263de687343184fd143a6377a42176),
  [`b8df0bf4`](https://github.com/chakra-xui/chakra-xui/commit/b8df0bf44a10512658826e5ef8e3067bc45fbc4a),
  [`5bff79a1`](https://github.com/chakra-xui/chakra-xui/commit/5bff79a1ba6989d279fc432d5040c72cd75b392e),
  [`123aaf59`](https://github.com/chakra-xui/chakra-xui/commit/123aaf59a60aaae269e2a305730a650a112c0975),
  [`e73878ee`](https://github.com/chakra-xui/chakra-xui/commit/e73878ee686c11d3f94ad6ac61b19ae9508d75a5),
  [`40a4ab8d`](https://github.com/chakra-xui/chakra-xui/commit/40a4ab8dfcedabf290882936cae0e1523e5aa414),
  [`aeb5e521`](https://github.com/chakra-xui/chakra-xui/commit/aeb5e5214970e7fd239629226dd06f6058b8c697),
  [`29c0e45e`](https://github.com/chakra-xui/chakra-xui/commit/29c0e45efb9f8f37dc2e81b56c08e2f1cedeb621),
  [`b590570f`](https://github.com/chakra-xui/chakra-xui/commit/b590570f25ae2f15fd15eeaa6de37ce0c2119609),
  [`85eb4090`](https://github.com/chakra-xui/chakra-xui/commit/85eb409039640949e01f3aa7353519b19a42a53f),
  [`080a7acc`](https://github.com/chakra-xui/chakra-xui/commit/080a7accdd321123e44df082911c6250154fdbd5),
  [`d1bd91e1`](https://github.com/chakra-xui/chakra-xui/commit/d1bd91e141fba54c1094a7f60932a060fba4949a)]:
  - @chakra-xui/pin-input@1.1.1
  - @chakra-xui/number-input@1.0.3
  - @chakra-xui/system@1.1.0
  - @chakra-xui/radio@1.0.3
  - @chakra-xui/form-control@1.1.0
  - @chakra-xui/modal@1.3.0
  - @chakra-xui/checkbox@1.0.2
  - @chakra-xui/menu@1.0.3
  - @chakra-xui/popover@1.0.4
  - @chakra-xui/toast@1.1.2
  - @chakra-xui/tooltip@1.0.2
  - @chakra-xui/transition@1.0.3
  - @chakra-xui/utils@1.0.2
  - @chakra-xui/skeleton@1.0.3
  - @chakra-xui/layout@1.1.1
  - @chakra-xui/input@1.0.3
  - @chakra-xui/theme@1.2.2
  - @chakra-xui/accordion@1.0.3
  - @chakra-xui/alert@1.0.3
  - @chakra-xui/avatar@1.0.2
  - @chakra-xui/breadcrumb@1.0.2
  - @chakra-xui/button@1.0.2
  - @chakra-xui/close-button@1.0.3
  - @chakra-xui/control-box@1.0.2
  - @chakra-xui/editable@1.0.2
  - @chakra-xui/icon@1.0.2
  - @chakra-xui/image@1.0.2
  - @chakra-xui/media-query@1.0.2
  - @chakra-xui/progress@1.0.2
  - @chakra-xui/select@1.0.3
  - @chakra-xui/slider@1.0.2
  - @chakra-xui/spinner@1.0.2
  - @chakra-xui/stat@1.0.2
  - @chakra-xui/switch@1.0.2
  - @chakra-xui/table@1.0.2
  - @chakra-xui/tabs@1.0.2
  - @chakra-xui/tag@1.0.2
  - @chakra-xui/textarea@1.0.3
  - @chakra-xui/visually-hidden@1.0.2
  - @chakra-xui/counter@1.0.2
  - @chakra-xui/hooks@1.0.2
  - @chakra-xui/live-region@1.0.2
  - @chakra-xui/popper@1.0.2
  - @chakra-xui/portal@1.0.2

## 1.0.3

### Patch Changes

- [`0d0ed051`](https://github.com/chakra-xui/chakra-xui/commit/0d0ed0513ac1094833f1e0294f655af122682ff4)
  [#2707](https://github.com/chakra-xui/chakra-xui/pull/2707) Thanks
  [@TimKolberger](https://github.com/TimKolberger)! - Fix too narrow TypeScript
  type for theme override

- Updated dependencies
  [[`f3cc344e`](https://github.com/chakra-xui/chakra-xui/commit/f3cc344e1a7dd08dc7a312e6ce039d55a80cc526),
  [`72bbd0db`](https://github.com/chakra-xui/chakra-xui/commit/72bbd0dbb913ba38ee2b9191d12bf73713ae4398),
  [`653f3dd6`](https://github.com/chakra-xui/chakra-xui/commit/653f3dd6f30a17e366c069666acbfd9eddb11936),
  [`c73cce25`](https://github.com/chakra-xui/chakra-xui/commit/c73cce25bf986fd5b1261575ca395f731f827f53)]:
  - @chakra-xui/pin-input@1.1.0
  - @chakra-xui/theme@1.2.1
  - @chakra-xui/close-button@1.0.2
  - @chakra-xui/system@1.0.2
  - @chakra-xui/alert@1.0.2
  - @chakra-xui/toast@1.1.1
  - @chakra-xui/modal@1.2.1
  - @chakra-xui/popover@1.0.3
  - @chakra-xui/skeleton@1.0.2

## 1.0.2

### Patch Changes

- [`cfd3b325`](https://github.com/chakra-xui/chakra-xui/commit/cfd3b32564066076529811c5350aff6be565b7a3)
  [#2632](https://github.com/chakra-xui/chakra-xui/pull/2632) Thanks
  [@TimKolberger](https://github.com/TimKolberger)! - Improve typings for
  `extendTheme`. IntelliSense now can suggest property keys for colors and
  existing components.
- Updated dependencies
  [[`e1b095cd`](https://github.com/chakra-xui/chakra-xui/commit/e1b095cdb799bb3630d3cbb7891d8c7e929db0f4),
  [`6b527414`](https://github.com/chakra-xui/chakra-xui/commit/6b52741456f71ba4ec8cfe3e6307796d195adf5b),
  [`28bd21d7`](https://github.com/chakra-xui/chakra-xui/commit/28bd21d793911ba56bd146dd7aaff1008a70d147),
  [`2192be3d`](https://github.com/chakra-xui/chakra-xui/commit/2192be3db77504addffc89cbfef62fb9e884fa5d),
  [`a36ede75`](https://github.com/chakra-xui/chakra-xui/commit/a36ede7519b7193f90e4985636a06c5d483a8a62),
  [`ff10bcec`](https://github.com/chakra-xui/chakra-xui/commit/ff10bceca5774769766eef3a6812a22f387dd58d),
  [`ac0af38d`](https://github.com/chakra-xui/chakra-xui/commit/ac0af38d12dc5828503e178fb94a21f252e3a62b),
  [`c696345a`](https://github.com/chakra-xui/chakra-xui/commit/c696345a711338a23542a7b1911a33927a9ba5f1),
  [`9fdc61d8`](https://github.com/chakra-xui/chakra-xui/commit/9fdc61d8801f6d76783b5c9f068525d4dfc28b20),
  [`2416cf9a`](https://github.com/chakra-xui/chakra-xui/commit/2416cf9abe183a3a38adbccff794088d86a46341),
  [`58e26653`](https://github.com/chakra-xui/chakra-xui/commit/58e26653134caee1dd2caddb9014f7a90dc4eb7e)]:
  - @chakra-xui/number-input@1.0.2
  - @chakra-xui/layout@1.1.0
  - @chakra-xui/modal@1.2.0
  - @chakra-xui/theme@1.2.0
  - @chakra-xui/form-control@1.0.2
  - @chakra-xui/toast@1.1.0
  - @chakra-xui/transition@1.0.2
  - @chakra-xui/radio@1.0.2
  - @chakra-xui/input@1.0.2
  - @chakra-xui/select@1.0.2
  - @chakra-xui/textarea@1.0.2
  - @chakra-xui/accordion@1.0.2
  - @chakra-xui/menu@1.0.2
  - @chakra-xui/popover@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies
  [[`b3594802`](https://github.com/chakra-xui/chakra-xui/commit/b3594802714115c762013174badd5b838217be6f),
  [`843854ec`](https://github.com/chakra-xui/chakra-xui/commit/843854ec669367623b50a598402be343866d87a8),
  [`f0d03d9f`](https://github.com/chakra-xui/chakra-xui/commit/f0d03d9f6e474a1f1767643889734665c2910dc1),
  [`892ea2ca`](https://github.com/chakra-xui/chakra-xui/commit/892ea2ca1c02b4127f4f044df33de58cc7641f5c),
  [`5c482483`](https://github.com/chakra-xui/chakra-xui/commit/5c482483ce24fc798540c9792a15e06772eae213),
  [`204ff7e3`](https://github.com/chakra-xui/chakra-xui/commit/204ff7e39dd37003786194704b36069ef94d56a6),
  [`ba262ac7`](https://github.com/chakra-xui/chakra-xui/commit/ba262ac7b2e2d932bb227d4ff9181e83fbaa4149),
  [`a1ff404b`](https://github.com/chakra-xui/chakra-xui/commit/a1ff404b12a898ab97af024391a06c34da5bc69a)]:
  - @chakra-xui/layout@1.0.1
  - @chakra-xui/theme@1.1.0
  - @chakra-xui/progress@1.0.1
  - @chakra-xui/tabs@1.0.1
  - @chakra-xui/utils@1.0.1
  - @chakra-xui/hooks@1.0.1
  - @chakra-xui/modal@1.1.0
  - @chakra-xui/media-query@1.0.1
  - @chakra-xui/system@1.0.1
  - @chakra-xui/toast@1.0.1
  - @chakra-xui/accordion@1.0.1
  - @chakra-xui/alert@1.0.1
  - @chakra-xui/avatar@1.0.1
  - @chakra-xui/breadcrumb@1.0.1
  - @chakra-xui/button@1.0.1
  - @chakra-xui/checkbox@1.0.1
  - @chakra-xui/close-button@1.0.1
  - @chakra-xui/control-box@1.0.1
  - @chakra-xui/counter@1.0.1
  - @chakra-xui/editable@1.0.1
  - @chakra-xui/form-control@1.0.1
  - @chakra-xui/icon@1.0.1
  - @chakra-xui/image@1.0.1
  - @chakra-xui/input@1.0.1
  - @chakra-xui/live-region@1.0.1
  - @chakra-xui/menu@1.0.1
  - @chakra-xui/number-input@1.0.1
  - @chakra-xui/pin-input@1.0.1
  - @chakra-xui/popover@1.0.1
  - @chakra-xui/popper@1.0.1
  - @chakra-xui/portal@1.0.1
  - @chakra-xui/radio@1.0.1
  - @chakra-xui/select@1.0.1
  - @chakra-xui/skeleton@1.0.1
  - @chakra-xui/slider@1.0.1
  - @chakra-xui/spinner@1.0.1
  - @chakra-xui/stat@1.0.1
  - @chakra-xui/switch@1.0.1
  - @chakra-xui/tag@1.0.1
  - @chakra-xui/textarea@1.0.1
  - @chakra-xui/tooltip@1.0.1
  - @chakra-xui/transition@1.0.1
  - @chakra-xui/visually-hidden@1.0.1

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0 (2020-11-13)

**Note:** Version bump only for package @chakra-xui/react

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.8 (2020-10-29)

### Bug Fixes

- **toast:** allow custom render in update
  ([eb8bff9](https://github.com/chakra-xui/chakra-xui/commit/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459)),
  closes [#2362](https://github.com/chakra-xui/chakra-xui/issues/2362)

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.7 (2020-10-25)

**Note:** Version bump only for package @chakra-xui/core

# 1.0.0-rc.6 (2020-10-25)

**Note:** Version bump only for package @chakra-xui/core

# 1.0.0-rc.5 (2020-09-27)

**Note:** Version bump only for package @chakra-xui/core

# 1.0.0-rc.4 (2020-09-25)

**Note:** Version bump only for package @chakra-xui/core

# 1.0.0-rc.3 (2020-08-30)

**Note:** Version bump only for package @chakra-xui/core

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0-rc.2 (2020-08-09)

**Note:** Version bump only for package @chakra-xui/core

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.1](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@1.0.0-rc.0...@chakra-xui/core@1.0.0-rc.1) (2020-08-06)

### Bug Fixes

- stack key issue and yarn2 deps issue
  ([d6cb6b8](https://github.com/chakra-xui/chakra-xui/commit/d6cb6b8fd964729efdf41b1e29c888a3c101316c))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.0](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@1.0.0-next.7...@chakra-xui/core@1.0.0-rc.0) (2020-07-26)

**Note:** Version bump only for package @chakra-xui/core

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.7](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@1.0.0-next.6...@chakra-xui/core@1.0.0-next.7) (2020-07-26)

**Note:** Version bump only for package @chakra-xui/core

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.6](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@1.0.0-next.5...@chakra-xui/core@1.0.0-next.6) (2020-07-15)

**Note:** Version bump only for package @chakra-xui/core

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.5](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@1.0.0-next.4...@chakra-xui/core@1.0.0-next.5) (2020-07-15)

### Bug Fixes

- revert icon fallback to correct svg path
  ([afa4dbb](https://github.com/chakra-xui/chakra-xui/commit/afa4dbb49931391778f635784bddd3395d555df0))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.4](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.8.0...@chakra-xui/core@1.0.0-next.4) (2020-07-01)

### Bug Fixes

- [#891](https://github.com/chakra-xui/chakra-xui/issues/891)
  ([e107acc](https://github.com/chakra-xui/chakra-xui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- Adding PIN input to core export
  ([301483e](https://github.com/chakra-xui/chakra-xui/commit/301483e47996d266612f4f282611dfffca333bbc))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-xui/chakra-xui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- **core:** add Skeleton export
  ([9255f24](https://github.com/chakra-xui/chakra-xui/commit/9255f24a3653f6f71773d4fdf7221c40aeddb873))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.3](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.8.0...@chakra-xui/core@1.0.0-next.3) (2020-06-28)

### Bug Fixes

- [#891](https://github.com/chakra-xui/chakra-xui/issues/891)
  ([e107acc](https://github.com/chakra-xui/chakra-xui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- ts issue with sx prop
  ([d3b1340](https://github.com/chakra-xui/chakra-xui/commit/d3b1340cb255937927b4d4c56ce218141570b951))
- **core:** add Skeleton export
  ([9255f24](https://github.com/chakra-xui/chakra-xui/commit/9255f24a3653f6f71773d4fdf7221c40aeddb873))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-next.2](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.8.0...@chakra-xui/core@1.0.0-next.2) (2020-06-21)

### Bug Fixes

- [#891](https://github.com/chakra-xui/chakra-xui/issues/891)
  ([e107acc](https://github.com/chakra-xui/chakra-xui/commit/e107acc8487898a965b0d695c1da71f46fc56d5e))
- **core:** add Skeleton export
  ([9255f24](https://github.com/chakra-xui/chakra-xui/commit/9255f24a3653f6f71773d4fdf7221c40aeddb873))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.3.4...@chakra-xui/core@0.4.0) (2019-10-14)

### Bug Fixes

- **box:** update type definitions
  ([b78723a](https://github.com/chakra-xui/chakra-xui/commit/b78723a))
- **css:** export css function
  ([c8a17c8](https://github.com/chakra-xui/chakra-xui/commit/c8a17c8))
- **cssreset:** remove comments from CSSReset preflight.js
  ([25edb5b](https://github.com/chakra-xui/chakra-xui/commit/25edb5b)), closes
  [#161](https://github.com/chakra-xui/chakra-xui/issues/161)
- **image:** add prop to opt out of the fallbackSrc logic
  ([cd1acc6](https://github.com/chakra-xui/chakra-xui/commit/cd1acc6))
- **image:** add support for native width and height
  ([e4b6165](https://github.com/chakra-xui/chakra-xui/commit/e4b6165))
- **image:** add support for native width and height
  ([298f067](https://github.com/chakra-xui/chakra-xui/commit/298f067))
- improve NumberInput API
  ([bca497e](https://github.com/chakra-xui/chakra-xui/commit/bca497e))
- **image:** improve image hook
  ([4fb5c04](https://github.com/chakra-xui/chakra-xui/commit/4fb5c04))
- **numberinput:** improve NumberInput API
  ([fe0441d](https://github.com/chakra-xui/chakra-xui/commit/fe0441d))
- **numberinput:** update API and docs for numberinput
  ([dc70274](https://github.com/chakra-xui/chakra-xui/commit/dc70274))
- **numberinput:** update story
  ([bda8efc](https://github.com/chakra-xui/chakra-xui/commit/bda8efc))
- **types:** add types for default theme. closes issue
  [#160](https://github.com/chakra-xui/chakra-xui/issues/160)
  ([dfef504](https://github.com/chakra-xui/chakra-xui/commit/dfef504))
- **types:** add types for icons to improve DX
  ([5629bc7](https://github.com/chakra-xui/chakra-xui/commit/5629bc7))
- **types:** update types to allow for migration to TS
  ([73bbe73](https://github.com/chakra-xui/chakra-xui/commit/73bbe73))

### Features

- add SimpleGrid component
  ([ff5760c](https://github.com/chakra-xui/chakra-xui/commit/ff5760c))
- add SimpleGrid component and improve Stack
  ([16cc9ef](https://github.com/chakra-xui/chakra-xui/commit/16cc9ef))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.4](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.3.3...@chakra-xui/core@0.3.4) (2019-10-09)

### Bug Fixes

- **build:** remove babel-runtime dep to fix modal issue
  ([f4ae47f](https://github.com/chakra-xui/chakra-xui/commit/f4ae47f))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.3](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.3.2...@chakra-xui/core@0.3.3) (2019-10-09)

### Bug Fixes

- **box:** add overflow types from styled-system
  ([805cb61](https://github.com/chakra-xui/chakra-xui/commit/805cb61))
- **box:** update type definition for borderWidth props
  ([f4310ec](https://github.com/chakra-xui/chakra-xui/commit/f4310ec))
- **button:** fix the types for leftIcon and rightIcon
  ([9f3ba3a](https://github.com/chakra-xui/chakra-xui/commit/9f3ba3a))
- **cssreset:** update the type definition
  ([d8f2701](https://github.com/chakra-xui/chakra-xui/commit/d8f2701))
- **iconbutton:** fix the types for the iconbutton
  ([b9462d4](https://github.com/chakra-xui/chakra-xui/commit/b9462d4))
- **modal:** add support for preserving scrollbar gap
  ([bd67ea0](https://github.com/chakra-xui/chakra-xui/commit/bd67ea0))
- **types:** export named types in all components
  ([7378b77](https://github.com/chakra-xui/chakra-xui/commit/7378b77))
- resolve yarn v2 pnp issues
  ([0e0a04f](https://github.com/chakra-xui/chakra-xui/commit/0e0a04f))
- **types:** include named exports from theme in main type definitions
  ([68e06d8](https://github.com/chakra-xui/chakra-xui/commit/68e06d8))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.2](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.3.1...@chakra-xui/core@0.3.2) (2019-09-26)

### Bug Fixes

- **alertdialog:** update type definitions
  ([da3c706](https://github.com/chakra-xui/chakra-xui/commit/da3c706))
- **drawer:** update type definitions
  ([290e82c](https://github.com/chakra-xui/chakra-xui/commit/290e82c))
- **input:** resolve the error and focus border color props
  ([45b0d97](https://github.com/chakra-xui/chakra-xui/commit/45b0d97))
- **popover:** update type definitions
  ([3a221a3](https://github.com/chakra-xui/chakra-xui/commit/3a221a3))
- **tooltip:** fix the shouldwrapchildren issues. fixes issue
  [#121](https://github.com/chakra-xui/chakra-xui/issues/121)
  ([5d90b77](https://github.com/chakra-xui/chakra-xui/commit/5d90b77))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.3.0...@chakra-xui/core@0.3.1) (2019-09-25)

### Bug Fixes

- aliases and forwarding
  ([cec87c6](https://github.com/chakra-xui/chakra-xui/commit/cec87c6))
- compose extraConfig
  ([07c9c2a](https://github.com/chakra-xui/chakra-xui/commit/07c9c2a))
- resolve npm pack issue
  ([8b0676e](https://github.com/chakra-xui/chakra-xui/commit/8b0676e))
- resolve npm pack issue
  ([44b299f](https://github.com/chakra-xui/chakra-xui/commit/44b299f))

# 0.3.0-beta (2019-09-25)

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.3.0](https://github.com/chakra-xui/chakra-xui/compare/@chakra-xui/core@0.2.8...@chakra-xui/core@0.3.0) (2019-09-24)

### Features

- Add typings for Slider.onChange
  ([2f15c6a](https://github.com/chakra-xui/chakra-xui/commit/2f15c6a)), closes
  [chakra-xui/chakra-xui#88](https://github.com/chakra-xui/chakra-xui/issues/88)
- **modal, drawer, alertdialog:** remove console errors and improve api
  ([c5ce4b4](https://github.com/chakra-xui/chakra-xui/commit/c5ce4b4))
