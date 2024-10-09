import React from 'react';

type SliderItemProps = {
  slider: string;
  delay: number;
};

export default function SliderItem({ slider, delay }: SliderItemProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className="animate-slider text-text-light h-full flex items-center justify-center absolute left-[100%] w-44"
    >
      {'/'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {slider}
    </div>
  );
}
