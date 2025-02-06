import Link from 'next/link';
import { FC } from 'react';

interface AnimatedButtonProps {
  href?: string;
  label: string;
  customClass?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // Icon prop added
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ href, label, customClass = '', onClick, icon }) => {
  const buttonContent = (
    <button
      className={`btn hover-filled-slide-left ${customClass} !p-auto !border-2 rounded-full flex items-center justify-center`.trim()}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && <span className="ml-2">{icon}</span>} {/* Add left margin to the icon */}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default AnimatedButton;
