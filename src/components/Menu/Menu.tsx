import { useEffect, useState } from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';

type MenuProps = {
  darkMode: boolean;
  handleThemeChange: () => void;
  ulClassName: string;
  liClassName: string;
  aClassName: string;
  handlerCloseMenu: () => void;
};

export default function Menu({
  darkMode,
  handleThemeChange,
  ulClassName,
  liClassName,
  aClassName,
  handlerCloseMenu,
}: MenuProps) {
  const [activeLink, setActiveLink] = useState<string>('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Tecnologias' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleScroll = () => {
    let currentSection = 'home';
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      }
    });

    if (currentSection !== activeLink) {
      setActiveLink(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  return (
    <ul className={ulClassName}>
      {sections.map((item) => (
        <li key={item.id} className={liClassName}>
          <a
            href={`#${item.id}`}
            className={`${aClassName} ${
              activeLink === item.id ? 'text-primary' : ''
            }`}
            onClick={() => {
              setActiveLink(item.id);
              handlerCloseMenu();
            }}
          >
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
          </a>
        </li>
      ))}
      <li className={liClassName}>
        <ThemeButton
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </li>
    </ul>
  );
}
