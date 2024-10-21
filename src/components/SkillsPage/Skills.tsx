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
    <section className="h-screen w-screen relative dark:text-text-dark text-text-light">
      <div className="absolute h-full w-full inset-0 border-x-2 border-primary rounded-lg z-[0]" />
      <LinkMenu text="Minhas Skills" emote="🧐" id="" />
      <h2>Skills</h2>
      <div>
        <section>
          <h3>Skill e Framework que mais uso:</h3>
          <ul className="text-primary">
            {arrSkills.slice(0, 9).map((skill) => (
              <li key={skill}>
                <Skill name={skill} />
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Skill e Framework que já usei:</h3>
          <ul>
            {arrSkills.slice(9).map((skill) => (
              <li key={skill}>
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
