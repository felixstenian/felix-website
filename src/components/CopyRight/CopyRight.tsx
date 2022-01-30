import { Divider, Box, Text, Stack } from '@chakra-ui/react'

const CopyRight = () => {
  return (
    <Stack spacing={3} position='fixed' right={10} bottom={0} flexDir='column' align='center'>
      <Box __css={{ writingMode: 'vertical-rl' }}>
        <Text fontSize={20} fontWeight={300} color='primary'>
          © Felix | 2022
        </Text>
      </Box>
      <Divider orientation='vertical' borderColor='primary' height={[0, 0, '72px']} />
    </Stack>
  )
}

export default CopyRight
