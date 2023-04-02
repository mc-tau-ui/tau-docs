import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flutter-like Syntax',
    description: (
      <>
        Tau uses a syntax similar to that of Flutter, making it 
        easy for developers familiar with Flutter to get started with Tau
      </>
    ),
  },
  {
    title: 'Extensible',
    description: (
      <>
        Tau is designed to be extensible, allowing developers to add their 
        own custom UI elements and widgets to the library to fit their needs.
      </>
    ),
  },
  {
    title: 'Easy To Use',
    description: (
      <>
        Tau is designed to be easy to use. It allowed developers to easily write readable and maintainable
        code in contrast to the standard Minecraft GUI workflow
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
