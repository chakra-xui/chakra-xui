<p align="center">
  <a href="https://github.com/chakra-xui/chakra-xui">
    <img src="https://github.com/chakra-xui/chakra-xui/blob/master/logo/logo-colored@2x.png?raw=true" alt="Chakra logo" width="300" />
  </a>
</p>

<h1 align="center">Build Accessible React Apps with Speed ⚡️</h1>

<br>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@chakra-xui/react"/>
</p>

**NOTE: Chakra xui is a fork of Chakra UI.**

Chakra xui provides a set of accessible, reusable, and composable React
components that make it super easy to create websites and apps.

## Documentation? 📝

Latest version (v1) => https://chakra-xui.com

## Features 🚀

- Ease of Styling: Chakra xui contains a set of layout components like `Box` and
  `Stack` that make it easy to style your components by passing props.
  [Learn more](https://chakra-xui.com/style-props)
- Flexible & composable: Chakra xui components are built on top of a React UI
  Primitive for endless composability.
- Accessible. Chakra xui components follow the WAI-ARIA guidelines
  specifications and have the right `aria-*` attributes.
- Dark Mode 😍: Most components in Chakra xui are dark mode compatible.

## Installing Chakra xui

To use Chakra xui components, all you need to do is install the
`@chakra-xui/react` package and its peer dependencies:

```sh
$ yarn add @chakra-xui/react framer-motion

# or

$ npm install @chakra-xui/react framer-motion
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ChakraProvider` provided by
   **@chakra-xui/react**.

```jsx
import { ChakraProvider } from "@chakra-xui/react"

// Do this at the root of your application
function App({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you
can toggle between light and dark mode within your app.

2. Now you can start using components like so!:

```jsx
import { Button } from "@chakra-xui/react"

function Example() {
  return <Button>I just consumed some ⚡️Chakra!</Button>
}
```

## CodeSandbox Templates

- JavaScript Starter: https://codesandbox.io/s/chakra-xui-javascript-lzzg9
- TypeScript Starter: https://codesandbox.io/s/chakra-xui-typescript-pomi8

## `create-react-app` Templates

[Check out our guide](https://chakra-xui.com/guides/integrations/with-cra) for
information on how to use our official `create-react-app` templates.

## License

MIT © [Segun Adebayo](https://github.com/segunadebayo)
