import { ethers } from 'ethers'
import { useStorken } from '@data/storken'
import Json from '../metadata/paint.json'
const useConnection = () => {
  const [signer, Signer] = useStorken<any>('signer')
  const [provider, Provider] = useStorken<string>('provider')
  const [address, Address] = useStorken<string>('address')
  const [auth, Auth] = useStorken<boolean>('auth')
  const [isConnecting, IsConnecting] = useStorken<boolean>('isConnecting')
  const [tokenBalance, TokenBalance] = useStorken<string>('tokenBalance')
  const [contract, Contract] = useStorken<any>('contract')

  const connect = async () => {
    if (!window.alert) {
      alert('metamask is not installed!')
      return
    }

    const provider: any = new ethers.providers.Web3Provider(
      (window as any).ethereum,
    )
    try {
      IsConnecting.set(true)
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      Signer.set(signer)
      Provider.set(provider)
      Address.set(address)
      Auth.set(true)
      IsConnecting.set(false)
    } catch (error) {
      console.log(error)
      IsConnecting.set(false)
    }
  }
  const getTokenBalance = async () => {
    try {
      // token contract address
      const tokenAddress = '0xa3f73e8e4d53da35Db465Ed3F7DB093552A3DDB1'
      // create contract object
      const contract = new ethers.Contract(tokenAddress, Json.abi, signer)
      // call balanceOf function
      const tokenBalance = await contract.balanceOf(address)
      // format balance
      const balance = ethers.utils.formatUnits(tokenBalance, 18)
      TokenBalance.set(balance)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    connect,
    signer,
    provider,
    address,
    auth,
    isConnecting,
    contract,
    tokenBalance,
    getTokenBalance,
  }
}

export default useConnection
