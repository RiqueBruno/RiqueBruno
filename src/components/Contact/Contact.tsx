import React from 'react';
import LinkMenu from '../LinkMenu/LinkMenu';
import contactMe from '../../assets/images/Contact.png';
import { FaArrowUp } from 'react-icons/fa6';
import '../../styles/Label.css';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-screen h-screen flex flex-col items-center justify-center text-text-light dark:text-text-dark space-y-8"
    >
      <header className="w-full flex flex-col items-center justify-center space-y-4">
        <LinkMenu emote="📫" text="Contato" id="" />
        <h2 className="text-3xl">Contato</h2>
      </header>
      <div className="flex space-x-4 w-[80%]">
        <div className="hidden w-[50%] lg:flex items-center justify-center">
          <img src={contactMe} alt="Entre em contato comigo." />
        </div>
        <div className="lg:w-[50%] flex justify-start items-center">
          <form className="flex flex-col p-4 space-y-8 items-start justify-center w-[84%]">
            <div className="w-full relative h-12 div-label">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg p-2 w-full h-full"
              />
              <label
                htmlFor="name"
                className="label-label dark:bg-background-dark bg-background-light px-1"
              >
                Nome
              </label>
            </div>
            <div className="w-full relative h-12 div-label">
              <input
                type="text"
                id="email"
                name="email"
                placeholder=" "
                required
                className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg w-full h-full"
              />
              <label
                htmlFor="email"
                className="label-label dark:bg-background-dark bg-background-light px-1"
              >
                Email
              </label>
            </div>
            <div className="w-full relative max-h-44 div-label">
              <textarea
                id="message"
                name="message"
                required
                className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg p-2 w-full h-full max-h-44 resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="label-label dark:bg-background-dark bg-background-light px-1"
              >
                Mensagem
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary-light to-primary hover:from-primary hover:to-secondary-light text-text-dark dark:hover:from-secondary-dark dark:hover:to-primary-dark p-2 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-36 flex justify-center items-end">
        <a
          href="#home"
          className="flex space-x-2 justify-center items-center text-link text-base dark:border-link dark:border-none border-2 dark:bg-background-dark p-2 rounded-lg"
        >
          <span>Voltar ao topo</span> <FaArrowUp />
        </a>
      </div>
    </section>
  );
}
