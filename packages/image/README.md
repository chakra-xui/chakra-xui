# @chakra-xui/image

The Image component is used to display images.

## Installation

```sh
yarn add @chakra-xui/image
```

## Import component

```jsx
import { Image } from "@chakra-xui/image"
```

## Basic Usage

```jsx
import React from 'react'
import { Image } from '@chakra-xui/image'
​
const Example = () => (
  <Image src="photo.png"  fallbackSrc="placeholdit.com/200x200" alt="A Placeholder Image" />
)
```

## Fallback support

You can provide a fallback image for when there is an error loading the `src` of
the image. You can also opt out of this behavior by passing the `ignoreFallback`
prop.

```jsx
<Image
  src="photo.png"
  fallbackSrc="placeholdit.com/200x200"
  alt="A Placeholder Image"
/>
```
