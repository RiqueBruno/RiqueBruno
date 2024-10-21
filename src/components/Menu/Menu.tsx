import React, { useState } from 'react';
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
  const [activeLink, setActiveLink] = useState<string | null>('home');

  const handleClick = (id: string) => {
    setActiveLink(id);
    handlerCloseMenu();
  };

  return (
    <ul className={ulClassName}>
      {[
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'skills', label: 'Tecnologias' },
        { id: 'contact', label: 'Contato' },
      ].map((item) => (
        <li key={item.id} className={liClassName}>
          <a
            href={`#${item.id}`}
            className={`${aClassName} ${
              activeLink === item.id ? 'text-primary' : ''
            }`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
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
