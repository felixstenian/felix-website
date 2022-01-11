import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction='column' h='100vh' align='center'>
      {children}
    </Flex>
  )
}

export default Layout