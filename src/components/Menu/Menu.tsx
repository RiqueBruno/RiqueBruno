import React from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';

type MenuProps = {
  darkMode: boolean;
  handleThemeChange: () => void;
  ulClassName: string;
  liClassName: string;
  aClassName: string;
};

export default function Menu({
  darkMode,
  handleThemeChange,
  ulClassName,
  liClassName,
  aClassName,
}: MenuProps) {
  return (
    <ul className={ulClassName}>
      <li className={liClassName}>
        <a className={aClassName} href="#home">
          Home
        </a>
      </li>
      <li className={liClassName}>
        <a className={aClassName} href="#about">
          About
        </a>
      </li>
      <li className={liClassName}>
        <a className={aClassName} href="#projects">
          Projects
        </a>
      </li>
      <li className={liClassName}>
        <a className={aClassName} href="#skills">
          Skills
        </a>
      </li>
      <li className={liClassName}>
        <a className={aClassName} href="#contact">
          Contact
        </a>
      </li>
      <li className={liClassName}>
        <ThemeButton
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </li>
    </ul>
  );
}
