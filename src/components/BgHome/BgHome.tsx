import React from 'react';
import '../../style/Bg.css';

export default function BgHome() {
  function getRandomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  function getRandomNumber(): number {
    const options = [1, 2];
    return options[Math.floor(Math.random() * options.length)];
  }

  const divStyles = Array.from({ length: 16 }, () => ({
    color: ['#581937a5', '#e45a83c3', '#fa00c498'][
      Math.floor(Math.random() * 3)
    ],
    top: `${getRandomInRange(10, 60)}%`,
    left: `${getRandomInRange(0, 98)}%`,
    animationDuration: `${getRandomInRange(50, 60)}s`,
    animationDelay: `-${getRandomInRange(10, 50)}s`,
    transformOrigin: `${getRandomInRange(-30, 30)}vw ${getRandomInRange(
      -30,
      30
    )}vh`,
    boxShadow: `${getRandomInRange(-40, 20)}vmin 0 ${getRandomInRange(
      5,
      6
    )}vmin currentColor`,
    size: `${getRandomNumber()}rem`,
    rounded: `${getRandomInRange(4, 50)}%`,
  }));

  return (
    <div className="h-full w-full absolute left-0 top-0 background z-0 md:block hidden">
      {divStyles.map((style, index) => (
        <div
          key={index}
          className="border-2 border-primary opacity-50"
          style={{
            color: style.color,
            top: style.top,
            left: style.left,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            transformOrigin: style.transformOrigin,
            boxShadow: style.boxShadow,
            position: 'absolute',
            height: style.size,
            width: style.size,
            borderRadius: style.rounded,
          }}
        />
      ))}
    </div>
  );
}
