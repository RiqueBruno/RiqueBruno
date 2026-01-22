import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

type HeaderProps = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const menu = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);

const close = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
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
    <>
      {open && (
        <div 
          className="fixed inset-0 z-[9980] bg-black/20 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      <header
        className={`
          ${open ? 'max-h-[600px] pb-8' : 'max-h-20'} 
          h-auto
          lg:h-20 lg:max-h-none
          fixed top-0 left-0 w-full 
          z-[9990] 
          transition-all duration-500 ease-in-out
          dark:bg-background-dark bg-background-light 
          shadow-md
          flex flex-col md:flex-row md:justify-around md:items-center
          overflow-hidden
        `}
      >
        <div className="h-20 w-full md:w-auto flex items-center justify-between px-8 md:px-0 md:justify-around shrink-0">
          <Logo darkMode={darkMode} className="h-12" />
          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-10 w-10 rounded-full bg-primary-dark text-white flex items-center justify-center p-2 hover:bg-primary transition-colors"
            aria-label="Abrir menu"
          >
            {open ? close : menu}
          </button>
        </div>
        <nav
          className={`
            ${open ? 'flex opacity-100 mt-4' : 'hidden opacity-0'} 
            md:flex md:opacity-100 md:mt-0
            flex-col md:flex-row 
            items-center justify-center 
            w-full md:w-auto md:h-full 
            dark:bg-background-dark bg-background-light 
            dark:text-text-dark text-text-light 
            transition-opacity duration-300
          `}
        >
          <Menu
            darkMode={darkMode}
            handleThemeChange={handleThemeChange}
            handlerCloseMenu={handlerCloseMenu}
            ulClassName={`
              flex flex-col md:flex-row 
              w-full items-center justify-center 
              space-y-6 md:space-y-0 md:space-x-8
            `}
            liClassName="text-lg font-medium hover:scale-105 transition-transform cursor-pointer"
            aClassName="dark:hover:text-primary-dark hover:text-primary-light transition-colors py-2 block"
          />
        </nav>
      </header>
    </>
  );
}