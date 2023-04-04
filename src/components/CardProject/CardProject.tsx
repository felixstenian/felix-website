import { Box, Flex, HStack, Icon, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiGithubFill, RiLinkM } from 'react-icons/ri'
import { motion } from 'framer-motion'

import useSound from 'use-sound'

const MotionBox = motion(Box)

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
interface CardProjectProps {
  projects: Project[]
}

const CardProject = ({ projects }: CardProjectProps) => {
  const soundUrl = '/sounds/pop-down.mp3'
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 })

  const isWideVersion = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  })

  return (
    <>
      {projects.map((project, index) => {
        const { title, description, thumb, repo, link } = project?.data
        return (
          <>
            {index % 2 == 0 ? (
              <Flex
                key={project?.uid}
                maxWidth={914}
                px={5}
                flexDir={['column', 'column', 'column', 'row']}
                align='flex-start'
                mt={['70px', 50]}
                ml={[0, 0, 8, 0]}
                onMouseEnter={() => play()}
                onMouseLeave={() => stop()}
              >
                {!isWideVersion && (
                  <Text fontWeight={500} fontSize={26} color='primary' lineHeight='30px' mb={5}>
                    {' '}
                    {title}{' '}
                  </Text>
                )}
                <Flex w={['100%', '100%', '85%', '60%']} pl={[5, 5, 0]}>
                  <MotionBox
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Image src={thumb?.url} alt={`Projeto ${title}`} _hover={{ w: '110%' }} />
                  </MotionBox>
                </Flex>
                <Flex
                  flexDir='column'
                  justify='space-around'
                  align='flex-end'
                  w={['100%', '100%', '85%', '40%']}
                  pr={[5, 5, 0]}
                >
                  {isWideVersion && (
                    <Text fontWeight={500} fontSize={26} color='primary' lineHeight='30px' mb={2}>
                      {' '}
                      {title}{' '}
                    </Text>
                  )}
                  <Box textAlign='right' bg='#11233F' p={5} ml={[0, 0, -3]} mt={[-3, -3, -3, 0]}>
                    <Text fontSize={[16, 18]} lineHeight='18px'>
                      {description}
                    </Text>
                  </Box>
                  <HStack mt={2}>
                    {project.tags.map(tag => (
                      <Box key={tag} fontSize={16} lineHeight='19px' color='rgba(196, 196, 196, 1)'>
                        {tag}
                      </Box>
                    ))}
                  </HStack>
                  <HStack mt={2}>
                    {!!repo?.url && (
                      <Link href={repo?.url} target='_blank'>
                        <Icon as={RiGithubFill} color='primary' fontSize={26} _hover={{ color: '#ffffff' }} />
                      </Link>
                    )}
                    {!!link?.url && (
                      <Link href={link?.url} target='_blank'>
                        <Icon as={RiLinkM} color='primary' fontSize={26} _hover={{ color: '#ffffff' }} />
                      </Link>
                    )}
                  </HStack>
                </Flex>
              </Flex>
            ) : (
              <Flex
                key={title}
                maxWidth={914}
                px={5}
                flexDir={['column', 'column', 'column', 'row']}
                align='flex-start'
                mt={50}
                ml={[0, 0, 8, 0]}
              >
                {!isWideVersion && (
                  <>
                    <Text fontWeight={500} fontSize={26} color='primary' lineHeight='30px' mb={5}>
                      {title}
                    </Text>
                    <Flex w={['100%', '100%', '85%', '60%']} pl={[5, 5, 0]}>
                      <MotionBox transition={{ duration: 0.3 }} whileHover={{ scale: 1.05 }}>
                        <Image src={thumb?.url} alt={`Projeto ${title}`} />
                      </MotionBox>
                    </Flex>
                  </>
                )}
                <Flex
                  flexDir='column'
                  justify='space-around'
                  align={['flex-end', 'flex-end', 'flex-start']}
                  w={['100%', '100%', '85%', '40%']}
                  pr={[5, 5, 0]}
                >
                  {isWideVersion && (
                    <Text fontWeight={500} fontSize={26} color='primary' lineHeight='30px' mb={2}>
                      {' '}
                      {title}{' '}
                    </Text>
                  )}
                  <Box
                    textAlign='right'
                    bg='#11233F'
                    p={5}
                    ml={[0, 0, -3, 0]}
                    mr={[0, 0, 0, -3]}
                    mt={[-3, -3, -3, 0]}
                    position='relative'
                  >
                    <Text fontSize={[16, 18]} lineHeight='18px'>
                      {description}
                    </Text>
                  </Box>
                  <HStack mt={2}>
                    {project.tags.map(tag => (
                      <Box key={tag} fontSize={16} lineHeight='19px' color='rgba(196, 196, 196, 1)'>
                        {tag}
                      </Box>
                    ))}
                  </HStack>
                  <HStack mt={2}>
                    <Link href={repo?.url} target='_blank'>
                      <Icon as={RiGithubFill} color='primary' fontSize={26} _hover={{ color: '#ffffff' }} />
                    </Link>
                    <Link href={link?.url} target='_blank'>
                      <Icon as={RiLinkM} color='primary' fontSize={26} _hover={{ color: '#ffffff' }} />
                    </Link>
                  </HStack>
                </Flex>
                {isWideVersion && (
                  <Flex w={['100%', '100%', '60%']} pl={[5, 5, 0]}>
                    <MotionBox transition={{ duration: 0.3 }} whileHover={{ scale: 1.05 }}>
                      <Image src={thumb?.url} alt={`Projeto ${title}`} />
                    </MotionBox>
                  </Flex>
                )}
              </Flex>
            )}
          </>
        )
      })}
    </>
  )
}

export default CardProject
