import React from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
  callback: () => void;
}

export const Button: React.FC<Props> = ({ text, callback }) => {
  return (
    <button type="button" className={style.Button} onClick={callback}>
      {text}
    </button>
  );
};
