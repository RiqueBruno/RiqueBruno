import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && 'dark'}`}>
      <main className="dark:bg-blue-400 bg-white">
        <h1 className="dark:text-black bg-pink-400 dark:bg-yellow-300">
          Testando Tailwind
        </h1>
        <button onClick={handleThemeChange}>trocar tema</button>
      </main>
    </div>
  );
}

export default App;
