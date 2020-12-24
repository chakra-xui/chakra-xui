# @chakra-xui/skip-nav

Skip navigation link for screen reader and keyboard users. Because the main
content is not usually the first thing in the document, it is valuable to
provide a shortcut for keyboard and screen reader users to skip to the content.

If the user does not navigate with the keyboard, they won't see the link.

## Install

```sh
npm i @chakra-xui/skip-nav
# or
yarn add @chakra-xui/skip-nav
```

## Import

```jsx
import { SkipNavLink, SkipNavContent } from "@chakra-xui/skip-nav"
```

## Usage

```jsx
ReactDOM.render(
  <>
    {/* 👇🏻 put the link at the top of your app */}
    <SkipNavLink>Skip to content</SkipNavLink>
    <div>
      <Navbar />
      {/* 👇🏻 and the content next to your main content */}
      <SkipNavContent>
        <App />
      </SkipNavContent>
    </div>
  </>,
  rootNode,
)
```
