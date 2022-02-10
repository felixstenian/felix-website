import { Flex, Box, Text, Image, Stack, Icon, Divider } from '@chakra-ui/react'
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri'

import { NavLink } from './NavLink'

const SidebarNav = () => {
  return (
    <Flex
      as='aside'
      bg='#11233F'
      w={[250, 250, 131]}
      minWidth={130}
      h='100vh'
      justify='space-between'
      align='center'
      flexDir='column'
      position='fixed'
    >
      <Stack spacing={2} align='center' mt={10} borderBottom='1px solid' borderColor='primary' w='100%'>
        <Image src='/logo_1x.png' alt='Felix Logo' />
        <Text fontSize={26} lineHeight='30px' fontWeight={600}>
          Felix
        </Text>
        <Text fontSize={14} lineHeight='16px' pb={3}>
          Web Developer
        </Text>
      </Stack>

      <Stack spacing={3} w='100%'>
        <Box w='100%' align='center'>
          <Divider mb={3} borderColor='rgba(105, 255, 219, 0.2)' />
          <NavLink href='/'>Home</NavLink>
        </Box>

        <Box w='100%' align='center'>
          <Divider mb={3} borderColor='rgba(105, 255, 219, 0.2)' />
          <NavLink href='/about'>Sobre</NavLink>
        </Box>

        <Box w='100%' align='center'>
          <Divider mb={3} borderColor='rgba(105, 255, 219, 0.2)' />
          <NavLink href='/projects'>Projetos</NavLink>
        </Box>

        <Box w='100%' align='center'>
          <Divider mb={3} borderColor='rgba(105, 255, 219, 0.2)' />
          <NavLink href='/contact'>Contato</NavLink>
          <Divider mt={3} borderColor='rgba(105, 255, 219, 0.2)' />
        </Box>
      </Stack>

      <Stack spacing={1} flexDir={['row', 'row', 'column']} pb={[10, 10, 0]} align='center'>
        <NavLink href='https://github.com/felixstenian' target='_blank' mt={[1, 0]}>
          <Icon as={RiGithubFill} color='primary' fontSize={28} _hover={{ color: '#ffffff' }} mx={[2, 2, 0]} />
        </NavLink>

        <NavLink href='https://www.linkedin.com/in/felixstenian/' target='_blank'>
          <Icon as={RiLinkedinFill} color='primary' fontSize={28} _hover={{ color: '#ffffff' }} mx={[2, 2, 0]} />
        </NavLink>

        <NavLink href='mailto:felixstenian.dev@gmail.com.br' target='_blank'>
          <Icon as={RiMailFill} color='primary' fontSize={28} _hover={{ color: '#ffffff' }} mx={[2, 2, 0]} />
        </NavLink>

        <Divider orientation='vertical' borderColor='primary' height={[0, 0, '50px']} />
      </Stack>
    </Flex>
  )
}

export default SidebarNav
