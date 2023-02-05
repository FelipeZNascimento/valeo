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

  const imgClass = classNames({
    [styles.imgMobile]: isMobile,
    [styles.imgDesktop]: !isMobile
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
        <p className={styles.presentesInfo}>
          Amigos e familiares, gastamos muito com a festa! <br />
          Caso queiram nos ajudar a iniciar a vida de casados, deixamos abaixo
          duas opções: PIX e Lista de Presentes. Ao clicar no link do iCasei,
          você será encaminhado à lista onde poderá efetuar o pagamento como
          preferir - à vista, a prazo e até fiado.
        </p>
        <div className={styles.giftsContainer}>
          <div className={styles.options}>
            <img className={imgClass} alt="Pix QR Code" src={pix} />
            <p>
              Leonardo Francisco Dorigam
              <br />
              CPF 052.249.039-55
            </p>
          </div>
          <div className={styles.options}>
            <a
              href="https://sites.icasei.com.br/leonardoevaleria/pages/28729058"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={imgClass}
                alt="Lista de Presentes iCasei"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Novo_Logotipo_iCasei.png/1200px-Novo_Logotipo_iCasei.png"
              />
            </a>
            <p>Lista de Presentes iCasei</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
