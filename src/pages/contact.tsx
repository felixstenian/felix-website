import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Text, Textarea, VStack } from '@chakra-ui/react'
import { Sidebar } from '../components'
import { NavLink } from '../components/Sidebar/NavLink'

const Contato = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex flexDir='column' w='100%' h='100vh' align={['center', 'center', 'flex-end', 'center']} justify={['', '', 'center']} mt={[20, 20, 0]} px={[5, 5, '5%', 0]}>
        <Box maxWidth={580}>
          <Text fontSize={[42, 46]} fontWeight={600} lineHeight='54px'>Gostaria de entrar em contato comigo ?</Text>
          <Text 
            mt={10} 
            fontWeight={300} 
            fontSize={[22, 26]} 
            lineHeight='28px' 
          >
            Preencha o incrível formulário abaixo ou envie um e-mail para {''}
            <Link 
              href='mailto:felixstenian.dev@gmail.com.br' 
              target='_blank'
              _hover={{
                textDecoration: 'none',
                color: '#69FFDB',
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
              <Input 
                name='email' 
                id='email' 
                placeholder='Seu email'
                borderColor='#69FFDB'
                focusBorderColor='#69FFDB' 
              />
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
      </Flex>
    </Flex>
  )
}

export default Contato