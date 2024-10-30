import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const ContadorRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">Contador Redux</h1>
        <p className="text-4xl font-semibold mb-4 text-gray-600 dark:text-gray-400">{count}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Incrementar
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContadorRedux;