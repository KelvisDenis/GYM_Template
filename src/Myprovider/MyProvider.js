import React, { createContext, useState } from "react";

// Criação do contexto
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // Estado ou valor que será compartilhado
  const [state, setState] = useState("");

  // Valores fornecidos para os componentes filhos
  const contextValue = {
    state,
    updateState: (newValue) => setState(newValue),
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
