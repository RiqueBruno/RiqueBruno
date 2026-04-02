import LinkMenu from "../../components/LinkMenu/LinkMenu";
import Skill, { TechName } from "../../components/Skill/Skill";

export default function Skills() {
  const arrSkills: TechName[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "CSS",
    "Tailwind",
    "HTML5",
    "Git",
    "Github",
    "Figma",
    "Node",
    "Java",
    "Vite",
    "Postman",
    "Redux",
    "SpringBoot",
  ];

  const arrSkillsUsed: TechName[] = [
    "Photoshop",
    "Illustrator",
    "Nextjs",
    "Docker",
    "SASS",
    "Insomnia",
    "MySQL",
  ];

  return (
    <section className="h-screen w-full md:pb-24 relative dark:text-text-dark text-text-light flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute h-full w-full inset-0 border-x-2 border-primary rounded-lg z-[0]"
        id="skills"
      />
      <div className="z-[500] flex flex-col justify-center items-center space-y-2 mb-4">
        <LinkMenu text="Skills" emote="🧐" id="" />
        <h2 className="text-2xl lg:text-3xl font-bold">Minhas Tecnologias</h2>
      </div>

      <div
        className="
        z-[500]
        w-[90%] lg:w-[70%] max-w-6xl
        h-auto max-h-[85%]             
        py-6 px-4
        flex flex-col justify-center items-center
        rounded-xl lg:border-2 lg:border-primary-light
        space-y-4 lg:shadow-custom-magenta
        dark:bg-background-dark bg-background-light
        overflow-hidden
      "
      >
        <section className="flex flex-col items-center justify-center w-full space-y-3">
          <h3 className="text-lg opacity-90 font-semibold">
            Tecnologias que mais uso:
          </h3>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
            <ul className="flex items-center justify-center [&_li]:mx-8 animate-infiniteScroll2 group-hover:[animation-play-state:paused]">
              {arrSkills.map((skill) => (
                <li
                  key={skill}
                  className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
                >
                  <Skill name={skill} />
                  <p className="font-medium mt-1">{skill}</p>
                </li>
              ))}
            </ul>

            <ul
              className="flex items-center justify-center [&_li]:mx-8 animate-infiniteScroll2 group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {arrSkills.map((skill) => (
                <li
                  key={`${skill}-clone`}
                  className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
                >
                  <Skill name={skill} />
                  <p className="font-medium mt-1">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="w-[80%] border-b-2 border-primary opacity-30" />

        <section className="flex flex-col items-center justify-center w-full space-y-3">
          <h3 className="text-lg opacity-90 font-semibold">
            Tecnologias que já usei:
          </h3>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
            <ul className="flex items-center justify-center [&_li]:mx-8 animate-infiniteScroll group-hover:[animation-play-state:paused]">
              {arrSkillsUsed.map((skill) => (
                <li
                  key={skill}
                  className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
                >
                  <Skill name={skill} />
                  <p className="font-medium mt-1">{skill}</p>
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center [&_li]:mx-8 animate-infiniteScroll group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {arrSkillsUsed.map((skill) => (
                <li
                  key={`${skill}-clone`}
                  className="dark:opacity-70 p-2 rounded-md opacity-90 text-xs md:text-sm hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col dark:text-text-dark text-text-light gap-1"
                >
                  <Skill name={skill} />
                  <p className="font-medium mt-1">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
