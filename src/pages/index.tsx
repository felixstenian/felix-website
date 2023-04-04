import { Box, Button, Flex, flexbox, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { CopyRight, Header, Sidebar } from '../components'
import { motion } from 'framer-motion'
import { NavLink } from '../components/Sidebar/NavLink'

const MotionFlex = motion(Flex)

export default function Home() {
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
        maxWidth={720}
        h='100vh'
        margin={[5, 5, '0 200px']}
        flexDir='column'
        justify='center'
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
        <MotionFlex
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize={68} lineHeight='80px' fontWeight={600}>
            Oi, meu nome é
            <br />
            <Box display='flex' mt={5}>
              <Box>
                <Image src='/logo_1x.png' alt='Felix-Logo' position='relative' />
              </Box>
              <Text pt={4}>elix.</Text>
            </Box>
          </Text>
        </MotionFlex>
        <Flex mt={10}>
          <Text fontSize={24} lineHeight='28px'>
            Sou um Software Developer especializado em criar experiências digitais excepcionais.
          </Text>
        </Flex>
        <NavLink href='/contact'>
          <Button
            mt={20}
            width={200}
            height={50}
            fontWeight={500}
            variant='outline'
            borderColor='primary'
            color='bgSideBar'
            bg='primary'
            _hover={{
              bg: 'bgSideBar',
              color: 'primary',
              transition: 'background 0.5s'
            }}
          >
            CONTATO
          </Button>
        </NavLink>
      </MotionFlex>
      <CopyRight />
    </Flex>
  )
}
