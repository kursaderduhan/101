import React, { useState } from 'react'
import {
  HStack,
  Input,
  VStack,
  Text,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { FaFaucet } from 'react-icons/fa'
import useConnection from '@hooks/useConnection'
import useContract from '@hooks/useContract'
import { useStorken } from '@data/storken'
export const Faucet = () => {
  const [userAddress, setUserAddress] = useState('')
  const toast = useToast()
  const contract = useContract()
  const [tokenAddress, TokenAddress] = useStorken<any>('tokenAddress')

  const control = () => {
    if (userAddress.length === 0) {
      toast({
        title: 'Hata',
        description: 'Lütfen input alanına cüzdan adresinizi giriniz!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      faucet()
    }
  }

  const faucet = async () => {
    const txn = await contract.faucet(userAddress)
    await txn.wait()
  }

  const copy = () => {
    const input = document.createElement('input')
    input.value = tokenAddress
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    toast({
      title: 'Address kopyalandı.',
      description: 'Token adresi panoya kopyalandı!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <>
      <VStack h={'100%'} align={'center'} justifyContent={'center'} gap={10}>
        <HStack gap={2}>
          <Input
            placeholder="Enter your wallet address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            w={'350px'}
          />
          <IconButton
            as={FaFaucet}
            bg={'transparent'}
            cursor={'pointer'}
            _hover={{ opacity: 0.8 }}
            size={'sm'}
            onClick={control}
            aria-label={'faucet'}
          />
        </HStack>
        <Text>
          Bu alandan hergün yalnızca 5 adet yüzbir token gönderilmektedir!
        </Text>
        <VStack
          justifyContent={'flex-start'}
          display={'flex'}
          alignItems={'flex-start'}
        >
          <Text cursor={'pointer'} onClick={copy}>
            Token address: {tokenAddress}{' '}
          </Text>
          <Text cursor={'default'}>Token sembolü: YBR </Text>
          <Text cursor={'default'}>Token ağ: Bsc-Testnet </Text>
        </VStack>
      </VStack>
    </>
  )
}

export default Faucet
