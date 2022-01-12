import { Flex, FlexProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface LayoutProps extends FlexProps {
  children: ReactNode
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <Flex direction='column' h='100vh' align='center' w='100vw' {...rest}>
      {children}
    </Flex>
  )
}

export default Layout