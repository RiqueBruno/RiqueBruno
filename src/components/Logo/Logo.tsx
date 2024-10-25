import logoDark from '../../assets/logo/dark.png';
import logoLight from '../../assets/logo/light.png';

type LogoProps = {
  darkMode: boolean;
  className: string;
};

export default function Logo({ darkMode, className }: LogoProps) {
  return (
    <img
      src={darkMode ? logoDark : logoLight}
      alt="Logo portfólio Bruno Henrique"
      className={className}
    />
  );
}
