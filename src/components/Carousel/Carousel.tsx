import React from 'react';
import { Project } from '../../utils/Projects';
import CardProject from '../CardProject/CardProject';

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
  return (
    <div className="h-full relative w-full border-r-2 overflow-hidden overflow-x-auto lg:select-none border-primary flex lg:items-center lg:p-4 lg:rounded-lg space-x-4">
      {arrProjects.map((project) => (
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
      ))}
      <div className="absolute hidden lg:block">l</div>
      <div className="absolute hidden lg:block">r</div>
    </div>
  );
}
