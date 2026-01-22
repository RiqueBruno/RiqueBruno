import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdCloseCircle } from 'react-icons/io';

type ImagePreviewProps = {
  setImageOpen: (imageOpen: boolean) => void;
  image: string;
};

export default function ImagePreview({
  setImageOpen,
  image,
}: ImagePreviewProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center pt-20 pb-4 px-4"
      onClick={() => setImageOpen(false)}
    >
      <button
        onClick={() => setImageOpen(false)}
        className="fixed top-8 right-8 text-red-500 hover:text-red-400 transition-transform hover:scale-110 z-[100000] p-2 bg-black/50 rounded-full"
        title="Fechar visualização"
      >
        <IoMdCloseCircle size={45} />
      </button>
      <img 
        src={image} 
        alt="Preview ampliado" 
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default border-2 border-white/10"
        onClick={(e) => e.stopPropagation()} 
      />
      
      <p className="text-white/50 text-sm mt-4 animate-pulse">
        Clique fora para fechar
      </p>
    </div>,
    document.body
  );
}