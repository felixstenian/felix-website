import { Box, Button, Flex, HStack, Icon, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiGithubFill, RiLinkM } from 'react-icons/ri'
import { Sidebar } from '../components'

const Projects = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  })

  const projectsMock = [
    {
      title: 'Projeto 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos tenetur dolores perferendis porro illo nisi ad quod ab ratione architecto atque consequuntur nihil, delectus expedita doloribus nesciunt non numquam.',
      thumb: 'https://mobirise.com/assets52/images/poster.webp',
      tags: [
        'React',
        'TypeScript',
        'ChakraUI'
      ],
      repo: 'https://github.com/felixstenian',
      link: 'https://github.com/felixstenian'
    },
    {
      title: 'Projeto 2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos tenetur dolores perferendis porro illo nisi ad quod ab ratione architecto atque consequuntur nihil, delectus expedita doloribus nesciunt non numquam.',
      thumb: 'https://mobirise.com/assets52/images/poster.webp',
      tags: [
        'React',
        'TypeScript',
        'Styled-Components'
      ],
      repo: 'https://github.com/felixstenian',
      link: 'https://github.com/felixstenian'
    },
    {
      title: 'Projeto 3',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos tenetur dolores perferendis porro illo nisi ad quod ab ratione architecto atque consequuntur nihil, delectus expedita doloribus nesciunt non numquam.',
      thumb: 'https://mobirise.com/assets52/images/poster.webp',
      tags: [
        'Angular',
        'TypeScript'
      ],
      repo: 'https://github.com/felixstenian',
      link: 'https://github.com/felixstenian'
    },
    {
      title: 'Projeto 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos tenetur dolores perferendis porro illo nisi ad quod ab ratione architecto atque consequuntur nihil, delectus expedita doloribus nesciunt non numquam.',
      thumb: 'https://mobirise.com/assets52/images/poster.webp',
      tags: [
        'React',
        'NextJs',
        'ChakraUI'
      ],
      repo: 'https://github.com/felixstenian',
      link: 'https://github.com/felixstenian'
    },
    {
      title: 'Projeto 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos tenetur dolores perferendis porro illo nisi ad quod ab ratione architecto atque consequuntur nihil, delectus expedita doloribus nesciunt non numquam.',
      thumb: 'https://mobirise.com/assets52/images/poster.webp',
      tags: [
        'React',
        'TypeScript',
        'NextJs'
      ],
      repo: 'https://github.com/felixstenian',
      link: 'https://github.com/felixstenian'
    }
  ]

  return (
    <Flex>
      <Sidebar />
      <Flex align='center' w='100%' flexDir='column' mb={50}>
        { projectsMock.map((project, index) => {
          return (
            <>
              {(index%2 == 0) ?
                <Flex 
                  key={project.title}
                  maxWidth={914}
                  px={5}
                  flexDir={['column', 'column', 'column', 'row']} 
                  align='flex-end'
                  mt={['70px', 50]}
                  ml={[0, 0, 8, 0]}
                >
                  { !isWideVersion &&  <Text fontWeight={500} fontSize={26} color='#69FFDB' lineHeight='30px' mb={5}> {project.title} </Text>}
                  <Flex w={['100%', '100%', '85%', '60%']} pl={[5, 5, 0]}>
                    <Image src={project.thumb} alt='' />
                  </Flex>
                  <Flex flexDir='column' justify='space-around' align='flex-end' w={['100%', '100%', '85%', '40%']} pr={[5, 5, 0]}>
                    { isWideVersion &&  <Text fontWeight={500} fontSize={26} color='#69FFDB' lineHeight='30px' mb={2}> {project.title} </Text>}
                    <Box textAlign='right' bg='#11233F' p={5} ml={[0, 0, -3]} mt={[-3, -3, -3, 0]}>
                      <Text fontSize={[16, 18]} lineHeight='18px' >
                        {project.description}
                      </Text>
                    </Box>
                    <HStack mt={2}>
                      {project.tags.map(tag => (
                        <Box key={tag} fontSize={16} lineHeight='19px' color='rgba(196, 196, 196, 1)'>{tag}</Box>
                      ))}
                    </HStack>
                    <HStack mt={2}>
                        <Link href={project.repo} target='_blank'>
                          <Icon as={RiGithubFill} color='#69FFDB' fontSize={26} _hover={{ color: '#ffffff' }} />
                        </Link>
                        <Link href={project.link} target='_blank'>
                          <Icon as={RiLinkM} color='#69FFDB' fontSize={26} _hover={{ color: '#ffffff' }} />
                        </Link>
                    </HStack>
                  </Flex>
                </Flex>
                :
                <Flex 
                  key={project.title}
                  maxWidth={914}
                  px={5}
                  flexDir={['column', 'column', 'column', 'row']}
                  align='flex-end'
                  mt={50}
                  ml={[0, 0, 8, 0]}
                >
                  { !isWideVersion &&  (
                    <>
                      <Text fontWeight={500} fontSize={26} color='#69FFDB' lineHeight='30px' mb={5}>{project.title}</Text>
                      <Flex w={['100%', '100%', '85%', '60%']} pl={[5, 5, 0]}>
                        <Image src={project.thumb} alt='' />
                      </Flex>
                    </>
                  )}
                  <Flex flexDir='column' justify='space-around' align={['flex-end', 'flex-end', 'flex-start']} w={['100%', '100%', '85%', '40%']} pr={[5, 5, 0]}>
                    { isWideVersion &&  <Text fontWeight={500} fontSize={26} color='#69FFDB' lineHeight='30px' mb={2}> {project.title} </Text>}
                    <Box textAlign='right' bg='#11233F' p={5} ml={[0, 0, -3, 0]} mr={[0, 0, 0, -3]} mt={[-3, -3, -3, 0]} position='relative'>
                      <Text fontSize={[16, 18]} lineHeight='18px' >
                        {project.description}
                      </Text>
                    </Box>
                    <HStack mt={2}>
                      {project.tags.map(tag => (
                        <Box key={tag} fontSize={16} lineHeight='19px' color='rgba(196, 196, 196, 1)'>{tag}</Box>
                      ))}
                    </HStack>
                    <HStack mt={2}>
                        <Link href={project.repo} target='_blank'>
                          <Icon as={RiGithubFill} color='#69FFDB' fontSize={26} _hover={{ color: '#ffffff' }} />
                        </Link>
                        <Link href={project.link} target='_blank'>
                          <Icon as={RiLinkM} color='#69FFDB' fontSize={26} _hover={{ color: '#ffffff' }} />
                        </Link>
                    </HStack>
                  </Flex>
                  { isWideVersion &&
                    <Flex w={['100%', '100%', '60%']} pl={[5, 5, 0]}>
                      <Image src={project.thumb} alt='' />
                    </Flex>
                  }
                </Flex>
              }
            </>
          )
        })}
        <Box mt={50}>
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
            VER MAIS
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Projects
          