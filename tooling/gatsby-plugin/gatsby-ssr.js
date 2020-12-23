import React from "react"
import { ColorModeScript } from "@chakra-xui/react"
export { wrapRootElement } from "./gatsby-browser"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />])
}
