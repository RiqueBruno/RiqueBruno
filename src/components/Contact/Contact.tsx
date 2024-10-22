import React from 'react';
import LinkMenu from '../LinkMenu/LinkMenu';
import contactMe from '../../assets/images/Contact.png';

export default function Contact() {
  return (
    <section>
      <header>
        <LinkMenu emote="📫" text="Contato" id="" />
        <h2>Contato</h2>
      </header>
      <div>
        <div>
          <img src={contactMe} alt="Entre em contato comigo." />
        </div>
        <div>
          <form>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <button>Voltar ao topo</button>
    </section>
  );
}
