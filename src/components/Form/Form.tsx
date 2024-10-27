import React from 'react';

export default function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });
    console.log('chegou antes do data');
    const data = await response.json();
    console.log('chegou depois do data');

    alert(data.message);
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
