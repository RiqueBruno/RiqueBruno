import React from 'react';
import LinkCard from '../LinkCard/LinkCard';
import TechIcon from '../Skill/Skill';
import { TechName } from '../Skill/Skill';
import { IoExpand } from 'react-icons/io5';
import '../../style/Bg.css';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  skills: TechName[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
  setProjectId: (id: number) => void;
  setImageOpen: (imageOpen: boolean) => void;
};

export default function CardProject({
  id,
  title,
  description,
  skills,
  deployLink,
  codeLink,
  designLink,
  image,
  setImageOpen,
  setProjectId,
}: ProjectProps) {
  function handleProjectClick(id: number): void {
    setProjectId(id);
    setImageOpen(true);
    console.log('Project clicked');
  }

  return (
    <article className="h-full w-72 rounded-md border-2 border-primary-light relative dark:text-text-dark text-text-light">
      <div className="w-full h-full dark:bg-card-dark flex flex-col justify-center items-center z-[50] p-2">
        <div className="z-[51] h-[24%] w-full mb-4 relative">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
          <button
            onClick={() => handleProjectClick(id)}
            className="top-0 right-10 absolute cursor-pointer text-text-light dark:text-primary"
          >
            <IoExpand />
          </button>
        </div>
        <header className="z-[51] text-2xl mb-2">
          <h3>{title}</h3>
        </header>
        <div className="z-[51] text-sm text-center mb-2 border-b-2 border-transparent w-[80%] opacity-70">
          <p>{description}</p>
        </div>
        <div className="z-[51] border-b-2 border-transparent w-[90%] flex justify-around mb-4">
          <LinkCard link={deployLink} type="Deploy" />
          <LinkCard link={codeLink} type="Code" />
          {designLink.length > 5 && (
            <LinkCard link={designLink} type="Design" />
          )}
        </div>
        <div className="z-[51] flex flex-wrap w-[90%] opacity-50 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center space-y-1 mb-2 mr-4 dark:text-text-dark"
            >
              <TechIcon name={skill} size={15} color="" />
              <p className="text-xs">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dark:bg-card-cardbg blur-[100px] h-full w-full absolute z-[0] left-0 top-0" />
    </article>
  );
}
