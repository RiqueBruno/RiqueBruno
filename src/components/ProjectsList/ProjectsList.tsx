import React from 'react';
import projects from '../../utils/Projects';
import CardProject from '../CardProject/CardProject';
import LinkMenu from '../LinkMenu/LinkMenu';

type ProjectProps = {
  imageOpen: boolean;
  setImageOpen: (imageOpen: boolean) => void;
};

export default function ProjectsList({
  imageOpen,
  setImageOpen,
}: ProjectProps) {
  return (
    <section className="h-screen w-screen relative flex flex-col items-start justify-center p-4">
      <div id="projects" className="absolute top-0 left-0" />
      <header className="w-full flex flex-col items-center justify-center dark:text-text-dark">
        <LinkMenu text="Projetos" id="" emote="🔗" />
        <h2 className="text-3xl my-8 w-full text-center">Meus Projetos</h2>
      </header>
      <div className="h-[70%]">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            imageOpen={imageOpen}
            setImageOpen={setImageOpen}
            title={project.title}
            description={project.description}
            skills={project.skills}
            deployLink={project.deployLink}
            codeLink={project.codeLink}
            designLink={project.designLink}
            image={project.image}
            imagePreview={project.imagePreview}
          />
        ))}
      </div>
    </section>
  );
}
