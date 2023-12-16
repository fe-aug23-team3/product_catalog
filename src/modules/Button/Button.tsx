import React from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
  callback: () => void;
  isActive?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  callback,
  isActive,
}) => {
  return (
    <button
      type="button"
      className={`${style.Button} ${isActive && style.Button__active}`}
      onClick={callback}
    >
      {text}
    </button>
  );
};
