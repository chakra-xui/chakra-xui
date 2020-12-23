import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-xui/react"

export const Chakra = ({ children, cookies }) => {
  return (
    <ChakraProvider
      colorModeManager={
        cookies ? cookieStorageManager(cookies) : localStorageManager
      }
    >
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps = ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}
