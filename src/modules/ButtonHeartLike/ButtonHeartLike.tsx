import React from 'react';
import style from './ButtonHeartLike.module.scss';
import { ReactComponent as Heart } from '../shared/icons/Heart.svg';

interface Props {
  isActive: boolean;
  callback: () => void;
}

export const ButtonHeartLike: React.FC<Props> = ({ isActive, callback }) => {
  const Yellow = '#f4ba47';
  const Black = '#0F0F11';
  const Transparent = 'transparent';

  return (
    <button
      type="button"
      className={style.ButtonHeartLike}
      onClick={callback}
      aria-label="disable"
    >
      <Heart
        color={isActive ? Yellow : Transparent}
        stroke={isActive ? Yellow : Black}
      />
    </button>
  );
};
