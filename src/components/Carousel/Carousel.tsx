import React, { useRef, useEffect, useState } from 'react';
import { Project } from '../../utils/Projects';
import CardProject from '../CardProject/CardProject';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import '../../styles/scroll.css';

type CarouselProps = {
  arrProjects: Project[];
  setImageOpen: (imageOpen: boolean) => void;
  setProjectId: (id: number) => void;
};

export default function Carousel({
  arrProjects,
  setImageOpen,
  setProjectId,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, []);

  function handleScroll(
    e: React.MouseEvent<HTMLButtonElement>,
    direction: string
  ) {
    e.preventDefault();

    const spacing = 16;

    if (carouselRef.current && cardWidth > 0) {
      const { scrollLeft } = carouselRef.current;

      if (direction === 'left') {
        carouselRef.current.scrollLeft = scrollLeft - (cardWidth + spacing);
      } else if (direction === 'right') {
        carouselRef.current.scrollLeft = scrollLeft + (cardWidth + spacing);
      }
    }
  }

  return (
    <div className="h-full relative w-full border-r-2">
      <div
        ref={carouselRef}
        className="scrollbar scroll-smooth h-full w-full border-x-2 overflow-hidden overflow-x-auto lg:select-none border-primary flex lg:items-center lg:p-4 lg:rounded-lg space-x-4"
      >
        {arrProjects.map((project, index) => (
          <div
            key={project.id}
            ref={index === 0 ? cardRef : null}
            className="w-72 md:h-[90%] lg:h-[90%] xl:w-[32rem] xl:h-[32rem] lg:w-[32rem] h-full"
          >
            <CardProject
              key={project.id}
              id={project.id}
              setImageOpen={setImageOpen}
              title={project.title}
              description={project.description}
              skills={project.skills}
              deployLink={project.deployLink}
              codeLink={project.codeLink}
              designLink={project.designLink}
              image={project.image}
              setProjectId={setProjectId}
            />
          </div>
        ))}
      </div>
      <button
        id="left"
        onClick={(e) => handleScroll(e, 'left')}
        className="absolute p-[0.2rem] z-40 left-0 top-[50%] translate-x-[-100%] translate-y-[-50%] text-4xl bg-primary-light rounded-l-full dark:text-black text-text-light hover:text-text-dark dark:hover:text-secondary-light"
      >
        <FaChevronCircleLeft />
      </button>
      <button
        id="right"
        onClick={(e) => handleScroll(e, 'right')}
        className="absolute p-[0.2rem] z-40 right-0 top-[50%] translate-x-[100%] translate-y-[-50%] text-4xl bg-primary-light rounded-r-full dark:text-black text-text-light hover:text-text-dark dark:hover:text-secondary-light"
      >
        <FaChevronCircleRight />
      </button>
    </div>
  );
}
