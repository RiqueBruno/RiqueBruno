type Project = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['React', 'TypeScript', 'Styled Components'],
    deployLink: 'https://example.com',
    codeLink: 'https://github.com',
    designLink: 'https://dribbble.com',
    image: 'project1.png',
  },
];

export default projects;
