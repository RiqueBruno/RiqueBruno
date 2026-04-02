import LinkMenu from "../../components/LinkMenu/LinkMenu";
import contactMe from "../../assets/images/Contact.webp";
import { FaArrowUp } from "react-icons/fa6";
import "../../styles/Label.css";
import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-[100dvh] flex flex-col items-center justify-between py-6 text-text-light dark:text-text-dark overflow-hidden"
    >
      <header className="w-full flex flex-col items-center justify-center gap-2">
        <LinkMenu emote="📫" text="Contato" id="" />
        <h2 className="text-2xl lg:text-3xl font-bold">Contato</h2>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-4 w-[90%] max-w-5xl min-h-0">
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center p-4">
          <img
            src={contactMe}
            alt="Entre em contato comigo."
            className="max-h-full object-contain drop-shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
          <Form />
        </div>
      </div>

      <div className="w-full flex justify-center pb-2 mt-auto">
        <a
          aria-label="voltar para o topo da página."
          href="#home"
          className="flex space-x-2 justify-center items-center text-link text-sm lg:text-base dark:border-none border-2 dark:bg-background-dark p-2 rounded-lg transition-transform hover:scale-105"
        >
          <span>Voltar ao topo</span> <FaArrowUp />
        </a>
      </div>
    </section>
  );
}
