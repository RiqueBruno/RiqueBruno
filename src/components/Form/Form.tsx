import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: 'Bruno',
      message: message,
      email: email,
    };

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail || name.length < 2 || message.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos corretamente!',
      });
      return;
    }

    emailjs
      .send(
        'service_qvglc8o',
        'template_kbx9xlc',
        templateParams,
        'GFkOQHbPuJ9a7xxXY'
      )
      .then(() => {
        Swal.fire({
          title: 'Tudo certo!',
          text: 'Logo entrarei em contato!',
          icon: 'success',
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado!',
          footer: `Error: ${error}`,
        });
      });
  };

  const validate = (content: string) => (
    <span
      className="absolute right-2 text-lg invalid"
      style={
        {
          '--content': `'${content}'`,
        } as React.CSSProperties
      }
    >
      ⓘ
    </span>
  );

  return (
    <section className="w-full h-full flex justify-center lg:justify-start items-center">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col p-4 space-y-8 items-start justify-center w-[84%]"
      >
        <div className="w-full relative h-12 div-label">
          {name.length < 2 && validate('Nome deve ter pelo menos 2 caracteres')}
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
            className={
              'dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg p-2 w-full h-full'
            }
          />
          <label
            htmlFor="name"
            className="label-label dark:bg-background-dark bg-background-light px-1"
          >
            Nome
          </label>
        </div>
        <div className="w-full relative h-12 div-label">
          {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
            validate('Email deve ser no formato: email@email.com')}
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg w-full h-full"
          />
          <label
            htmlFor="email"
            className="label-label dark:bg-background-dark bg-background-light px-1"
          >
            Email
          </label>
        </div>
        <div className="w-full relative max-h-44 div-label">
          {message.length < 10 &&
            validate('Mensagem deve ter pelo menos 10 caracteres')}
          <textarea
            id="message"
            name="message"
            value={message}
            required
            onChange={(event) => setMessage(event.target.value)}
            className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg p-2 w-full h-full max-h-44 resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="label-label dark:bg-background-dark bg-background-light px-1"
          >
            Mensagem
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-secondary-light to-primary hover:from-primary hover:to-secondary-light text-text-dark dark:hover:from-secondary-dark dark:hover:to-primary-dark p-2 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
