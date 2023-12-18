import React from 'react';
import styles from './Specs.module.scss';

export const Specs = () => {
  /// я не ебнулся, это загулшка для мапа

  const about = [
    {
      id: 0,
      header: 'And then there was Pro',
      content: `A transformative triple‑camera
  system that adds tons of capability without complexity.
  An unprecedented leap in battery life.
  And a mind‑blowing chip that doubles down on machine
  learning and pushes the boundaries of what a smartphone can do.
  Welcome to the first iPhone powerful enough to be called Pro.`,
    },

    {
      id: 1,
      header: 'And then there was Pro',
      content: `A transformative triple‑camera
system that adds tons of capability without complexity.
An unprecedented leap in battery life.
And a mind‑blowing chip that doubles down on machine
learning and pushes the boundaries of what a smartphone can do.
Welcome to the first iPhone powerful enough to be called Pro.`,
    },

    {
      id: 2,
      header: 'And then there was Pro',
      content: `A transformative triple‑camera
  system that adds tons of capability without complexity.
  An unprecedented leap in battery life.
  And a mind‑blowing chip that doubles down on machine
  learning and pushes the boundaries of what a smartphone can do.
  Welcome to the first iPhone powerful enough to be called Pro.`,
    }];

  const specs = [{
    id: 0,
    name: 'Screen',
    spec: '6.5” OLED',
  },

  {
    id: 1,
    name: 'Screen',
    spec: '6.5” OLED',
  },

  {
    id: 2,
    name: 'Screen',
    spec: '6.5” OLED',
  },

  {
    id: 3,
    name: 'Screen',
    spec: '6.5” OLED',

  },

  {
    id: 4,
    name: 'Screen',
    spec: '6.5” OLED',
  },

  {
    id: 5,
    name: 'Screen',
    spec: '6.5” OLED',

  },

  {
    id: 6,
    name: 'Screen',
    spec: '6.5” OLED',

  }];

  return (
    <div className={styles.specs_container}>
      <div className={styles.specs_about}>

        <div className={styles.specs_about_header}>
          <h2>About </h2>
        </div>
        {about.map((aboutSection) => {
          return (
            <section
              key={aboutSection.id}
              className={styles.specs_about_section}
            >
              <h3
                className={styles.specs_about_name}
              >
                {aboutSection.header}
              </h3>

              <article className={styles.specs_about_value}>
                {aboutSection.content}
              </article>
            </section>
          );
        })}
      </div>

      <div className={styles.specs_tech}>
        <div className={styles.specs_tech_header}>
          <h2>Tech specs </h2>
        </div>

        {specs.map(specsSection => (
          <section
            className={styles.specs_tech_section}
            key={specsSection.id}
          >
            <article className={styles.specs_tech_name}>
              {specsSection.name}
            </article>
            <article className={styles.specs_tech_value}>
              {specsSection.spec}
            </article>
          </section>
        ))}
      </div>
    </div>
  );
};
