import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectsList from './components/ProjectsList/ProjectsList';
import Skills from './components/SkillsPage/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [imageOpen, setImageOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode && 'dark'
      } w-screen dark:bg-background-dark bg-secondary`}
    >
      <main className="dark:bg-background-dark bg-background-light h-full w-screen overflow-x-hidden">
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Home darkMode={darkMode} />
        <About />
        <ProjectsList
          imageOpen={imageOpen}
          setImageOpen={setImageOpen}
          projectId={projectId}
          setProjectId={setProjectId}
        />
        <Skills />
        <Contact />
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
