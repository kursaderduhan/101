import React, { memo } from 'react'
import { VStack, Text, Image, Button, Flex } from '@chakra-ui/react'
export const NftCard = () => {
  return (
    <VStack
      w={'300px'}
      h={'300px'}
      border={'1px solid gray'}
      rounded={15}
      overflow={'hidden'}
      cursor={'pointer'}
      transition={'.3s all'}
      transform={'auto'}
      _hover={{ scale: '1.02', opacity: '0.7' }}
    >
      <Flex overflow={'hidden'} w={'100%'} h={'100%'}>
        <Image src={'/101.png'} w={'100%'} h={'100%'} />
      </Flex>
      <Flex
        flexDirection={'column'}
        w={'100%'}
        justifyContent={'flex-start'}
        px={5}
        py={1}
      >
        <Text>Nft number</Text>
        <Text fontSize={'xl'}>Sale Price: 100 YBR</Text>
      </Flex>
    </VStack>
  )
}

export default memo(NftCard)
