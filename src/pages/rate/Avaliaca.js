import React, { useState } from "react";
import SuccessRate from "../../components/cards/successRate/SuccessRate";

const Avaliacao = () => {
  const [showRate, setShowRate] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    profissional: "",
    dataAgendamento:"",
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
    setShowRate(!showRate)
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-neutral-50 p-8 border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Formulário de Avaliação
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-600"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telefone */}
          <div className="mb-4">
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-600"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profissional"
              className="block text-sm font-medium text-gray-600"
            >
              Selecione seu instrutor
            </label>
            <select
              id="profissional"
              name="profissional"
              value={formData.profissional}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o instrutor</option>
              <option value="cartao">Carlos Manoel</option>
              <option value="boleto">Jão Carlos</option>
              <option value="pix">André</option>
              <option value="cartao">Lia</option>
              <option value="boleto">Maria</option>
              <option value="pix">Clara Menezes</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="dataAgendamento"
              className="block text-sm font-medium text-gray-600"
            >
              Data de Agendamento
            </label>
            <input
              type="date"
              id="dataAgendamento"
              name="dataAgendamento"
              value={formData.dataAgendamento}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão de Enviar */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Agendar Avaliação
            </button>
          </div>
        </form>
        {showRate && (
            <SuccessRate/>
        )}
      </div>
    </div>
  );
};

export default Avaliacao;
