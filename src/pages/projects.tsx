import { Box, Button, Flex } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { CardProject, Sidebar } from '../components'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useState } from 'react'

interface Project {
  uid: string,
  tags: [],
  data: {
    title: string,
    description: string,
    thumb: {
      url: string
    },
    repo: {
      url: string
    },
    link: {
      url: string
    }
  }
}

interface ResultProps {
  data: Project[]
  next_page: string | null;
}
interface ProjectProps {
  result: ResultProps;
}

const Projects = ({ result }: ProjectProps) => {
  const { data, next_page } = result;

  const [projects, setProjects] = useState<Project[]>(data)
  const [nextPage, setNextPage] = useState<string>(next_page)

  const pagination = (): void => {
    fetch(nextPage)
      .then(response => response.json())
      .then(data => {
        const newProject = data?.results?.map(project => {
          return {
            slug: project.uid,
            tags: project.tags,
            data: {
              title: RichText.asText(project?.data?.title),
              description: project?.data?.description,
              thumb: project?.data?.thumbnail,
              repo: project?.data?.repo,
              link: project?.data?.app_link
            }
          }
        })
        setNextPage(data.next_page)
        setProjects([...projects, ...newProject])
      })
  }
  
  return (
    <Flex>
      <Sidebar />
      <Flex align='center' w='100%' flexDir='column' mb={50}>
        <CardProject projects={projects} />
        <Box mt={50}>
          { !!nextPage &&
            <Button 
              width={200} 
              height={50} 
              fontWeight={300} 
              variant='outline' 
              borderColor='#69FFDB' 
              color='#69FFDB'
              onClick={pagination}
              _hover={{
                bg: '#69FFDB',
                color: '#0A1A2E',
                transition: 'background 0.5s',
                fontWeight: 600
              }}
            >
              VER MAIS
            </Button>
          }
        </Box>
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ], {
    fetch: [
      'projects.title',
      'projects.description',
      'projects.thumbnail',
      'projects.repo',
      'projects.app_link',
    ],
    orderings: '[document.first_publication_date desc]',
    pageSize: 3
  })

  const data = response?.results?.map(project => {
    return {
      uid: project.uid,
      tags: project.tags,
      data: {
        title: RichText.asText(project?.data?.title),
        description: project?.data?.description,
        thumb: project?.data?.thumbnail,
        repo: project?.data?.repo,
        link: project?.data?.app_link
      }
    }
  })

  return {
    props: {
      result: {
        data,
        next_page: response.next_page,
      }
    },
    revalidate: 60 * 30
  }
}

export default Projects
          