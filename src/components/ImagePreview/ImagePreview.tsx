import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

type ImagePreviewProps = {
  setImageOpen: (imageOpen: boolean) => void;
  image: string;
};

export default function ImagePreview({
  setImageOpen,
  image,
}: ImagePreviewProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 overflow-hidden">
      <button
        onClick={() => setImageOpen(false)}
        className="absolute top-0 right-0"
      >
        <IoMdCloseCircle size={30} color="red" />
      </button>
      <img src={image} alt="Imagem do projeto" />
    </div>
  );
}
