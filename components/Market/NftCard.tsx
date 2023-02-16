import React, { memo } from 'react'
import {
  VStack,
  Text,
  Image,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  MenuItem,
  HStack,
} from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import { CgDetailsMore } from 'react-icons/cg'
import { BiTransfer } from 'react-icons/bi'
import Link from 'next/link'
export const NftCard = () => {
  return (
    <VStack
      w={'300px'}
      h={'350px'}
      border={'1px solid gray'}
      rounded={15}
      cursor={'pointer'}
    >
      <Flex
        flexDirection={'column'}
        alignItems={'flex-start'}
        overflow={'hidden'}
        w={'100%'}
        gap={'10px'}
      >
        <Flex
          overflow={'hidden'}
          w={'100%'}
          h={'100%'}
          transition={'.3s all'}
          transform={'auto'}
          _hover={{ scale: '1.02', opacity: '0.7' }}
        >
          <Image src={'/101.png'} w={'100%'} h={'100%'} />
        </Flex>
        <Flex
          flexDirection={'column'}
          w={'100%'}
          justifyContent={'flex-start'}
          px={5}
          py={1}
          borderBottomRadius={15}
          bg={useColorModeValue('light.200', 'dark.500')}
        >
          <Text>101 #0001</Text>
          <HStack w={'100%'} justifyContent={'space-between'}>
            <Text fontSize={'xl'}>Sale Price: 101 YBR</Text>
            <Menu>
              <MenuButton bg="transparent" aria-label="TriangleMenu">
                <BsThreeDots
                  color={useColorModeValue('dark.200', 'light.100')}
                  size={20}
                />
              </MenuButton>
              <MenuList
                w={100}
                bg={useColorModeValue('light.100', 'dark.500')}
                fontFamily={'sans-serif'}
                color={useColorModeValue('dark.200', 'light.100')}
                justifyContent={'left'}
                textStyle={'normal'}
                rounded={15}
              >
                {DetailsMenu.map((item) => (
                  <Link href={item.link}>
                    <MenuItem
                      key={item.id}
                      bg={useColorModeValue('light.100', 'dark.500')}
                      icon={<item.icon size={'20px'} />}
                    >
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default memo(NftCard)

interface INftDetailsProps {
  id: number
  name: string
  link: string
  icon: IconType
}

const DetailsMenu: Array<INftDetailsProps> = [
  { id: 1, name: 'Nft details', link: '', icon: CgDetailsMore },
  { id: 2, name: 'Buy', link: '', icon: BiTransfer },
]
