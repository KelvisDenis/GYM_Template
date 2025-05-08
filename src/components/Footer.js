import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.25 2a5.25 5.25 0 1 1 0 10.5A5.25 5.25 0 0 1 11.25 8zm0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/55123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.15-1.758-.867-2.03-.964-.271-.097-.469-.15-.666.15-.198.297-.766.964-.937 1.162-.172.198-.344.223-.64.074-.297-.149-1.255-.463-2.39-1.475-.883-.785-1.48-1.754-1.653-2.051-.172-.297-.018-.458.13-.606.134-.133.297-.347.445-.52.149-.173.198-.298.297-.496.099-.198.049-.371-.025-.52-.074-.149-.666-1.611-.911-2.207-.24-.578-.483-.5-.666-.5-.172-.01-.371-.012-.57-.012s-.52.074-.793.372c-.271.297-1.04 1.017-1.04 2.479 0 1.462 1.064 2.875 1.213 3.071.149.198 2.1 3.21 5.082 4.51.711.306 1.267.488 1.7.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.41-.074-.124-.271-.198-.57-.347zM11.994 2c-5.523 0-10 4.478-10 10 0 1.768.464 3.474 1.345 4.985L2 22l5.161-1.324A9.965 9.965 0 0 0 11.994 22c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:academia@email.com"
            className="text-gray-400 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zm2.25.75v13.5h15V5.25l-7.243 6.03a.75.75 0 0 1-.964 0L4.5 5.25zM5.68 3.75l6.243 5.2L18.16 3.75H5.68z" />
            </svg>
          </a>
        </div>
        {/* Direitos Autorais */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Academia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
