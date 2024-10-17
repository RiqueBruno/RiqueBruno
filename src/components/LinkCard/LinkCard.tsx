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
    <a href={link}>
      <Icon />
      <span>{type}</span>
    </a>
  );
}
