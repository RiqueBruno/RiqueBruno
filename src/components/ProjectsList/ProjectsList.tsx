import React from 'react';

type ProjectProps = {
  imageOpen: boolean;
  setImageOpen: (imageOpen: boolean) => void;
};

export default function ProjectsList({
  imageOpen,
  setImageOpen,
}: ProjectProps) {
  return <div>ProjectsList</div>;
}
