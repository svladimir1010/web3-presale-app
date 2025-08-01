// src/App.jsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Presale from './components/Presale.jsx';

function App() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Кнопка подключения в правом верхнем углу */}
        <div className="absolute top-4 right-4">
          <ConnectButton />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Web3 Presale App
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Участвуйте в предварительной продаже токенов!
          </p>
        </div>

        <Presale />
      </div>
  );
}

export default App;