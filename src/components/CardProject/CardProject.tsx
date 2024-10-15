import React from 'react';
import TechIcon from '../Skill/Skill';
import { TechName } from '../Skill/Skill';

type ProjectProps = {
  title: string;
  description: string;
  skills: TechName[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
  imagePreview: string;
};

export default function CardProject({
  title,
  description,
  skills,
  deployLink,
  codeLink,
  designLink,
  image,
}: ProjectProps) {
  return (
    <article>
      <div>
        <header>
          <h3>{title}</h3>
        </header>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <a href={deployLink}>Deploy</a>
          <a href={codeLink}>Code</a>
          <a href={designLink}>Design</a>
        </div>
        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <TechIcon name={skill} />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </article>
  );
}
