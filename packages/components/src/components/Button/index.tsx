import React, { FC, MouseEvent } from "react";
import classNames from "classnames";

interface IButton {
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<IButton> = ({
  children,
  disabled = false,
  onClick,
  className,
}) => {
  const buttonClasses = classNames({
    btn: true,
  });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
