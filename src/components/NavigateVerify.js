import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigateVerify = ({component}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Captura o evento de navegação para trás
    const handlePopState = () => {
        navigate("/", { replace: true });
    };

    // Adiciona o evento quando o componente monta
    window.history.pushState(null, "", window.location.href); // Empurra um novo estado vazio para a pilha
    window.addEventListener("popstate", handlePopState);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
  return component; 
};

export default NavigateVerify;
