import React, { useContext, useState } from "react";
import { MyContext } from "../Myprovider/MyProvider";
import { useNavigate } from "react-router-dom";

const PixPayment = () => {
  const [pixCode] = useState("123456789012345678901234567890123456"); // Código PIX fictício
  const {state} = useContext(MyContext);
  const valuePlan = state.plano === "mensal" ? "129,99" : "" || state.plano === "semestral" ? "459,99": "" || 
  state.plano === "anual" ? "599,99": "";
  const nav = useNavigate();

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado para a área de transferência!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Pagamento via PIX
        </h2>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          R${valuePlan}
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Use o código PIX abaixo para realizar o pagamento.
        </p>
        <div className="bg-gray-100 p-4 rounded-md mb-4 text-center">
          <p className="font-mono text-lg text-gray-800 break-all">{pixCode}</p>
        </div>
        <button
          onClick={handleCopyPix}
          className="w-full px-4 py-2 mb-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Copiar Código PIX
        </button>
        <button
          onClick={() => nav("/")}
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Voltar para inicio
        </button>
      </div>
    </div>
  );
};

export default PixPayment;
