import { get, getWithDefault, isNumber } from "@chakra-xui/utils"
import * as CSS from "csstype"
import { PropConfig } from "../core"
import { positiveOrNegative } from "./positive-or-negative"

export * from "./positive-or-negative"
export * from "./sort"
export * from "./types"

export function makeConfig(scale: string, transform?: PropConfig["transform"]) {
  return <T extends keyof CSS.Properties>(prop: T | T[]) => {
    const result: PropConfig = { scale }
    if (transform) result.transform = transform
    if (Array.isArray(prop)) result.properties = prop
    else result.property = prop
    return result
  }
}

function fractionalValue(value: any, scale: any) {
  const defaultValue = !isNumber(value) || value > 1 ? value : `${value * 100}%`
  return get(scale, value, defaultValue)
}

export const t = {
  borderWidths: makeConfig("borderWidths"),
  borderStyles: makeConfig("borderStyles"),
  colors: makeConfig("colors"),
  borders: makeConfig("borders"),
  radii: makeConfig("radii"),
  space: makeConfig("space"),
  spaceT: makeConfig("space", positiveOrNegative),
  prop: (
    property: keyof CSS.Properties,
    transform?: PropConfig["transform"],
  ) => ({ property, transform }),
  sizes: makeConfig("sizes"),
  sizesT: makeConfig("sizes", fractionalValue),
  shadows: makeConfig("shadows"),
}

export function getIsRtl(props: any) {
  const theme = "theme" in props ? props.theme : props
  return theme.direction === "rtl"
}

/**
 * Polyfill for border-{start|end}-radius properties.
 * We'll remove this once css logical properties is supported in major browsers
 */
export function polyfill<T extends keyof CSS.Properties>(map: {
  ltr: T | T[]
  rtl: T | T[]
}) {
  return (value: any, scale: any, props: any) => {
    const isRtl = getIsRtl(props)
    const raw = getWithDefault(value, scale)
    const result: any = {}

    if (Array.isArray(map.ltr)) {
      map.ltr.forEach((_, i) => {
        result[isRtl ? map.rtl[i] : map.ltr[i]] = raw
      })
    } else {
      result[isRtl ? map.rtl : map.ltr] = raw
    }
    return result
  }
}

/**
 * Credits to https://github.com/kentcdodds/rtl-css-js/blob/aaf3e9885026de11b01f3b73258f25e21b7432f7/src/internal/utils.js
 * @todo use this for margin, padding, border-radius value transformations in rtl
 */
function getValuesAsList(value: string) {
  return value
    .replace(/ +/g, " ")
    .split(" ")
    .map((i) => i.trim())
    .filter(Boolean)
    .reduce(
      ({ list, state }, item) => {
        const openParansCount = (item.match(/\(/g) || []).length
        const closedParansCount = (item.match(/\)/g) || []).length
        if (state.parensDepth > 0) {
          list[list.length - 1] = `${list[list.length - 1]} ${item}`
        } else {
          list.push(item)
        }
        state.parensDepth += openParansCount - closedParansCount
        return { list, state }
      },
      { list: [], state: { parensDepth: 0 } } as any,
    ).list
}

export function handleQuartetValues(value: string) {
  const splitValues = getValuesAsList(value)
  if (splitValues.length <= 3 || splitValues.length > 4) {
    return value
  }
  const [top, right, bottom, left] = splitValues
  return [top, left, bottom, right].join(" ")
}

export const isRtl = (theme: any) => theme.direction === "rtl"
