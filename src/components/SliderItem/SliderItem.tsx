import React from 'react';

type SliderItemProps = {
  slider: string;
  delay: number;
};

export default function SliderItem({ slider, delay }: SliderItemProps) {
  return (
    <span
      className={`animate-slider delay-[${delay}s] text-text-light`}
    >{`/ ${slider} `}</span>
  );
}
