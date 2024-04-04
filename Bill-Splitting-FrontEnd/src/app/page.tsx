"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Home from "../components/Home";
import Apps from "./aplication/page";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Lógica de autenticação...
    // Se a autenticação for bem-sucedida, defina isLoggedIn como true
    setIsLoggedIn(true);
    router.push("/aplication");
  };

  return (
    <div className="App bg-[#FFFFFF]">
      <Header setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
      <Home />
    </div>
  );
};

export default App;
