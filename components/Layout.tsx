import React, { memo } from 'react'
import { Box, Flex, useColorModeValue, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import Header from './Header'

export const MyLayout = ({ children }: any) => {

  return (
    <Flex
      bg={useColorModeValue('light.100', 'dark.300')}
      flexDirection="column"
    >
      <Head>
        <title>YUZBIR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex w={'100%'} h={'100%'}>
        <Box pos={'sticky'}>
          <Sidebar />
        </Box>
        <VStack
          w={'100%'}
          h={'100%'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Box w={'100%'} h={'65px'} alignItems={'center'}>
            <Header />
          </Box>
          <Box w={'full'} h={'100%'}>
            {children}
          </Box>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default memo(MyLayout)
