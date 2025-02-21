import Link from 'next/link';
import { FC } from 'react';

interface AnimatedButtonProps {
  href?: string;
  label: string;
  customClass?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  isScrolled?: boolean;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  href,
  label,
  customClass = '',
  onClick,
  icon,
  isScrolled,
}) => {
  const buttonClasses = `
    btn transition-all duration-300 flex items-center justify-center border-2 rounded-full overflow-hidden relative
    ${isScrolled === undefined ? 'default-blue' : isScrolled ? 'scrolled' : 'default'}
  `.trim();

  const buttonContent = (
    <button className={`${buttonClasses} ${customClass}`} onClick={onClick}>
      <span>{label}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default AnimatedButton;
