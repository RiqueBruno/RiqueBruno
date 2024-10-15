import React from 'react';

type ImagePreviewProps = {
  imageOpen: boolean;
  setImageOpen: (imageOpen: boolean) => void;
  image: string;
};

export default function ImagePreview({
  imageOpen,
  setImageOpen,
  image,
}: ImagePreviewProps) {
  return (
    <div>
      {imageOpen && (
        <div>
          <button onClick={() => setImageOpen(false)}>X</button>
          <img src={image} alt="Imagem do projeto" />
        </div>
      )}
    </div>
  );
}
