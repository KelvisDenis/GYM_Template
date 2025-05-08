import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessRate = () => {
    const nav = useNavigate()
    const handleClose = () => {
        nav("/")
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          Matrícula Concluída!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Parabéns! Sua avaliação foi realizada com sucesso.
          vá na data do agendamento e com o valor da avaliação 
          de R$45,00
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;
