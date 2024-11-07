import avatar from '../../assets/images/Avatar.webp';
import TechIcon from '../Skill/Skill';
import '../../styles/Bg.css';

type AvatarHomeProps = {
  darkMode: boolean;
};

export default function AvatarHome({ darkMode }: AvatarHomeProps) {
  return (
    <div
      className={`gradient-${darkMode} w-full h-full relative lg:flex items-center justify-center rounded-full p-4 hidden`}
    >
      <div className="absolute z-30 dark:bg-transparent bg-secondary-light h-16 w-16 flex items-center justify-center rounded-md left-0 top-20">
        <TechIcon
          name="React"
          size={30}
          color={darkMode ? '#E24ACE' : '#FFFFFF'}
        />
      </div>
      <div className="absolute z-30 dark:bg-transparent bg-secondary-light h-16 w-16 flex items-center justify-center rounded-full right-0 bottom-10">
        <TechIcon
          name="Figma"
          size={30}
          color={darkMode ? '#E24ACE' : '#FFFFFF'}
        />
      </div>
      <div className="absolute z-30 dark:bg-transparent bg-secondary-light h-16 w-16 flex items-center justify-center rounded-md top-6 right-6">
        <TechIcon
          name="TypeScript"
          size={30}
          color={darkMode ? '#E24ACE' : '#FFFFFF'}
        />
      </div>
      <div className="absolute z-30 dark:bg-transparent bg-secondary-light h-16 w-16 flex items-center justify-center rounded-full left-20 bottom-16">
        <TechIcon
          name="Tailwind"
          size={30}
          color={darkMode ? '#E24ACE' : '#FFFFFF'}
        />
      </div>
      <div className="w-full h-full p-6 max-w-xs max-h-xs mx-auto z-20">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="Avatar de Bruno Henrique"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
