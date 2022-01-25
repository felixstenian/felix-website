import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Textarea,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { Header, Sidebar } from '../components'
import { motion } from 'framer-motion'

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
        justify={['', '', 'center']}
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
        <Box maxWidth={580}>
          <Text fontSize={[42, 46]} fontWeight={600} lineHeight='54px'>
            Gostaria de entrar em contato comigo ?
          </Text>
          <Text mt={10} fontWeight={300} fontSize={[22, 26]} lineHeight='28px'>
            Preencha o incrível formulário abaixo ou envie um e-mail para {''}
            <Link
              href='mailto:felixstenian.dev@gmail.com.br'
              target='_blank'
              _hover={{
                textDecoration: 'none',
                color: '#69FFDB'
              }}
            >
              felixstenian.dev@gmail.com.br
            </Link>
            {''} e vamos conversar.
          </Text>

          <VStack spacing={8} mt={10}>
            <FormControl isRequired>
              <FormLabel htmlFor='Nome'>Nome</FormLabel>
              <Input
                name='nome'
                id='nome'
                placeholder='Seu nome'
                bgColor='gray.900'
                borderColor='#69FFDB'
                focusBorderColor='#69FFDB'
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='Email'>Email</FormLabel>
              <Input name='email' id='email' placeholder='Seu email' borderColor='#69FFDB' focusBorderColor='#69FFDB' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='Mensagem'>Mensagem</FormLabel>
              <Textarea
                name='mensagem'
                id='messagem'
                placeholder='Sua mensagem'
                borderColor='#69FFDB'
                focusBorderColor='#69FFDB'
              />
            </FormControl>

            <Button
              width={200}
              height={50}
              fontWeight={300}
              variant='outline'
              borderColor='#69FFDB'
              color='#69FFDB'
              _hover={{
                bg: '#69FFDB',
                color: '#0A1A2E',
                transition: 'background 0.5s',
                fontWeight: 600
              }}
            >
              ENVIAR
            </Button>
          </VStack>
        </Box>
      </MotionFlex>
    </Flex>
  )
}

export default Contato
