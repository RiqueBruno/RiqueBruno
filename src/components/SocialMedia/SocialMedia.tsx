import React from 'react';
import TechIcon from '../Skill/Skill';

type SocialMediaProps = {
  type: 'Whatsapp' | 'Linkedin' | 'Github';
  size: number;
  location: 'home' | 'footer';
  linkTo: string;
};

export default function SocialMedia({
  type,
  size,
  location,
  linkTo,
}: SocialMediaProps) {
  return (
    <a
      href={linkTo}
      className={`${
        location === 'home' ? 'bg-primary' : 'bg-secondary'
      } rounded-full w-12 h-12 flex justify-center items-center dark:hover:bg-text-dark hover:bg-text-light transition-all`}
    >
      <TechIcon name={type} size={size} color="#500742" />
    </a>
  );
}
