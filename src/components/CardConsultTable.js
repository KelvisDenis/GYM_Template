import React from "react";
import { useLocation } from "react-router-dom";

const CardConsultTable = () => {
  const location = useLocation();
  const {user} = location.state || {}


  const handleAction = (id, status) => {
    if (status === "Pendente") {
      alert(`Pagamento iniciado para o ID: ${id}`);
    } else {
      alert(`Consultando pagamento do ID: ${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="border-b p-4">
          <h2 className="text-2xl font-semibold text-gray-700">Pagamentos {user.nome}</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {user.messes.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.mes}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Vencimento: {item.vencimento}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    item.status === "pago"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {item.status}
                </span>
                <button
                  onClick={() => handleAction(item.id, item.status)}
                  className={`px-4 py-2 text-sm font-semibold rounded ${
                    item.status === "pendente"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-500 text-white hover:bg-gray-600"
                  }`}
                >
                  {item.status === "pendente" ? "pagar" : "consultar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardConsultTable;
