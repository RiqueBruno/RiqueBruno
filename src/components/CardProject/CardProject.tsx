import React from 'react';
import TechIcon from '../Skill/Skill';
import { TechName } from '../Skill/Skill';
import ImagePreview from '../ImagePreview/ImagePreview';
import { IoExpand } from 'react-icons/io5';
import '../../style/Bg.css';

type ProjectProps = {
  title: string;
  description: string;
  skills: TechName[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
  imagePreview: string;
  imageOpen: boolean;
  setImageOpen: (imageOpen: boolean) => void;
};

export default function CardProject({
  title,
  description,
  skills,
  deployLink,
  codeLink,
  designLink,
  image,
  imagePreview,
  imageOpen,
  setImageOpen,
}: ProjectProps) {
  return (
    <article className="h-full w-72 rounded-md border-2 dark:border-primary-light relative dark:text-text-dark">
      <div className="w-full h-full dark:bg-card-dark flex flex-col justify-center items-center z-[50] p-2">
        <div className="z-[51] h-[24%] w-full mb-4 relative">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
          <button
            onClick={() => setImageOpen(true)}
            className="top-0 right-10 absolute cursor-pointer"
          >
            <IoExpand color="#E24AC6" />
          </button>
        </div>
        <header className="z-[51] text-2xl mb-2">
          <h3>{title}</h3>
        </header>
        <div className="z-[51] text-sm text-center mb-2 border-b-2 border-transparent w-[80%] opacity-70">
          <p>{description}</p>
        </div>
        <div className="z-[51] border-b-2 border-transparent w-[80%] flex justify-around mb-4">
          <a href={deployLink}>Deploy</a>
          <a href={codeLink}>Code</a>
          <a href={designLink}>Design</a>
        </div>
        <div className="z-[51] flex flex-wrap w-[80%] opacity-50">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center space-y-1 mb-2 mr-4"
            >
              <TechIcon name={skill} size={15} />
              <p className="text-xs">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      {imageOpen && (
        <ImagePreview image={imagePreview} setImageOpen={setImageOpen} />
      )}
      <div className="dark:bg-card-cardbg blur-[100px] h-full w-full absolute z-[0] left-0 top-0" />
    </article>
  );
}
