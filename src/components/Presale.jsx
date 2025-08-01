// src/components/Presale.jsx
import React, { useState } from 'react';
import { useAccount } from 'wagmi';

function Presale() {
  // useAccount() получаем информацию о подключенном кошельке
  const { isConnected } = useAccount();
  const [ethAmount, setEthAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState(0);

  // --------------------------------------------------------------------------
  //  Статические данные для примера.
  // --------------------------------------------------------------------------
  const tokenPriceInEth = 0.001; // Цена токена: 1 ETH = 1000 токенов

  // Функция для расчета количества токенов на основе введенной суммы ETH
  const calculateTokens = (e) => {
    const amount = e.target.value;
    setEthAmount(amount);
    if (amount && !isNaN(amount)) {
      setTokenAmount(parseFloat(amount) / tokenPriceInEth);
    } else {
      setTokenAmount(0);
    }
  };

  // Заглушка, логика покупки будет здесь позже.
  const handleBuyTokens = () => {
    if (!ethAmount) {
      alert("Пожалуйста, введите сумму в ETH.");
      return;
    }
    alert(`Покупка ${tokenAmount.toFixed(4)} токенов за ${ethAmount} ETH`);
  };

  // Если кошелек не подключен, показываем простое сообщение
  if (!isConnected) {
    return (
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-lg text-gray-600">Подключите ваш кошелек, чтобы участвовать в пресейле.</p>
        </div>
    );
  }

  // Если кошелек подключен, показываем UI для покупки
  return (
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Купить токены</h2>

        <div className="mb-4">
          <label htmlFor="eth-amount" className="block text-gray-700 font-bold mb-2">
            Сумма в ETH
          </label>
          <input
              id="eth-amount"
              type="number"
              value={ethAmount}
              onChange={calculateTokens}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.1"
              min="0"
              step="0.01"
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-700 font-bold mb-2">
            Количество токенов
          </p>
          <p className="text-2xl font-bold text-green-600">
            {tokenAmount.toFixed(4)}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            Цена: 1 ETH = {1/tokenPriceInEth} токенов
          </p>
        </div>

        <button
            onClick={handleBuyTokens}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Купить
        </button>
      </div>
  );
}

export default Presale;