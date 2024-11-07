import SocialMedia from '../SocialMedia/SocialMedia';

type FooterProps = {
  darkMode: boolean;
};

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className="bg-footer-light dark:bg-footer-dark text-white text-center text-sm md:text-base py-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between justify-around items-center px-10">
      <h2>Copyright © Bruno H. Cardoso · 2024</h2>
      <ul className="flex space-x-4">
        <li>
          <meta name="description" content="Botão para perfil linkedin" />
          <SocialMedia
            type="Linkedin"
            darkMode={darkMode}
            size={30}
            location="home"
            linkTo="https://www.linkedin.com/in/brunohenriquec"
          />
        </li>
        <li>
          <meta name="description" content="Botão para perfil github" />
          <SocialMedia
            type="Github"
            darkMode={darkMode}
            size={30}
            location="home"
            linkTo="https://github.com/RiqueBruno"
          />
        </li>
        <li>
          <meta name="description" content="Botão para perfil whatsapp" />
          <SocialMedia
            type="Whatsapp"
            darkMode={darkMode}
            size={30}
            location="home"
            linkTo="https://wa.me/5521993457722"
          />
        </li>
      </ul>
    </footer>
  );
}
