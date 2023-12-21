import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className={styles['max-w-screen-xl']}>
        <div className={styles['max-w-lg']}>
          <h3
            className={`${styles['text-indigo-600']} ${styles['font-semibold']}`}
          >
            404 Error
          </h3>
          <p
            className={`${styles['text-gray-800']} 
                        ${styles['text-4xl']} 
                        ${styles['font-semibold']}`}
          >
            Page not found
          </p>
          <p className={styles['text-gray-600']}>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div
            className={`${styles.flex} 
                        ${styles['flex-wrap']} 
                        ${styles['items-center']} 
                        ${styles['justify-center']} 
                        ${styles['gap-3']}`}
          >
            <button
              type="button"
              onClick={() => navigate('/home')}
              className={`${styles.button} ${styles['button--primary']}`}
            >
              Return to home page
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
