import React, { ButtonHTMLAttributes, ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  href?: string;
  children?: ReactNode;
  px?: string;
	white?: boolean;
	onClik?: () => void;
}

const Button = ({ className, href, onClick, children, px, white } : ButtonProps) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
