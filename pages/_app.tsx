import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import Layout from '../components/Layout'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
const activeChainId = ChainId.BinanceSmartChainTestnet
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}
