import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Myprovider/MyProvider";
import AddUser from "../../data/methods/AddUser";

const Matricula = () => {
  const {updateState} = useContext(MyContext);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cpf:"",
    email: "",
    telefone: "",
    plano: "",
    pagamento: "", // Novo campo para forma de pagamento
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
    updateState(formData);
    const model = {
      cpf: formData.cpf,
      id: 0,
      nome: formData.nome,
      plano: formData.plano,
      meses: [
        { mes: "Janeiro", status: "pago", vencimento: "2024-01-26" },
        { mes: "Fevereiro", status: "pago", vencimento: "2024-02-26" },
        { mes: "Março", status: "pendente", vencimento: "2024-03-26" },
      ],
      codigo: Math.floor(100000 + Math.random() * 900000)
    }
    AddUser(model)
    if(formData.pagamento === "cartao") nav("/pagamento-cartao")
    if(formData.pagamento === "pix") nav("/pagamento-pix")
  };

  return (
    <div className="min-h-screen bg-neutral-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-neutral-50 p-8 border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Formulário de Matrícula
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
          <div className="mb-4">
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-600"
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
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

          {/* Plano */}
          <div className="mb-4">
            <label
              htmlFor="plano"
              className="block text-sm font-medium text-gray-600"
            >
              Plano de Academia
            </label>
            <select
              id="plano"
              name="plano" 
              value={formData.plano}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione um plano</option>
              <option value="mensal">Mensal</option>
              <option value="semestral">Semestral</option>
              <option value="anual">Anual</option>
            </select>
          </div>

          {/* Forma de Pagamento */}
          <div className="mb-4">
            <label
              htmlFor="pagamento"
              className="block text-sm font-medium text-gray-600"
            >
              Forma de Pagamento
            </label>
            <select
              id="pagamento"
              name="pagamento"
              value={formData.pagamento}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione a forma de pagamento</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="pix">PIX</option>
            </select>
          </div>

          {/* Botão de Enviar */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Efetuar Pagamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Matricula;
