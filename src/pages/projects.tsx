import { useState } from 'react'
import { GetStaticProps } from 'next'
import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { motion } from 'framer-motion'

import { getPrismicClient } from '../services/prismic'
import { CardProject, CopyRight, Header, Sidebar } from '../components'

const MotionFlex = motion(Flex)

type Project = {
  // eslint-disable-next-line prettier/prettier
  uid?: string,
  // eslint-disable-next-line prettier/prettier
  tags: [],
  data: {
    // eslint-disable-next-line prettier/prettier
    title: string,
    // eslint-disable-next-line prettier/prettier
    description: string,
    thumb: {
      url: string
      // eslint-disable-next-line prettier/prettier
    },
    repo: {
      url: string
      // eslint-disable-next-line prettier/prettier
    },
    link: {
      url: string
    }
  }
}

interface ResultProps {
  // eslint-disable-next-line prettier/prettier
  projects: Project[],
  isPagination: string | null
}
interface ProjectProps {
  result: ResultProps
}

const Projects = ({ result }: ProjectProps) => {
  const { projects, isPagination } = result

  const [projectsData, setProjectsData] = useState<Project[]>(projects)
  const [nextPage, setNextPage] = useState(isPagination)

  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false
  })

  const pagination = (): void => {
    fetch(nextPage)
      .then(response => response.json())
      .then(data => {
        const { results, next_page } = data
        const newProject = results?.map(project => {
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
        setNextPage(next_page || null)
        setProjectsData([...projectsData, ...newProject])
      })
  }

  return (
    <Flex>
      {!!isWideVersion && <Header />}
      <Sidebar />
      <MotionFlex
        align='center'
        w='100%'
        flexDir='column'
        mx={50}
        mt={[20, 20, 0]}
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
        <CardProject projects={projectsData} />
        <Box mt={50}>
          {!!nextPage && (
            <Button
              width={200}
              height={50}
              fontWeight={300}
              variant='outline'
              borderColor='primary'
              color='primary'
              onClick={pagination}
              _hover={{
                bg: 'primary',
                color: '#0A1A2E',
                transition: 'background 0.5s',
                fontWeight: 600
              }}
            >
              VER MAIS
            </Button>
          )}
        </Box>
      </MotionFlex>
      <CopyRight />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([Prismic.predicates.at('document.type', 'projects')], {
    fetch: ['projects.title', 'projects.description', 'projects.thumbnail', 'projects.repo', 'projects.app_link'],
    orderings: '[document.first_publication_date desc]',
    pageSize: 3
  })

  const projects = response?.results?.map((project: any) => {
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
        projects: projects || [],
        isPagination: response?.next_page || null
      }
    },
    revalidate: 60 * 30
  }
}

export default Projects
