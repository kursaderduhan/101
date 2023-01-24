import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useStorken } from '@data/storken'
import paintjson from '../metadata/paint.json'
const useContract = () => {
  const [contract, Contract] = useStorken<any>('contract')
  const contractAddress = '0xf9f4c2C48E4200CA29981BC8fd7e90DA8565E748'
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
