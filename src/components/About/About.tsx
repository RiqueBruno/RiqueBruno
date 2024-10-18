import React from 'react';
import brunoImage from '../../assets/images/foto.jpg';
import LinkMenu from '../LinkMenu/LinkMenu';

export default function About() {
  return (
    <section className="bg-primary dark:bg-secondary-light overflow-hidden relative flex flex-col lg:flex-row justify-center items-center p-10 h-screen">
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-around w-full lg:space-x-10">
        <div className="hidden lg:block rounded-full overflow-hidden h-72 w-72 lg:h-80 lg:w-80 border-2 border-primary z-50 shadow-md">
          <img
            src={brunoImage}
            alt="Imagem de Bruno"
            className="lg:block w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center dark:text-text-dark text-text-light lg:items-start">
          <LinkMenu text="Sobre mim" emote="👨‍💻" id="about" />
          <h2 className="text-3xl my-8 w-full text-center">
            Construindo o futuro, uma linha de código por vez.
          </h2>
          <p className="w-full text-center lg:text-start">
            <ul className="mt-4 space-y-2 text-base list-none">
              <li>
                👋 Me chamo Bruno Henrique Cardoso, mas pode me chamar apenas de
                Bruno. Prazer!
              </li>
              <li>
                👨‍💻 Desenvolvendo e programando interfaces com JavaScript, React
                JS e Typescript desde 2023.
              </li>
              <li>🎓 Formado em Desenvolvimento Web Full-Stack pela Trybe.</li>
              <li>
                💡 Interesses em desenvolvimento Front-end com React e UX/UI
                Design.
              </li>
              <li>
                🚀 Tentando ser um pouquinho melhor do que ontem todos os dias.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="absolute border-2 rounded-md h-80 w-80 bottom-10 right-10 z-0 opacity-15 lg:opacity-60 dark:border-primary border-secondary-light" />
      <div className="absolute border-2 rounded-md h-40 w-40 bottom-60 right-72 z-0 opacity-15 lg:opacity-60 dark:border-primary border-secondary-light" />
      <div className="absolute border-2 rounded-md h-20 w-20 top-20 right-20 z-0 opacity-15 lg:opacity-60 dark:border-primary border-secondary-light" />
      <div className="absolute border-2 rounded-md h-40 w-40 top-48 left-60 z-0 opacity-15 lg:opacity-60 dark:border-primary border-secondary-light" />
      <div className="absolute border-2 rounded-md h-80 w-80 top-0 left-0 z-0 opacity-15 lg:opacity-60 dark:border-primary border-secondary-light" />
    </section>
  );
}
