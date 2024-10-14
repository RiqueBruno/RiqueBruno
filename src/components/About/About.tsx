import React from 'react';
import brunoImage from '../../assets/images/foto.jpg';

export default function About() {
  return (
    <section className="bg-primary flex flex-col justify-center items-center lg:flex-row p-10">
      <div>
        <div className="lg:block rounded-full overflow-hidden h-52 w-52 border-2 border-primary z-50 shadow-md">
          <img
            src={brunoImage}
            alt="Imagem de Bruno"
            className="lg:block w-full h-full object-cover"
          />
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
      </div>
    </section>
  );
}
