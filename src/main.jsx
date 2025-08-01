// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ------------------ Web3 Imports ------------------
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmi.jsx';

// Создаем клиент для react-query.
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* Оборачиваем приложение в провайдеры в правильном порядке */}
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>,
);