import React from 'react';
import emailjs from '@emailjs/browser';

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

    emailjs
      .send(
        'service_qvglc8o',
        'template_kbx9xlc',
        templateParams,
        'GFkOQHbPuJ9a7xxXY'
      )
      .then((response) => {
        console.log('SUCCESS!', response);
      })

      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section className="w-full h-full flex justify-center lg:justify-start items-center">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col p-4 space-y-8 items-start justify-center w-[84%]"
      >
        <div className="w-full relative h-12 div-label">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            required
            onChange={(event) => setName(event.target.value)}
            className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light border-2 border-primary rounded-lg p-2 w-full h-full"
          />
          <label
            htmlFor="name"
            className="label-label dark:bg-background-dark bg-background-light px-1"
          >
            Nome
          </label>
        </div>
        <div className="w-full relative h-12 div-label">
          <input
            type="text"
            id="email"
            name="email"
            placeholder=" "
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
          <textarea
            id="message"
            name="message"
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
