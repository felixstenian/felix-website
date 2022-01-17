import { Box, Button, Flex } from '@chakra-ui/react'
import { CardProject, Sidebar } from '../components'

const Projects = () => {

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
        <CardProject projects={projectsMock} />
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
          