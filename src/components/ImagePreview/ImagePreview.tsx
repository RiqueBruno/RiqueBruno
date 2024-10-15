import React from 'react';

type ImagePreviewProps = {
  setImageOpen: (imageOpen: boolean) => void;
  image: string;
};

export default function ImagePreview({
  setImageOpen,
  image,
}: ImagePreviewProps) {
  return (
    <div>
      <div>
        <button onClick={() => setImageOpen(false)}>X</button>
        <img src={image} alt="Imagem do projeto" />
      </div>
    </div>
  );
}
