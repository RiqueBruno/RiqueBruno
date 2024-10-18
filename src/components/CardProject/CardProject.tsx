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

  const truncatedDescription =
    description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <article className="h-full w-72 lg:h-[32rem] lg:w-[32rem] rounded-md border-2 border-primary-light relative dark:text-text-dark text-text-light">
      <div className="w-full h-full dark:bg-card-dark flex flex-col justify-center items-center z-[50] p-2">
        <div className="z-[51] h-[24%] w-full mb-4 relative">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
          <button
            onClick={() => handleProjectClick(id)}
            className="top-0 right-10 absolute cursor-pointer text-text-light lg:text-3xl dark:text-primary"
          >
            <IoExpand />
          </button>
        </div>
        <header className="z-[51] text-2xl mb-2 lg:mb-4">
          <h3>{title}</h3>
        </header>
        <div className="z-[51] text-sm text-center mb-2 lg:mb-2 xl:mb-8 border-b-2 border-transparent w-[80%] opacity-70 pb-2">
          <p className="scrollbar overflow-y-auto md:text-sm lg:text-xs max-h-40 h-40 lg:max-h-16 xl:h-24">
            {isExpanded ? description : truncatedDescription}
            {description.length > 200 && (
              <button onClick={handleToggleExpand} className="ml-2">
                {isExpanded ? (
                  <strong className="text-primary">Ver menos</strong>
                ) : (
                  <strong className="text-primary">Ver mais</strong>
                )}
              </button>
            )}
          </p>
        </div>
        <div className="z-[51] border-b-2 border-transparent w-[90%] lg:w-[80%] flex justify-around mb-4">
          <LinkCard link={deployLink} type="Deploy" />
          <LinkCard link={codeLink} type="Code" />
          {designLink.length > 5 && (
            <LinkCard link={designLink} type="Design" />
          )}
        </div>
        <div className="z-[51] flex flex-wrap w-[90%] opacity-50 justify-center lg:mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col text-xs lg:text-base justify-center items-center text-center space-y-1 mb-2 mr-4 dark:text-text-dark"
            >
              <TechIcon name={skill} color="" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dark:bg-card-cardbg blur-[100px] h-full w-full absolute z-[0] left-0 top-0" />
    </article>
  );
}
