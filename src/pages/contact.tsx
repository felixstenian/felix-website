import { Box, Button, Flex, Icon, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CopyRight, Header, Sidebar } from '../components'
import { motion } from 'framer-motion'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from 'react-icons/ri'
import { NavLink } from '../components/Sidebar/NavLink'

const MotionFlex = motion(Flex)

const Contato = () => {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false
  })

  return (
    <Flex>
      {!!isWideVersion && <Header />}
      <Sidebar />
      <MotionFlex
        flexDir='column'
        w='100%'
        h='100vh'
        align={['center', 'center', 'flex-end', 'center']}
        justify={['', '', 'space-around']}
        mt={[40, 40, 0]}
        px={[5, 5, '5%', 0]}
        initial='initial'
        animate='animate'
        variants={{
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          }
        }}
        transition={{ duration: 0.5 }}
      >
        <Box maxWidth={580} align='center'>
          <Text fontSize={[42, 46]} fontWeight={600} lineHeight='54px' mb={50}>
            Gostaria de entrar em contato comigo ?
          </Text>

          <VStack spacing={4}>
            <NavLink href='https://github.com/felixstenian' target='_blank' w='100%'>
              <Button
                width='50%'
                minWidth={210}
                height={50}
                fontWeight={500}
                variant='outline'
                borderColor='none'
                color='bgSideBar'
                bg='primary'
                _hover={{
                  bg: '#40d6b2',
                  transition: 'background 0.5s'
                }}
              >
                <Flex align='flex-end' justify={['flex-start']} w={['60%', '50%']}>
                  <Icon as={RiGithubFill} color='bgSideBar' fontSize={28} mr={1} />
                  <Text fontSize={26} pr={3}>
                    |
                  </Text>
                  <Text fontSize={20}>GitHub</Text>
                </Flex>
              </Button>
            </NavLink>

            <NavLink href='https://www.linkedin.com/in/felixstenian/' target='_blank' w='100%'>
              <Button
                width='50%'
                minWidth={210}
                height={50}
                fontWeight={500}
                variant='outline'
                borderColor='none'
                color='bgSideBar'
                bg='primary'
                _hover={{
                  bg: '#40d6b2',
                  transition: 'background 0.5s'
                }}
              >
                <Flex align='flex-end' justify={['flex-start']} w={['65%', '50%']}>
                  <Icon as={RiLinkedinFill} color='bgSideBar' fontSize={28} mr={1} />
                  <Text fontSize={26} pr={3}>
                    |
                  </Text>
                  <Text fontSize={20}>LinkedIn</Text>
                </Flex>
              </Button>
            </NavLink>

            <NavLink href='mailto:felixstenian.dev@gmail.com.br' target='_blank' w='100%'>
              <Button
                width='50%'
                minWidth={210}
                height={50}
                fontWeight={500}
                variant='outline'
                borderColor='none'
                color='bgSideBar'
                bg='primary'
                _hover={{
                  bg: '#40d6b2',
                  transition: 'background 0.5s'
                }}
              >
                <Flex align='center' justify={['flex-start']} w={['65%', '50%']}>
                  <Icon as={RiMailFill} color='bgSideBar' fontSize={28} mr={1} />
                  <Text fontSize={26} pr={3}>
                    |
                  </Text>
                  <Text fontSize={20}>Gmail</Text>
                </Flex>
              </Button>
            </NavLink>
          </VStack>
        </Box>
      </MotionFlex>
      <CopyRight />
    </Flex>
  )
}

export default Contato
