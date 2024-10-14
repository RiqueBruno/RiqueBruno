import React from 'react';
import SliderHome from '../SliderHome/SliderHome';
import BgHome from '../BgHome/BgHome';
import AvatarHome from '../AvatarHome/AvatarHome';
import LinkMenu from '../LinkMenu/LinkMenu';

type HomeProps = {
  darkMode: boolean;
};

export default function Home({ darkMode }: HomeProps) {
  return (
    <section className="dark:text-text-dark h-[calc(100vh-5rem)] pt-24 w-full relative">
      <div className="grid grid-cols-2 w-full h-full z-40 pb-20">
        <div className="flex flex-col justify-center items-start space-y-4 pl-24 dark:text-text-dark text-text-light">
          <LinkMenu text="Saudações!" emote="👋" />
          <h1 className="text-5xl font-bold">
            Bruno
            <br />
            Henrique
          </h1>
          <h2 className="text-2xl">Front-end developer · UI designer</h2>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
              Conheça meu trabalho
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-md">
              Entre em contato
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[28rem] w-[30rem]">
            <AvatarHome darkMode={darkMode} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <SliderHome />
      </div>
      <BgHome />
    </section>
  );
}
