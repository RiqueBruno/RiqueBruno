import React from 'react';
import brunoImage from '../../assets/images/foto.jpg';
import LinkMenu from '../LinkMenu/LinkMenu';

export default function About() {
  return (
    <section className="bg-primary flex flex-col justify-center items-center lg:flex-row p-10">
      <div>
        <div className="lg:block rounded-full overflow-hidden h-52 w-52 border-2 border-primary z-50 shadow-md">
          <img
            src={brunoImage}
            alt="Imagem de Bruno"
            className="lg:block w-full h-full object-cover"
          />
        </div>
        <div>
          <LinkMenu text="Sobre mim" emote="👨‍💻" />
          <h2>Construindo o futuro, uma linha de código por vez.</h2>
          <p>
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
    </section>
  );
}
