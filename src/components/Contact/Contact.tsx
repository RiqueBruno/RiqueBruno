import LinkMenu from '../LinkMenu/LinkMenu';
import contactMe from '../../assets/images/Contact.webp';
import { FaArrowUp } from 'react-icons/fa6';
import '../../styles/Label.css';
import Form from '../Form/Form';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-screen h-screen flex flex-col items-center justify-center text-text-light dark:text-text-dark space-y-16"
    >
      <meta name="description" content="área de contato" />
      <header className="w-full flex flex-col items-center justify-center space-y-4">
        <LinkMenu emote="📫" text="Contato" id="" />
        <h2 className="text-3xl">Contato</h2>
      </header>
      <div className="flex justify-center items-center space-x-4 w-[80%]">
        <meta
          name="description"
          content="Foto avatar: Entre em contato comigo!"
        />
        <div className="hidden w-[50%] lg:flex items-center justify-center">
          <img src={contactMe} alt="Entre em contato comigo." />
        </div>
        <meta name="description" content="Formulário para contato" />
        <div className="lg:w-[50%] w-full">
          <Form />
        </div>
      </div>
      <div className="w-full h-28 flex justify-center items-end">
        <meta name="description" content="Botão para voltar ao topo" />
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
