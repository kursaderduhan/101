import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useStorken } from '@data/storken'
import paintjson from '../metadata/paint.json'
const useContract = () => {
  const [contract, Contract] = useStorken<any>('contract')
  const contractAddress = '0x7287017A678Cd4994Cc35b520c6e743a7E31D7b7'
  const contractAbi = paintjson.abi
  useEffect(() => {
    const provider: any = new ethers.providers.Web3Provider(
      (window as any).ethereum,
    )
    const singer = provider.getSigner()
    const _contract = new ethers.Contract(contractAddress, contractAbi, singer)
    Contract.set(_contract)
  }, [])

  return contract
}

export default useContract
