import { useEffect, useState } from 'react';
import brunoImage from '../../assets/images/foto.webp';
import LinkMenu from '../LinkMenu/LinkMenu';
import '../../styles/animationScroll.css';

export default function About() {
  const [_visible, setVisible] = useState(false);

  const myObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      const image = document.getElementById('anil');
      const text = document.getElementById('anir');
      if (entry.isIntersecting) {
        image?.classList.add('left-center');
        text?.classList.add('right-center');
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  );

  useEffect(() => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      myObserver.observe(aboutElement);
    }
    return () => {
      if (aboutElement) {
        myObserver.unobserve(aboutElement);
      }
    };
  }, []);
  return (
    <section className="bg-primary dark:bg-secondary-light overflow-hidden relative flex flex-col lg:flex-row justify-center items-center p-10 h-screen">
      <div id="about" className="absolute top-0 h-full w-full z-[0]" />
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-around w-full lg:space-x-10">
        <meta name="description" content="Imagem de Bruno" />
        <div
          id="anil"
          className="hidden lg:block rounded-full overflow-hidden h-72 w-72 lg:h-80 lg:w-80 border-2 border-primary z-50 shadow-md"
        >
          <img
            src={brunoImage}
            alt="Imagem de Bruno"
            className="lg:block w-full h-full object-cover"
          />
        </div>
        <div
          id="anir"
          className="flex flex-col items-center justify-center dark:text-text-dark text-text-light lg:items-start space-x-4"
        >
          <LinkMenu text="Sobre mim" emote="👨‍💻" id="" />
          <meta name="description" content="Página sobre mim" />
          <h2 className="text-3xl w-full text-center lg:text-start">
            Construindo o futuro, uma linha de código por vez.
          </h2>
          <div className="w-full text-center lg:text-start">
            <meta name="description" content="Sobre mim" />
            <ul className="mt-4 space-y-2 text-base list-none lg:text-start">
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
          </div>
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
