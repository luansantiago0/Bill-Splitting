"use client";
import React, { useState } from "react";
import axios from "axios";

interface ModalProps {
  cliqueForaModals?: () => void;
  abrirModals?: () => void;
  fecharModal?: () => void;
}

const ModalSignUp: React.FC<ModalProps> = ({
  cliqueForaModals,
  abrirModals,
  fecharModal,
}) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Verifica se o email e o email de confirmação coincidem
      if (email !== confirmEmail) {
        setError("Emails do not match.");
        return;
      }

      const response = await axios.post("http://localhost:8000/register", {
        email,
        password,
      });
      console.log(response.data);
      // Trata a resposta, talvez redirecione ou exiba uma mensagem de sucesso
    } catch (error: any) {
      setError("Failed to register. Please try again.");
      console.error("Error registering:", error);
    }
  };

  return (
    <section
      className="modal-container modal-overlay"
      data-modal="container"
      onClick={cliqueForaModals}
    >
      <div className="modal">
        <button data-modal="fechar" className="fechar" onClick={fecharModal}>
          X
        </button>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="signupemail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md p-2"
          />
          <label htmlFor="confirm-email">Confirm Email</label>
          <input
            type="text"
            id="confirm-email"
            name="confirm-email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="border border-black rounded-md p-2"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password2"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-md p-2"
          />
          <button
            className="block bg-[#EAE137] border-none rounded-md py-2 px-8 text-white font-mono mt-4 font-semibold"
            type="submit"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ModalSignUp;
