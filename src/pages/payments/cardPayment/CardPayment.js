import React, { useContext, useState } from "react";
import { MyContext } from "../../../Myprovider/MyProvider";

const CardPayment = ({ onPaymentSuccess }) => {
  const {state} = useContext(MyContext);
  const valuePlan = state.plano === "mensal" ? "129,99" : "" || state.plano === "semestral" ? "459,99": "" || 
  state.plano === "anual" ? "599,99": "";
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
    parcelas:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pagamento realizado com sucesso!");
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-neutral-50 p-6 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Detalhes do Pagamento
        </h2>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {state.nome}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Número do Cartão */}
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Número do Cartão
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Nome do Titular */}
          <div className="mb-4">
            <label
              htmlFor="cardHolder"
              className="block text-sm font-medium text-gray-600"
            >
              Nome do Titular
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="Seu Nome Completo"
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Data de Validade */}
          <div className="mb-4">
            <label
              htmlFor="expirationDate"
              className="block text-sm font-medium text-gray-600"
            >
              Data de Validade
            </label>
            <input
              type="month"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CVV */}
          <div className="mb-4">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-600"
            >
              Código de Segurança (CVV)
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength="3"
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="plano"
              className="block text-sm font-medium text-gray-600"
            >
              Parcelas
            </label>
            <select
              id="parcela"
              name="parcelas"
              value={formData.parcelas}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione parcelas</option>
              <option value={`${(parseInt(valuePlan)).toFixed()}`}>1x sem juros de {valuePlan}</option>
              <option value={`${(parseInt(valuePlan) / 2).toFixed()}`}>2x sem juros de R${(parseFloat(valuePlan) / 2).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 3).toFixed()}`}>3x sem juros de R${(parseFloat(valuePlan) / 3).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 4).toFixed()}`}>4x sem juros de R${(parseFloat(valuePlan) / 4).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 5).toFixed()}`}>5x sem juros de R${(parseFloat(valuePlan) / 5).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 6).toFixed()}`}>6x sem juros de R${(parseFloat(valuePlan) / 6).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 7).toFixed()}`}>7x sem juros de R${(parseFloat(valuePlan) / 7).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 8).toFixed()}`}>8x sem juros de R${(parseFloat(valuePlan) / 8).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 9).toFixed()}`}>9x sem juros de R${(parseFloat(valuePlan) / 9).toFixed()}</option>
              <option value={`${(parseInt(valuePlan) / 10).toFixed()}`}>10x sem juros de R${(parseFloat(valuePlan) / 10).toFixed()}</option>

            </select>
          </div>
          {/* Botão de Confirmar Pagamento */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Pagar valor R${formData.parcelas}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPayment;
