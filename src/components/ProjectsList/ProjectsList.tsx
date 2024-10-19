import React from 'react';
import projects from '../../utils/Projects';
import LinkMenu from '../LinkMenu/LinkMenu';
import ImagePreview from '../ImagePreview/ImagePreview';
import '../../styles/scroll.css';
import Carousel from '../Carousel/Carousel';

type ProjectProps = {
  imageOpen: boolean;
  setImageOpen: (imageOpen: boolean) => void;
  projectId: number;
  setProjectId: (id: number) => void;
};

export default function ProjectsList({
  imageOpen,
  setImageOpen,
  projectId,
  setProjectId,
}: ProjectProps) {
  return (
    <section className="h-screen w-screen relative flex flex-col items-start lg:items-center justify-center p-4">
      <div id="projects" className="absolute top-0 left-0" />
      <header className="w-full flex flex-col items-center justify-center dark:text-text-dark">
        <LinkMenu text="Projetos" id="" emote="🔗" />
        <h2 className="text-3xl my-8 w-full text-center">Meus Projetos</h2>
      </header>
      <div className="h-[70%] w-[80%] m-auto flex items-center rounded-lg">
        <Carousel
          arrProjects={projects}
          setImageOpen={setImageOpen}
          setProjectId={setProjectId}
        />
        {/* {projects.map((project) => (
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
        ))} */}
      </div>
      {imageOpen && (
        <div className="bg-secondary-light h-[40%] lg:h-[50%] xl:h-[80%] w-[80%] absolute top-56 lg:top-96 xl:top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center z-[98] border-2 border-text-light dark:border-primary-light rounded-md">
          <ImagePreview
            image={projects[projectId - 1].imagePreview}
            setImageOpen={setImageOpen}
          />
        </div>
      )}
    </section>
  );
}
