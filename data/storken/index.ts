import { createStore } from 'storken'

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {},
  initialValues: {
    isDrawing: false as boolean,
    lineWidth: 5 as number,
    lineColor: 'black' as string,
    lineOpacity: 0.1 as number,
    penControl: false as boolean,
    signer: undefined as any,
    provider: '' as string,
    address: '' as string,
    auth: false as boolean,
    isConnecting: false as boolean,
    contract: null,
    balance: 0 as number,
    url: '' as any,
    itemControl: 0 as number,
    tokenAddress: '0xB4BA7258Fb2e5943628507823DBAd7B824909c65' as any,
    tokenBalance: '0' as string,
    nftName: '' as string,
    nftDescription: '' as string,
    nftPrice: 0 as number,
    metadata: {name: "", description: "", image: ""} as any,
  },
})

export default { Storken, useStorken }
