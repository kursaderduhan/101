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
} from '@chakra-ui/react'
import useConnection from '../hooks/useConnection'
import { BiUserCircle } from 'react-icons/bi'
import { useStorken } from '@data/storken'

export default function Nav() {
  const { toggleColorMode } = useColorMode()
  const connection = useConnection()
  const [address, Address] = useStorken<string>('address')

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
                    <MenuList alignItems={'center'}>
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
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Account Settings</MenuItem>
                      <MenuItem gap={2} closeOnSelect={false}>
                        Dark mode
                        <Switch
                          onChange={toggleColorMode}
                          size="md"
                          colorScheme={'gray'}
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
