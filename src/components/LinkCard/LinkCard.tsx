import React from 'react';
import { GrDeploy } from 'react-icons/gr';
import { IoLogoFigma } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';

type LinkCardProps = {
  type: 'Deploy' | 'Code' | 'Design';
  link: string;
};

export default function LinkCard({ type, link }: LinkCardProps) {
  const icons = {
    Deploy: GrDeploy,
    Design: IoLogoFigma,
    Code: FaCode,
  };
  const Icon = icons[type];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:bg-btnCard-dark dark:hover:bg-btnCard-lightHover bg-btnCard-light hover:bg-btnCard-lightHover rounded-md p-2 dark:text-primary flex justify-center items-center space-x-1 mb-2"
    >
      <Icon size={15} />
      <span className="text-sm dark:opacity-80">{type}</span>
    </a>
  );
}
