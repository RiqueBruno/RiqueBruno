import React from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaJava,
} from "react-icons/fa";
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
  SiInsomnia,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiSass, DiPhotoshop, DiIllustrator } from "react-icons/di";

export type TechName =
  | "JavaScript"
  | "React"
  | "Node"
  | "TypeScript"
  | "HTML5"
  | "CSS"
  | "Tailwind"
  | "Git"
  | "Figma"
  | "Photoshop"
  | "Illustrator"
  | "Nextjs"
  | "Insomnia"
  | "Docker"
  | "Vite"
  | "Postman"
  | "Redux"
  | "SASS"
  | "Github"
  | "Linkedin"
  | "Whatsapp"
  | "Java"
  | "MySQL"
  | "SpringBoot";

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
  Nextjs: RiNextjsFill,
  Insomnia: SiInsomnia,
  Docker: FaDocker,
  Vite: SiVite,
  Postman: SiPostman,
  Redux: SiRedux,
  SASS: DiSass,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Whatsapp: FaWhatsapp,
  Java: FaJava,
  MySQL: SiMysql,
  SpringBoot: SiSpringboot,
};

interface TechIconProps {
  name: TechName;
  size?: number;
  color?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size, color = "" }) => {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} color={color} />;
};

export default TechIcon;
