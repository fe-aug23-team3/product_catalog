import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './backBtn.module.scss';
import { ReactComponent as ChevronLeft } from '../../icons/ChevronLeft.svg';

export const BackBtn: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" className={styles.linkBack} onClick={goBack}>
      <ChevronLeft className={styles.ChevronLeft} />
      <span className={styles.backBtn}> Back</span>
    </button>
  );
};
