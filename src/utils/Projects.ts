import { TechName } from "../components/Skill/Skill";
import basicShopMockup from "../assets/mockup/basicShopMockUp.webp";
import recipesAppMockup from "../assets/mockup/recipeAppMockUp.webp";
import ttunesMockup from "../assets/mockup/TTunoAppMockUp.webp";
import wexpensesMockup from "../assets/mockup/WEAppMockUp.webp";
import triviaChallengerMockup from "../assets/mockup/triviaAppMockUp.webp";
import awzMockUp from "../assets/mockup/awzMockUp.webp";

export type Project = {
  id: number;
  title: string;
  description: string;
  skills: TechName[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
  imagePreview: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Site Academia Waleska Zanyor",
    description:
      "Site institucional para a academia de dança Waleska Zanyor, onde os usuários podem conhecer os serviços oferecidos, ver fotos e entrar em contato.",
    skills: ["React", "TypeScript", "Tailwind", "Nextjs", "Figma"],
    deployLink: "https://acad-w-z.vercel.app/",
    codeLink: "https://github.com/RiqueBruno/acad-w-z",
    designLink:
      "https://www.figma.com/design/At9LtzRMUhuhg3CUnMNRBG/AWZ?node-id=0-1&t=jXOewrrfWE1Gaqpz-1",
    image: awzMockUp,
    imagePreview: awzMockUp,
  },
  {
    id: 2,
    title: "Recipes App",
    description:
      "Um aplicativo de receitas. Foi desenvolvio em grupo, durante o curso na Trybe. Com uma interface moderna e responsiva, o usuário pode acompanhar suas receitas favoritas, marcar andamento e salvar nos favoritos.",
    skills: ["React", "CSS", "Figma"],
    deployLink: "https://recipes-app-group-1.surge.sh/",
    codeLink:
      "https://github.com/geovannaotoni/trybe-project-recipes-app?tab=readme-ov-file",
    designLink:
      "https://www.figma.com/design/bYMrChGsGyTjMadfTiYcwU/cook-yourself?node-id=0-1&node-type=canvas&t=d6jDxZBIVagBfkBa-0",
    image: recipesAppMockup,
    imagePreview: recipesAppMockup,
  },
  {
    id: 3,
    title: "TTunes",
    description:
      "Aplicativo de músicas, onde o usuário pode fazer login, pesquisar, ouvir prévias de músicas e favoritar as que mais gostar.",
    skills: ["React", "CSS", "JavaScript", "Figma"],
    deployLink: "https://project-t-tunes.vercel.app/",
    codeLink: "https://github.com/RiqueBruno/projectTTunes",
    designLink:
      "https://www.figma.com/design/PNE3HkWzdo3t0f6fEpFah3/TTunes?t=lo4qU3a9iNeUN2j0-0",
    image: ttunesMockup,
    imagePreview: ttunesMockup,
  },
  {
    id: 4,
    title: "WExpenses",
    description:
      "Aplicativo de controle de despesas, onde o usuário pode adicionar, editar e excluir despesas, além de visualizar as despesas totais. O projeto foi desenvolvido durante o curso da Trybe.",
    skills: ["React", "CSS", "Redux", "Figma"],
    deployLink: "https://wexpenses.vercel.app/",
    codeLink: "https://github.com/RiqueBruno/WExpenses",
    designLink:
      "https://www.figma.com/design/ZhABetebtQ17jdpxrl3HG1/WExpenses?t=lo4qU3a9iNeUN2j0-0",
    image: wexpensesMockup,
    imagePreview: wexpensesMockup,
  },
  {
    id: 5,
    title: "Trivia Challenger",
    description:
      "Jogo de perguntas e respostas, onde o usuário pode responder perguntas de múltipla escolha. O projeto foi desenvolvido durante o curso da Trybe.",
    skills: ["React", "CSS", "Redux", "Figma"],
    deployLink: "https://trivia-challenger.vercel.app/",
    codeLink: "https://github.com/RiqueBruno/trivia-challenger",
    designLink: "",
    image: triviaChallengerMockup,
    imagePreview: triviaChallengerMockup,
  },
];

export default projects;
