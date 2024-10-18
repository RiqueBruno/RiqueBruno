import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

type HeaderProps = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const menu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-full w-full"
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-full w-full"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Header({ darkMode, handleThemeChange }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handlerCloseMenu = () => {
    if (open) {
      setOpen(false);
    }
    return;
  };
  return (
    <header
      className={`${
        open ? 'h-96' : 'h-20'
      } h-32 lg:h-20 mr-0 pr-0 lg:pb-12 md:flex md:justify-around md:items-center pt-10 fixed md:relative lg:fixed w-screen z-[1000] dark:bg-background-dark bg-background-light transition-all`}
    >
      <div
        className={`${
          open ? 'h-20' : 'h-full'
        } flex items-center justify-around`}
      >
        <Logo darkMode={darkMode} className="h-12" />
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden h-10 w-10 rounded-full bg-primary-dark flex items-center justify-center p-2"
        >
          {open ? close : menu}
        </button>
      </div>
      <nav
        className={`${
          open ? 'block' : 'hidden'
        } md:flex relative md:items-center justify-center md:h-full dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light p-4`}
      >
        <Menu
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          handlerCloseMenu={handlerCloseMenu}
          ulClassName={`${
            open ? 'flex flex-col w-full items-center' : 'hidden'
          } md:flex md:justify-center md:space-x-4 md:items-center md:h-full`}
          liClassName="text-lg h-14 flex items-center justify-center"
          aClassName="dark:hover:text-primary-dark hover:text-primary-light border-b-2 border-transparent hover:border-primary-light"
        />
      </nav>
      <div
        className={`${
          open
            ? 'h-[24rem] w-full absolute top-21 left-0 z-0 bg-transparent blur-sm'
            : 'hidden'
        }`}
        onClick={handlerCloseMenu}
      />
    </header>
  );
}
