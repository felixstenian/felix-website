import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  })
  return (
    <Flex w='100%' justify='center' position='absolute' my={3}>
      <Box align='center'>
        <Image src="/logo_1x.png" alt="Felix-Logo" position='relative' w='25px' />
        <Text
          fontSize={14}
          lineHeight='16px'
          mt={3}
        >
          Web Developer
        </Text>
      </Box>
    </Flex>
  );
};

export default Header