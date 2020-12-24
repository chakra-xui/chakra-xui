import { mode } from "@chakra-xui/theme-tools"

const baseStyle = (props: Record<string, any>) => ({
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline",
    padding: "1rem",
    position: "fixed",
    top: "1.5rem",
    left: "1.5rem",
    bg: mode("white", "gray.700")(props),
  },
})

export default {
  baseStyle,
}
