// src/wagmi.jsx
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';
import { http } from 'wagmi';

// ----------------------------------------------------
// Project ID на https://cloud.walletconnect.com
// ----------------------------------------------------
const projectId = '07d58e0a178eab8b995a2df23fc188db';

const chains = [mainnet, sepolia];

// RainbowKit сам создаст wagmi config со всеми необходимыми коннекторами.
export const config = getDefaultConfig({
  appName: 'Web3 Presale App',
  projectId,
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: false,
});

