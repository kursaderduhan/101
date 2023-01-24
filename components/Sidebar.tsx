import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  VStack,
} from '@chakra-ui/react'
import { FiHome, FiSettings, FiMenu } from 'react-icons/fi'
import { FaFaucet, FaPaintBrush, FaShoppingBag } from 'react-icons/fa'
import Link from 'next/link'
const LinkItems = [
  { name: 'Home', link: '/', icon: FiHome },
  { name: 'Faucet', link: '/Faucet', icon: FaFaucet },
  { name: 'Paint', link: '/Paint', icon: FaPaintBrush },
  { name: 'Market', link: '/Market', icon: FaShoppingBag },
  { name: 'Settings', link: '/Settings', icon: FiSettings },
]

export default function SimpleSidebar({ children }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('light.100', 'dark.300')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }: any) => {
  return (
    <VStack
      bg={useColorModeValue('light.100', 'dark.500')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      py={15}
      h="full"
      {...rest}
    >
      <Flex w={'100%'} justifyContent={'center'} pb={20}>
        <Image src={'/101.png'} w={'100px'} />
      </Flex>
      <Flex
        flexDirection={'column'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {LinkItems.map((item) => (
          <NavItem key={item.name} icon={item.icon} link={item.link}>
            {item.name}
          </NavItem>
        ))}
      </Flex>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </VStack>
  )
}

const NavItem = ({ icon, link, children, ...rest }: any) => {
  return (
    <Link
      href={`${link}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      {...rest}
    >
      <Flex
        alignItems="center"
        p={4}
        justifyContent={'flex-start'}
        mx={5}
        borderRadius="lg"
        role="group"
        w={'125px'}
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="28"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }: any) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('light.100', 'dark.300')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  )
}
