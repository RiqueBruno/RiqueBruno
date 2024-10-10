import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  /**
  Criar componentes
    Header
      - Logo Ok
      - Nav (Desktop e Mobile) OK
      - Botão de trocar tema OK
    Main
      Home
        - Fundo animado OK
        - Titulo (niveis h1, h2, h3)
        - Avatar animado
        - Barra com texto animado OK
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
      <main className="dark:bg-background-dark bg-background-light h-full">
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Home />
      </main>
    </div>
  );
}

export default App;
