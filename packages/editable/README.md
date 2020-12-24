# @chakra-xui/editable

EditableText is used for inline renaming of some text. It appears as normal UI
text but transforms into a text input field when the user clicks or focuses on
it.

## Installation

```sh
yarn add @chakra-xui/editable

# or

npm i @chakra-xui/editable
```

## Import component

```js
import { Editable, EditableInput, EditablePreview } from "@chakra-xui/react"
```

## Usage

```jsx
<Editable defaultValue="Take some chakra">
  <EditablePreview />
  <EditableInput />
</Editable>
```
