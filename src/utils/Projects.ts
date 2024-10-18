import { TechName } from '../components/Skill/Skill';
import basicShopMockup from '../assets/mockup/basicShopMockUp.png';
import recipesAppMockup from '../assets/mockup/recipeAppMockUp.png';

type Project = {
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
    title: 'Basic Shop',
    description:
      'Um e-commerce inspirado no site do Mercado Livre. Utilizando a API do Mercado Livre, o projeto permite a busca de produtos, categorização, adição de itens aos favoritos e ao carrinho. Com uma interface moderna e responsiva, oferece uma experiência de compra eficiente e intuitiva.',
    skills: ['React', 'TypeScript', 'Tailwind', 'Figma'],
    deployLink: 'https://basic-shop-nine.vercel.app/',
    codeLink: 'https://github.com/RiqueBruno/basicShop',
    designLink:
      'https://www.figma.com/design/0QmmjgyPvPlP8dJS48Zr0X/BasicShop?node-id=0-1',
    image: basicShopMockup,
    imagePreview: basicShopMockup,
  },
  {
    id: 2,
    title: 'Recipes App',
    description:
      'Um aplicativo de receitas. Foi desenvolvio em grupo, durante o curso na Trybe. Com uma interface moderna e responsiva, o usuário pode acompanhar suas receitas favoritas, marcar andamento e salvar nos favoritos.',
    skills: ['React', 'CSS', 'Figma'],
    deployLink: 'https://recipes-app-group-1.surge.sh/',
    codeLink:
      'https://github.com/geovannaotoni/trybe-project-recipes-app?tab=readme-ov-file',
    designLink:
      'https://www.figma.com/design/bYMrChGsGyTjMadfTiYcwU/cook-yourself?node-id=0-1&node-type=canvas&t=d6jDxZBIVagBfkBa-0',
    image: recipesAppMockup,
    imagePreview: recipesAppMockup,
  },
];

export default projects;
