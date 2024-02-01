import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simplifica tu Vida con Nuestros Manuales',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Desde requisitos esenciales hasta 
        configuraciones avanzadas, te ofrecemos soluciones 
        prácticas y útiles para optimizar tu entorno.
      </>
    ),
  },
  {
    title: 'Desata el Poder de Valet y Nginx',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aprovecha al máximo tu desarrollo con Valet y Nginx. 
        Descubre la libertad de trabajar en cualquier lugar 
        del sistema y desata tu creatividad.
      </>
    ),
  },
  {
    title: 'Inicia tu Proyecto con Éxito',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Completa tu proyecto de manera eficiente con nuestras 
        instrucciones paso a paso. No pierdas más tiempo, comienza a construir tu 
        aplicación hoy mismo.
      
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
