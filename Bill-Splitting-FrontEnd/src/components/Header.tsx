import React, { useState } from "react";
import ModalLogin from "../components/ModalLogin";
import ModalSignUp from "../components/ModalSignUp";

interface HeaderProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ setIsLoggedIn }) => {
  const [modalAtivo, setModalAtivo] = useState(false);
  const [modalSignUpAtivo, setModalSignUpAtivo] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticação...
    // Se a autenticação for bem-sucedida, defina setIsLoggedIn como true
    setIsLoggedIn(true);
  };

  const handleLoginClick = () => {
    abrirModalLogin();
    handleLogin(); // Chama handleLogin ao clicar no botão de login
  };

  const abrirModalLogin = () => {
    setModalAtivo(true);
  };

  const abrirModalSignUp = () => {
    setModalSignUpAtivo(true);
  };

  const fecharModal = () => {
    setModalAtivo(false);
    setModalSignUpAtivo(false);
  };

  return (
    <>
      <header className="ml-24 mt-15 flex items-center justify-between p-5 px-20">
        <a
          className="text-black text-2xl font-bold font-RammettoOne hover:text-[#EAE137]"
          href="#"
        >
          Bill Splitting 🧾
        </a>
        <nav className="ml-40 mt-15 mr-20 flex gap-20 items-center justify-between text-center text-black text-base font-medium font-poppins">
          <button
            className="hover:text-[#EAE137]"
            onClick={() => {
              abrirModalLogin();
              handleLoginClick();
            }}
          >
            Login
          </button>
          <button
            className="w-40 h-9 bg-[#EAE137] hover:bg-yellow-500 text-black font-medium rounded-tr-lg shadow-md"
            onClick={abrirModalSignUp}
          >
            Sign up
          </button>
        </nav>
      </header>
      {modalAtivo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={fecharModal}
            >
              X
            </button>
            <ModalLogin fecharModal={fecharModal} handleLogin={handleLogin} />
          </div>
        </div>
      )}
      {modalSignUpAtivo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={fecharModal}
            >
              X
            </button>
            <ModalSignUp fecharModal={fecharModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
