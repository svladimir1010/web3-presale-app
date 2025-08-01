// src/App.jsx
import { ConnectButton } from '@rainbow-me/rainbowkit';


function App() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Web3 Presale App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Пожалуйста, подключите свой кошелек, чтобы участвовать в пресейле токенов.
          </p>
          <ConnectButton />
        </div>
      </div>
  );
}

export default App;