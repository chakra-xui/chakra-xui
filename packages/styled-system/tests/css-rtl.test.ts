import { createBreakpoints } from "@chakra-xui/theme-tools"
import { css } from "../src"

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

test("RTL: should transform logical css properties", () => {
  const result = css({
    float: "left",
    marginStart: "sm",
    roundedStart: ["20px", "40px"],
    borderColor: "red",
  })({
    breakpoints,
    direction: "rtl",
    space: {
      sm: 40,
    },
  })

  expect(result).toMatchInlineSnapshot(`
    Object {
      "@media screen and (min-width: 40em)": Object {
        "borderBottomRightRadius": "40px",
        "borderTopRightRadius": "40px",
      },
      "borderBottomRightRadius": "20px",
      "borderColor": "red",
      "borderTopRightRadius": "20px",
      "float": "right",
      "marginInlineStart": 40,
    }
  `)
})

test("LTR: should transform logical css properties", () => {
  const result = css({
    float: "left",
    marginEnd: "sm",
    borderStartRadius: ["20px", "40px"],
    borderColor: "red",
  })({
    breakpoints,
    direction: "ltr",
    space: { sm: 40 },
  })

  expect(result).toMatchInlineSnapshot(`
    Object {
      "@media screen and (min-width: 40em)": Object {
        "borderBottomLeftRadius": "40px",
        "borderTopLeftRadius": "40px",
      },
      "borderBottomLeftRadius": "20px",
      "borderColor": "red",
      "borderTopLeftRadius": "20px",
      "float": "left",
      "marginInlineEnd": 40,
    }
  `)
})

test("should work after refactoring. hehe", () => {
  const result = css({
    mx: "40px",
    w: 0.4,
    bg: "pinkish",
  })({
    breakpoints,
    direction: "ltr",
    space: {
      sm: 40,
    },
    colors: {
      pinkish: "#dfsdds",
    },
  })

  expect(result).toMatchInlineSnapshot(`
    Object {
      "background": "#dfsdds",
      "marginLeft": "40px",
      "marginRight": "40px",
      "width": "40%",
    }
  `)
})
