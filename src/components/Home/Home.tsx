import SliderHome from '../SliderHome/SliderHome';
import BgHome from '../BgHome/BgHome';
import AvatarHome from '../AvatarHome/AvatarHome';
import LinkMenu from '../LinkMenu/LinkMenu';
import brunoImage from '../../assets/images/foto.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';

type HomeProps = {
  darkMode: boolean;
};

export default function Home({ darkMode }: HomeProps) {
  return (
    <section className="dark:text-text-dark h-screen lg:h-[calc(100vh)] md:h-[calc(100vh-8rem)] md:pt-20 lg:pt-24 w-full relative overflow-hidden lg:overflow-auto">
      <div id="home" className="absolute top-0 h-full w-full z-[0]" />
      <div className="lg:grid lg:grid-cols-2 w-full h-full z-40 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center h-full w-full items-center space-y-4 dark:text-text-dark text-text-light">
          <div className="lg:hidden rounded-full overflow-hidden h-52 w-52 border-2 border-primary z-50 shadow-md">
            <img
              src={brunoImage}
              alt="Imagem de Bruno"
              className="lg:hidden w-full h-full object-cover"
            />
          </div>
          <div className="text-center lg:text-start space-y-4 z-[1000]">
            <LinkMenu text="Saudações!" emote="👋" id="" />
            <h1 className="lg:text-5xl text-3xl font-bold z-[100]">
              Bruno&nbsp;
              <br className="hidden lg:block" />
              Henrique
            </h1>
            <h2 className="lg:text-2xl text-base z-[100]">
              Front-end developer · UI designer
            </h2>
            <div className="lg:space-x-4 flex justify-around lg:justify-start lg:items-start lg:px-0 w-full px-10 space-x-2 z-[100]">
              <SocialMedia
                darkMode={darkMode}
                type="Linkedin"
                size={30}
                location="home"
                linkTo="https://www.linkedin.com/in/brunohenriquec"
              />
              <SocialMedia
                darkMode={darkMode}
                type="Github"
                size={30}
                location="home"
                linkTo="https://github.com/RiqueBruno"
              />
              <SocialMedia
                darkMode={darkMode}
                type="Whatsapp"
                size={30}
                location="home"
                linkTo="https://wa.me/5521993457722"
              />
            </div>
          </div>
        </div>

        <div className="justify-center items-center hidden lg:flex">
          <div className="h-[28rem] w-[30rem]">
            <AvatarHome darkMode={darkMode} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <SliderHome />
      </div>
      <BgHome />
    </section>
  );
}
