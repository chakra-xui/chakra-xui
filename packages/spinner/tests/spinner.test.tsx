import * as React from "react"
import { render } from "@chakra-xui/test-utils"
import { Spinner } from "../src"

test("Spinner renders correctly", () => {
  const { asFragment } = render(<Spinner />)
  expect(asFragment()).toMatchSnapshot()
})
