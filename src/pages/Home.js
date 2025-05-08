import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforme sua Vida na <span className="text-blue-500">Academia</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Treine com os melhores profissionais e alcance seus objetivos de saúde e bem-estar.
          </p>
          <div className="mt-8">
            <a
              href="#plans"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
            >
              Ver Planos
            </a>
            <Link
              to="/contact"
              className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md text-lg font-medium"
            >
              Marcar Avaliação
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Sobre Nós
          </h2>
          <p className="mt-4 text-gray-700 text-center">
            Somos uma academia comprometida em oferecer a melhor experiência para nossos alunos.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 15.5l1.5 1.5L15 11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Treinadores Qualificados</h3>
              <p className="mt-2 text-gray-600">
                Equipe formada por especialistas em diversas áreas do fitness.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Estrutura Completa</h3>
              <p className="mt-2 text-gray-600">
                Salas equipadas com os melhores aparelhos e espaços amplos.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16L12 12l4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Resultados Garantidos</h3>
              <p className="mt-2 text-gray-600">
                Programas personalizados para atingir suas metas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Planos de Treinamento
          </h2>
          <p className="mt-4 text-gray-700 text-center">
            Escolha o plano que melhor atende suas necessidades.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold">Mensal</h3>
              <p className="mt-4 text-gray-700">R$129,99/mês</p>
              <ul className="mt-4 space-y-2">
                <li>Acesso a todas as áreas</li>
                <li>1 consulta com personal trainer</li>
                <li>Aulas em grupo</li>
              </ul>
              <a
                href="/"
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
              >
                Inscreva-se
              </a>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold">Semestral</h3>
              <p className="mt-4 text-gray-700">$459,99/mês</p>
              <ul className="mt-4 space-y-2">
                <li>Plano Básico +</li>
                <li>Treinamento personalizado</li>
                <li>Acompanhamento semanal</li>
              </ul>
              <a
                href="/"
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
              >
                Inscreva-se
              </a>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold">Anual</h3>
              <p className="mt-4 text-gray-700">$599,99/mês</p>
              <ul className="mt-4 space-y-2">
                <li>Plano Premium +</li>
                <li>Consultas ilimitadas</li>
                <li>Acesso exclusivo a eventos</li>
              </ul>
              <a
                href="/"
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
              >
                Inscreva-se
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
