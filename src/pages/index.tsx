import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Sidebar } from "../components";

export default function Home() {
  return (
    <Flex>
      <Sidebar />
        <Flex maxWidth={720} h='100vh' margin={[5, 5, '0 200px']}  flexDir='column' justify='center' >
            <Text fontSize={68} lineHeight='80px' fontWeight={600}>
              Oi, meu nome é
              <br />
              <Box display='flex' mt={5}>
                <Box>
                <Image src="/logo_1x.png" alt="Felix-Logo" position='relative' />
                </Box>
                <Text pt={4}>    
                  elix.
                </Text>
              </Box>
            </Text>
          <Flex mt={10}>
            <Text fontSize={24} lineHeight='28px'>
              Sou um desenvolvedor front-end especializado em criar experiências digitais excepcionais.
            </Text>
          </Flex>
          <Button 
            mt={20} 
            width={200} 
            height={50} 
            fontWeight={300} 
            variant='outline' 
            borderColor='#69FFDB' 
            color='#69FFDB'
            _hover={{
              bg: '#69FFDB',
              color: '#0A1A2E',
              transition: 'background 0.5s'
            }}
          >
            CONTATO
          </Button>
        </Flex>
    </Flex>
  )
}
