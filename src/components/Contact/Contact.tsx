import React from 'react';

export default function Contact() {
  return (
    <section>
      <header>
        <h2>Contato</h2>
      </header>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <button>Voltar ao topo</button>
    </section>
  );
}
