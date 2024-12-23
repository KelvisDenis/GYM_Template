import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-semibold text-gray-900">
              GYM ACADEMY
            </a>
          </div>

          {/* Links de Navegação */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <Link
              to="/avaliaçao"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
               Marcar Avaliação
            </Link>
            <Link
              to="/matricula"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
               Matricular
            </Link>
            <Link
              to="/pagamento-matricula"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
               Pagamento de Matricula
            </Link>
          <Link
              to="/consultcodigo"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
              Código de Matrícula 
          </Link>
            <a
              href="/contact"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contato
            </a>
          </div>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={()=>{setIsOpen(!isOpen)}}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                 {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/"
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home 
          </a>
          <a
            href="/avaliaçao"
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Marcar Avaliação
          </a>
          <Link
              to="/matricula"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
               Matricular
          </Link>
            <Link
              to="/pagamento-matricula"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
               Pagamento de Matricula
            </Link>
          <Link
              to="/consultcodigo"
              className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Código de Matrícula 
          </Link>
          <a
            href="/services"
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
