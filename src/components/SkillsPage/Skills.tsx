import React from 'react';
import LinkMenu from '../LinkMenu/LinkMenu';
import Skill, { TechName } from '../Skill/Skill';

export default function Skills() {
  const arrSkills: TechName[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'CSS',
    'Tailwind',
    'HTML5',
    'Git',
    'Github',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Node',
    'Nextjs',
    'Insomnia',
    'Docker',
    'Vite',
    'Postman',
    'Redux',
    'SASS',
  ];

  return (
    <section className="h-screen w-screen relative dark:text-text-dark text-text-light flex flex-col items-center justify-end pb-14 space-y-4 overflow-hidden">
      <div
        className="absolute h-full w-full inset-0 border-x-2 border-primary rounded-lg z-[0]"
        id="skills"
      />
      <div className="absolute h-full w-full inset-0 z-[0] text-[24rem] text-center opacity-10 hidden lg:block">
        <div className="animate-sliderText">MINHAS</div>
        <div className="animate-sliderTextReverse">TECNOLOGIAS</div>
      </div>
      <div className="z-[500] flex flex-col justify-center items-center space-y-4">
        <LinkMenu text="Skills" emote="🧐" id="" />
        <h2 className="text-3xl lg:pb-14">Minhas Tecnologias</h2>
      </div>
      <div className="lg:h-[60%] z-[500] lg:w-[60%] w-full flex flex-col justify-center items-center rounded-lg lg:border-2 lg:border-primary-light space-y-8 lg:shadow-custom-magenta dark:bg-background-dark bg-background-light">
        <section className="flex flex-col items-center justify-center w-[90%] space-y-8">
          <h3 className="text-lg opacity-80">Tecnologias que mais uso:</h3>
          <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full text-center">
            {arrSkills.slice(0, 9).map((skill) => (
              <li
                key={skill}
                className="dark:opacity-50 h-10 lg:h-14 rounded-md opacity-80 text-xs md:text-sm lg:text-base hover:opacity-100 dark:hover:opacity-90 hover:bg-transparent transition-opacity duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light"
              >
                <Skill name={skill} />
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="w-[90%] border-b-2 border-primary opacity-50" />
        <section className="flex flex-col items-center justify-center w-[90%] space-y-8">
          <h3 className="text-lg opacity-80">Tecnologias que já usei:</h3>
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full text-center">
            {arrSkills.slice(9).map((skill) => (
              <li
                key={skill}
                className="dark:opacity-50 h-10 lg:h-14 rounded-md opacity-80 text-xs md:text-sm lg:text-base hover:opacity-100 dark:hover:opacity-90 hover:bg-transparent transition-opacity duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light"
              >
                <Skill name={skill} />
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
