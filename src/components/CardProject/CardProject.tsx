import { useState } from "react";
import LinkCard from "../LinkCard/LinkCard";
import TechIcon from "../Skill/Skill";
import { TechName } from "../Skill/Skill";
import { IoExpand } from "react-icons/io5";
import "../../styles/Bg.css";
import "../../styles/scroll.css";

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
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const truncatedDescription =
    description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <article className="h-full py-4 w-full flex-none px-4 md:px-16 lg:px-20 rounded-md border-2 border-primary-light relative dark:text-text-dark text-text-light overflow-hidden">
      <div className="w-full h-full dark:bg-card-dark flex flex-col md:flex-row justify-between md:justify-start items-center md:items-stretch z-[50] p-2 md:p-6 md:gap-8">
        <div className="z-[51] h-[20%] md:h-full w-full md:w-2/5 mb-2 md:mb-0 relative flex items-center justify-center bg-black/5 dark:bg-black/20 rounded-xl p-2 md:p-4 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain drop-shadow-md"
          />
          <button
            aria-label="Expandir Imagem do projeto"
            onClick={() => {
              setProjectId(id);
              setImageOpen(true);
            }}
            className="top-2 right-2 md:top-4 md:right-4 absolute cursor-pointer text-text-light text-xl lg:text-3xl dark:text-primary bg-black/40 hover:bg-primary transition-colors rounded-full p-1.5 md:p-2"
          >
            <IoExpand />
          </button>
        </div>

        <div className="z-[51] w-full md:w-3/5 h-[80%] md:h-full flex flex-col justify-between items-center md:items-start">
          <header className="mb-1 md:mb-4 text-center md:text-left w-full mt-1 md:mt-0">
            <h3 className="text-lg md:text-3xl font-bold truncate">{title}</h3>
          </header>

          <div className="text-xs md:text-base text-center md:text-left mb-2 md:mb-6 w-[95%] md:w-full opacity-70 pb-2 flex-1 overflow-hidden flex flex-col">
            <p className="scrollbar overflow-y-auto md:text-sm lg:text-base h-full hidden md:block md:pr-4">
              {isExpanded ? description : truncatedDescription}
              {description.length > 200 && (
                <button
                  aria-label="Ver mais / ver menos detalhes do projeto"
                  onClick={handleToggleExpand}
                  className="ml-2"
                >
                  <strong className="text-primary">
                    {isExpanded ? "Ver menos" : "Ver mais"}
                  </strong>
                </button>
              )}
            </p>
            <p className="scrollbar overflow-y-auto text-xs h-full block md:hidden">
              {description}
            </p>
          </div>

          <div className="border-b-2 border-transparent md:border-gray-200 md:dark:border-gray-800 w-full flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-2 md:mb-6 md:pb-4">
            <LinkCard link={deployLink} type="Deploy" />
            <LinkCard link={codeLink} type="Code" />
            {designLink.length > 5 && (
              <LinkCard link={designLink} type="Design" />
            )}
          </div>

          <div className="flex flex-wrap w-full opacity-50 justify-center md:justify-start overflow-y-auto max-h-12 md:max-h-20 scrollbar gap-x-3 gap-y-1 md:gap-x-4 md:mt-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col text-[10px] md:text-xs xl:text-sm justify-center items-center text-center space-y-1 dark:text-text-dark"
              >
                <TechIcon name={skill} color="" />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dark:bg-card-cardbg blur-[100px] h-full w-full absolute z-[0] left-0 top-0" />
    </article>
  );
}
