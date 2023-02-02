import React from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import styles from './Home.module.scss';

// Assets
import presentes from './assets/presentes.jpg';
import main from './assets/main.jpg';
import pix from './assets/pix_qrcode.jpg';

// Sections
import Informacoes from './sections/Informacoes';
import Galeria from './sections/Galeria';
import Convite from './sections/Convite';

const Home = () => {
  const mainImageContainerClass = classNames({
    [styles.mainImageContainerMobile]: isMobile,
    [styles.mainImageContainerDesktop]: !isMobile
  });

  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  return (
    <>
      <div className={mainImageContainerClass}>
        <img
          id="valeo"
          alt="Foto 01 - Val e Leo"
          className={styles.mainImage}
          src={main}
        />
      </div>
      <section id="informacoes">
        <Informacoes />
      </section>
      <section id="galeria">
        <Galeria />
      </section>
      <section id="convite">
        <Convite />
      </section>
      <section id="presentes">
        <img alt="Presentes" className={sectionTitleClass} src={presentes} />
        <div className={styles.giftsContainer}>
          <div className={styles.options}>
            <img alt="Pix QR Code" src={pix} />
          </div>
          <div className={styles.options}>
            <a
              href="https://sites.icasei.com.br/leonardoevaleria/pages/28729058"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Lista de Presentes iCasei"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Novo_Logotipo_iCasei.png/1200px-Novo_Logotipo_iCasei.png"
              />
              Lista de Presentes iCasei
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
