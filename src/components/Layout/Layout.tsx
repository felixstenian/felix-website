import { Box, Flex, FlexProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from '..'

interface LayoutProps extends FlexProps {
  children: ReactNode
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <Flex>
      <Sidebar />
      <Flex w='100%' {...rest}>
        {children}
      </Flex>
      {/* <Box></Box> */}
      {/* <Box> */}
      {/* </Box> */}
      {/* <Box /> */}
    </Flex>
  )
}

export default Layout