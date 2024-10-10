import React from 'react';
import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaDocker, FaGit, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiRedux,
  SiVite,
} from 'react-icons/si';
import { DiSass, DiPhotoshop, DiIllustrator } from 'react-icons/di';

type TechName =
  | 'JavaScript'
  | 'React'
  | 'Node'
  | 'TypeScript'
  | 'HTML5'
  | 'CSS'
  | 'Tailwind'
  | 'Git'
  | 'Figma'
  | 'Photoshop'
  | 'Illustrator'
  | 'Nextjs'
  | 'Insomnia'
  | 'Docker'
  | 'Vite'
  | 'Postman'
  | 'Redux'
  | 'SASS'
  | 'Github';

const iconMap: Record<TechName, IconType> = {
  JavaScript: SiJavascript,
  React: FaReact,
  Node: FaNodeJs,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS: SiCss3,
  Tailwind: SiTailwindcss,
  Git: FaGit,
  Figma: SiFigma,
  Photoshop: DiPhotoshop,
  Illustrator: DiIllustrator,
  Nextjs: FaReact,
  Insomnia: SiPostman,
  Docker: FaDocker,
  Vite: SiVite,
  Postman: SiPostman,
  Redux: SiRedux,
  SASS: DiSass,
  Github: FaGithub,
};

interface TechIconProps {
  name: TechName;
  size?: number;
  color?: string;
}

const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 40,
  color = 'pink',
}) => {
  const IconComponent = iconMap[name];

  if (name === 'Nextjs') {
    return <img src={`../../assets/icon/${name}.svg`} alt={name} />;
  } else if (name === 'Insomnia') {
    return <img src={`../../assets/icon/${name}.svg`} alt={name} />;
  }

  return <IconComponent size={size} color={color} />;
};

export default TechIcon;
