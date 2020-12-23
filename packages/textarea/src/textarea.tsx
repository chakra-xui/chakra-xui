import { FormControlOptions, useFormControl } from "@chakra-xui/form-control"
import {
  chakra,
  forwardRef,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-xui/system"
import { cx, omit, __DEV__ } from "@chakra-xui/utils"
import * as React from "react"

interface TextareaOptions {
  /**
   * The border color when the textarea is focused. Use color keys in `theme.colors`
   * @example
   * focusBorderColor = "blue.500"
   */
  focusBorderColor?: string
  /**
   * The border color when the textarea is invalid. Use color keys in `theme.colors`
   * @example
   * errorBorderColor = "red.500"
   */
  errorBorderColor?: string
  /**
   * If `true`, the textarea element will span the full width of its parent
   */
  isFullWidth?: boolean
}

type Omitted = "disabled" | "required" | "readOnly"
export interface TextareaProps
  extends Omit<HTMLChakraProps<"textarea">, Omitted>,
    TextareaOptions,
    FormControlOptions,
    ThemingProps {}

/**
 * Textarea is used to enter an amount of text that's longer than a single line
 * @see Docs https://chakra-ui.com/docs/form/textarea
 */
export const Textarea = forwardRef<TextareaProps, "textarea">((props, ref) => {
  const styles = useStyleConfig("Textarea", props)
  const { className, rows, ...rest } = omitThemingProps(props)

  const textareaProps = useFormControl<HTMLTextAreaElement>(rest)

  const omitted = [
    "h",
    "minH",
    "height",
    "minHeight",
  ] as (keyof SystemStyleObject)[]

  const textareaStyles = rows ? omit(styles, omitted) : styles

  return (
    <chakra.textarea
      ref={ref}
      rows={rows}
      {...textareaProps}
      className={cx("chakra-textarea", className)}
      __css={textareaStyles}
    />
  )
})

if (__DEV__) {
  Textarea.displayName = "Textarea"
}
