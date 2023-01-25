import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Switch,
  Text,
} from '@chakra-ui/react'
import useConnection from '../hooks/useConnection'
import { BiUserCircle } from 'react-icons/bi'
import { useStorken } from '@data/storken'
import { GoLightBulb } from 'react-icons/go'
import { IconType } from 'react-icons'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineLanguage } from 'react-icons/md'
import Link from 'next/link'
export default function Nav() {
  const connection = useConnection()
  const [address, Address] = useStorken<string>('address')
  const { toggleColorMode } = useColorMode()
  useEffect(() => {
    connection.connect()
    Address.set(connection.address)
    //her renderda cüzdanın bağlı olup olmadığının kontrolü
  }, [connection.address])
  const connectToWallet = () => {
    connection.connect()
  }
  return (
    <>
      <Box bg={useColorModeValue('light.100', 'dark.300')} px={10} w={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'flex-end'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {connection.address ? (
                <Button
                  backgroundColor={'brand.main'}
                  color={'brand.mainBlue'}
                  onClick={connectToWallet}
                  fontSize={{ xl: 'inherit', sm: 'small' }}
                >
                  {connection.address.slice(0, 5)}. . .
                  {connection.address.slice(38, 42)}
                </Button>
              ) : (
                <Button
                  backgroundColor={'brand.main'}
                  color={'brand.mainBlue'}
                  onClick={connectToWallet}
                  fontSize={{ xl: 'inherit', sm: 'small' }}
                >
                  Connect to Wallet
                </Button>
              )}
              <Menu closeOnSelect={true}>
                {({ onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                    >
                      <Icon
                        as={BiUserCircle}
                        color={connection.address ? 'green' : 'red'}
                        boxSize={10}
                      />
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      bg={useColorModeValue('light.200', 'dark.500')}
                    >
                      <br />
                      <Center>
                        <Avatar size={'lg'} src="https://bit.ly/broken-link" />
                      </Center>
                      <br />
                      <Center>
                        <p>
                          {address.slice(0, 5)}. . .{address.slice(38, 42)}
                        </p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem
                        icon={<Icon as={BiUserCircle} fontSize={'20px'} />}
                        color={useColorModeValue('dark.200', 'light.100')}
                        closeOnSelect={true}
                        w={'100%'}
                        bg={useColorModeValue('light.200', 'dark.500')}
                      >
                        <Text fontSize={'md'} fontWeight={500}>
                          Profile
                        </Text>
                      </MenuItem>
                      <MenuItem
                        icon={<Icon as={MdOutlineLanguage} fontSize={'20px'} />}
                        color={useColorModeValue('dark.200', 'light.100')}
                        closeOnSelect={true}
                        w={'100%'}
                        bg={useColorModeValue('light.200', 'dark.500')} isDisabled={true}
                      >
                        <Text fontSize={'md'} fontWeight={500}>
                          Language
                        </Text>
                      </MenuItem>
                      <MenuItem
                        icon={<Icon as={FiSettings} fontSize={'20px'} />}
                        color={'red'}
                        closeOnSelect={true}
                        w={'100%'}
                        bg={useColorModeValue('light.200', 'dark.500')}
                      >
                        <Text fontSize={'md'} fontWeight={500}>
                          Settings
                        </Text>
                      </MenuItem>
                      <MenuItem
                        closeOnSelect={false}
                        color={useColorModeValue('dark.200', 'light.100')}
                        bg={useColorModeValue('light.200', 'dark.500')}
                        gap={3}
                      >
                        <Icon as={GoLightBulb} fontSize={'20px'} />
                        <Text fontSize={'md'} fontWeight={500}>Dark Mode</Text>
                        <Switch
                          onChange={toggleColorMode}
                          size="md"
                          ml={2}
                          colorScheme={'facebook'}
                        />
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
