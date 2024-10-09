import React from 'react';
import SliderHome from '../SliderHome/SliderHome';

export default function Home() {
  return (
    <section className="dark:text-text-dark h-screen pt-24 w-full">
      <h1>Olá, eu sou o Bruno</h1>
      <h2>Desenvolvedor Front-end</h2>
      <h3>
        Construo sites e aplicações web com as melhores tecnologias do mercado
      </h3>
      <button>Conheça meu trabalho</button>
      <button>Entre em contato</button>
      <SliderHome />
      <BgHome />
    </section>
  );
}
