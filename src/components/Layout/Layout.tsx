import { Flex, FlexProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Sidebar } from '..'

interface LayoutProps extends FlexProps {
  children: ReactNode
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <Flex align='center' w='100vw' h='100vh'  {...rest}>
      <Sidebar />
        {children}
    </Flex>
  )
}

export default Layout