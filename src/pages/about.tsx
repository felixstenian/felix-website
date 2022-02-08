import { Box, Flex, Image, Text, Stack, List, ListItem, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { CopyRight, Header, Sidebar } from '../components'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const About = () => {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false
  })

  const techs = ['JavaScript (ES6 +)', 'ReactJs', 'NextJs', 'TypeScript', 'AngularJs']

  return (
    <Flex>
      {!!isWideVersion && <Header />}
      <Sidebar />
      <MotionFlex
        px={[5, 10, 15, 20]}
        align={['flex-end', 'flex-end', 'flex-end', 'center']}
        flexDir='column'
        w='100%'
        mt={[20, 20, 10]}
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
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Box maxWidth={590} w='100%'>
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
          </Box>
        </motion.div>

        <Stack mt={10} spacing={4} maxWidth={610} mb={16}>
          <Text fontSize={22}>Sou um desenvolvedor front-end localizado em Maceió, Alagoas.</Text>
          <Text fontSize={22}>
            Quando não estou programando e tentando solucionar problemas, você pode me encontrar praticando esportes,
            experimentando novas receitas de comida, realizando atividades ao ar livre ou assistindo séries e filmes.
          </Text>
          <Text fontSize={22}>
            Trabalho com tecnologia e web há mais de 4 anos, avançando até hoje, tive o privilégio de trabalhar em
            empresas na área de TI e me desenvolver profissionalmente.
          </Text>
          <Text fontSize={22}>
            Sempre trabalho para alcançar o melhor resultado em cada projeto que coloco em minhas mãos.
          </Text>
          <Text fontSize={22}>
            Meu foco principal atualmente é construir produtos e experiências digitais para uma variedade de clientes.
          </Text>
          <Text fontSize={22}>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</Text>
          <List>
            {techs.map(tech => (
              <ListItem key={tech}>
                <Flex align='center'>
                  <Text fontFamily='Roboto Mono' fontSize={32} fontWeight={700} color='primary'>
                    {'>'}
                  </Text>
                  <Text fontSize={22} ml={2}>
                    {tech}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Stack>
      </MotionFlex>
      <CopyRight />
    </Flex>
  )
}

export default About
