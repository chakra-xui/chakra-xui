import { chakra, ChakraProps } from "@chakra-xui/system"
import { scaleFadeConfig, slideFadeConfig } from "@chakra-xui/transition"
import { HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"

export interface ModalTransitionProps
  extends Omit<HTMLMotionProps<"section">, "color">,
    Omit<ChakraProps, "transition"> {
  preset: "slideInBottom" | "slideInRight" | "scale" | "none"
}

const transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true },
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true },
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true },
  },
  none: {},
}

const Motion = chakra(motion.section)

export const ModalTransition = React.forwardRef(
  (props: ModalTransitionProps, ref: React.Ref<any>) => {
    const { preset, ...rest } = props
    const motionProps = transitions[preset]
    return <Motion ref={ref} {...motionProps} {...rest} />
  },
)
