import LinkMenu from '../LinkMenu/LinkMenu';
import Skill, { TechName } from '../Skill/Skill';

export default function Skills() {
  const arrSkills: TechName[] = [
    'JavaScript', 'TypeScript', 'React', 'CSS', 'Tailwind',
    'HTML5', 'Git', 'Github', 'Figma',
    'Photoshop', 'Illustrator', 'Node', 'Nextjs', 'Insomnia',
    'Docker', 'Vite', 'Postman', 'Redux', 'SASS',
  ];

  return (
    <section className="h-screen w-full relative dark:text-text-dark text-text-light flex flex-col items-center justify-center overflow-hidden">
      <meta
        name="description"
        content="Seção com as tecnologias que conheço/uso."
      />
      <div
        className="absolute h-full w-full inset-0 border-x-2 border-primary rounded-lg z-[0]"
        id="skills"
      />
      <div className="absolute h-full w-full inset-0 z-[0] text-[20rem] lg:text-[24rem] text-center opacity-10 hidden lg:flex items-center justify-center pointer-events-none">
        <div className="animate-sliderText">MINHAS</div>
        <div className="animate-sliderTextReverse">TECNOLOGIAS</div>
      </div>
      <div className="z-[500] flex flex-col justify-center items-center space-y-2 mb-4">
        <LinkMenu text="Skills" emote="🧐" id="" />
        <h2 className="text-2xl lg:text-3xl font-bold">Minhas Tecnologias</h2>
      </div>
      <div className="
        z-[500]
        w-[90%] lg:w-[70%] max-w-6xl
        h-auto max-h-[85%]             
        py-6 px-4
        flex flex-col justify-center items-center
        rounded-xl lg:border-2 lg:border-primary-light
        space-y-4 lg:shadow-custom-magenta
        dark:bg-background-dark bg-background-light
      ">
        <section className="flex flex-col items-center justify-center w-full space-y-3">
          <h3 className="text-lg opacity-90 font-semibold">Tecnologias que mais uso:</h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-4 w-full text-center justify-items-center">
            {arrSkills.slice(0, 9).map((skill) => (
              <li
                key={skill}
                className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
              >
                <Skill name={skill} />
                <p className="font-medium mt-1">{skill}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="w-[80%] border-b-2 border-primary opacity-30" />
        <section className="flex flex-col items-center justify-center w-full space-y-3">
          <h3 className="text-lg opacity-90 font-semibold">Tecnologias que já usei:</h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-4 w-full text-center justify-items-center">
            {arrSkills.slice(9).map((skill) => (
              <li
                key={skill}
                className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
              >
                <Skill name={skill} />
                <p className="font-medium mt-1">{skill}</p>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </section>
  );
}