import React from 'react';
import LinkMenu from '../LinkMenu/LinkMenu';
import Skill from '../Skill/Skill';

export default function Skills() {
  return (
    <section className="h-screen w-screen relative dark:text-text-dark text-text-light">
      <div className="absolute h-full w-full inset-0 border-x-2 border-primary rounded-lg z-[0]" />
      <LinkMenu text="Minhas Skills" emote="🧐" id="" />
      <h2>Skills</h2>
      <div>
        <section>
          <h3>Skill e Framework que mais uso:</h3>
          <ul className="text-primary">
            <li>
              <Skill name="JavaScript" />
              <p>JavaScript</p>
            </li>
            <li>
              <Skill name="TypeScript" />
              <p>TypeScript</p>
            </li>
            <li>
              <Skill name="React" />
              <p>React</p>
            </li>
            <li>
              <Skill name="CSS" />
              <p>CSS</p>
            </li>
            <li>
              <Skill name="Tailwind" />
              <p>Tailwind</p>
            </li>
            <li>
              <Skill name="HTML5" />
              <p>HTML5</p>
            </li>
            <li>
              <Skill name="Git" />
              <p>Git</p>
            </li>
            <li>
              <Skill name="Github" />
              <p>GitHub</p>
            </li>
            <li>
              <Skill name="Figma" />
              <p>Figma</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Skill e Framework que já usei:</h3>
          <ul>
            <li>
              <Skill name="Photoshop" />
              <p>Photoshop</p>
            </li>
            <li>
              <Skill name="Illustrator" />
              <p>Illustrator</p>
            </li>
            <li>
              <Skill name="Node" />
              <p>Node</p>
            </li>
            <li>
              <Skill name="Nextjs" />
              <p>Nextjs</p>
            </li>
            <li>
              <Skill name="Insomnia" />
              <p>Insomnia</p>
            </li>
            <li>
              <Skill name="Docker" />
              <p>Docker</p>
            </li>
            <li>
              <Skill name="Vite" />
              <p>Vite</p>
            </li>
            <li>
              <Skill name="Postman" />
              <p>Postman</p>
            </li>
            <li>
              <Skill name="Redux" />
              <p>Redux</p>
            </li>
            <li>
              <Skill name="SASS" />
              <p>SASS</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
