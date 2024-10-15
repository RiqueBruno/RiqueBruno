type Project = {
  id: number;
  title: string;
  description: string;
  skills: TechName[];
  deployLink: string;
  codeLink: string;
  designLink: string;
  image: string;
  imagePreview?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Basic Shop',
    description:
      'Um e-commerce inspirado no site do Mercado Livre, desenvolvido com React, Tailwind CSS e TypeScript. Utilizando a API do Mercado Livre, o projeto permite a busca de produtos, categorização, adição de itens aos favoritos e ao carrinho. Com uma interface moderna e responsiva, oferece uma experiência de compra eficiente e intuitiva.',
    skills: ['React', 'TypeScript', 'Tailwind'],
    deployLink: 'https://basic-shop-nine.vercel.app/',
    codeLink: 'https://github.com/RiqueBruno/basicShop',
    designLink:
      'https://www.figma.com/design/0QmmjgyPvPlP8dJS48Zr0X/BasicShop?node-id=0-1',
    image: '../assets/mockup/basicShopMockup.png',
    imagePreview: '../assets/mockup/basicShopMockupPreview.png',
  },
];

export default projects;
