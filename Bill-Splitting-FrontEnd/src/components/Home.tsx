import React from "react";
import Image from "next/image";
import imagem1 from "../assets/Imagem1.jpg";
import imagem2 from "../assets/Imagem2.jpg";
import imagem3 from "../assets/Imagem3.jpg";
import imagem4 from "../assets/Imagem4.jpg";
import imagem5 from "../assets/Imagem5.jpg";
import imagem6 from "../assets/Imagem6.jpg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="grid mt-24 grid-cols-2 gap-x-36 container items-center justify-center">
      <div className="ml-20  flex flex-col p-5 px-20">
        <h1 className=" mb-5">
          <span className="text-black text-6xl font-bold font-RammettoOne">
            Bill splitting
          </span>
          <span className="text-[#EAE137] text-6xl font-normal font-serif">
            {" "}
            app.
          </span>
        </h1>
        <p className="text-black font-light mb-8">
          With our app you can easily organize your expenses shared with friends
          and family. Whether for group meals, leisure activities or any other
          situation in which you need split the costs, we're here to help.
        </p>

        <button className="w-40 h-9 bg-[#EAE137] hover:bg-yellow-500 text-black font-medium rounded-tr-lg shadow-md">
          Sign up
        </button>
        <div className="flex mt-4 gap-4">
          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaFacebookF color="#5F5F5F" size={20} />
            </div>
          </a>
          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaInstagram color="#5F5F5F" size={20} />
            </div>
          </a>

          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaWhatsapp color="#5F5F5F" size={20} />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-playfair mb-8  font-serif text-6xl leading-none font-normal col-span-1/4">
          <span className="text-black inline-block w-8 h-4 mr-4 bg-[#EAE137] rounded-sm"></span>
          All within reach
        </h2>
        <div className="grid grid-cols-12 gap-x-5">
          <ul className=" animais-lista h-[400px] overflow-y-scroll col-span-3">
            <li className="h-25 w-28">
              <Image src={imagem1} alt="First image of Friends" priority />
            </li>
            <li className="h-30 w-28">
              <Image src={imagem2} alt="Secound image of Friends" priority />
            </li>
            <li className="h-30 w-28">
              <Image src={imagem3} alt="Third image of Friends" priority />
            </li>
            <li className="h-30 w-28">
              <Image src={imagem4} alt="Fourth image of Friends" priority />
            </li>
            <li className="h-30 w-28">
              <Image src={imagem5} alt="Fifth image of Friends" priority />
            </li>
            <li className="h-30 w-28">
              <Image src={imagem6} alt="Sixth image of Friends" priority />
            </li>
          </ul>
          <div className="mb-12 col-span-9">
            <h2 className="font-ibm-mono font-mono text-3xl font-bold uppercase tracking-wider leading-normal mb-4 text-[#EAE137]">
              About
            </h2>
            <p className="font-sans leading-relaxed mb-4">
              This feature allows users to create different orders for various
              situations, such as restaurant meals, grocery shopping, travel
              expenses, etc. Users can create up to 2-3 different orders for
              each occasion, assigning a clear and descriptive name to each
              order for easy identification and organization.
            </p>
            <p className="font-sans leading-relaxed mb-4">
              In this feature, users can add friends who participated in the
              activity or shared the expense to each created order. To add a
              friend, simply type the friend's name into the participant list of
              the order.
            </p>
            <p className="font-sans leading-relaxed mb-4">
              After adding all participating friends to an order, the
              application will automatically calculate the total bill based on
              the costs associated with that order. The application performs the
              necessary calculations to evenly split the bill among all
              participants, ensuring a fair and accurate division.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
