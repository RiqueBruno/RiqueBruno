import { useState } from 'react';
import ThemeButton from './components/ThemeButton/ThemeButton';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  /**
  Criar componentes
    Header
      - Logo
      - Nav (Desktop e Mobile)
      - Botão de trocar tema
    Main
      Home
        - Fundo animado
        - Titulo (niveis h1, h2, h3)
        - Avatar animado
        - Barra com texto animado
        - Botões de redes sociais
      About
        - Paragrafo
        - Botão download curriculo
      Projects
        - Card de projetos
          + Imagem Mockup
          + Botões (ver projeto, ver codigo e ver design)
          + Tecnologias (Colocar o nome ao passar o mouse ou clicar)
      Contact
        - Formulário
          + Nome
          + Email
          + Mensagem
          + Botão enviar (usar nodeMailer)
        - Botão voltar ao topo
      Footer (botão redes sociais)      
  */
  return (
    <div className={`${darkMode && 'dark'}`}>
      <main className="dark:bg-blue-400 bg-white">
        <h1 className="dark:text-black bg-pink-400 dark:bg-yellow-300">
          Testando Tailwind
        </h1>
        <ThemeButton
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </main>
    </div>
  );
}

export default App;
