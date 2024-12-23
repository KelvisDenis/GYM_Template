import React, { useState } from "react";

const ConsultCodigo = () => {
    const [formData, setFormData] = useState({
        nome: "",
        cpf:"",
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const handleSubmit = () => {
        console.log("click")
    }
    return(
        <div className="min-h-screen bg-neutral-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-neutral-50 p-8 border border-gray-200 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                Esqueceu sua Matrícula
                </h2>
                <form onSubmit={handleSubmit}>
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
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                        Buscar Matrícula
                    </button>
            </form>
            </div>
        </div>

    )
}

export default ConsultCodigo