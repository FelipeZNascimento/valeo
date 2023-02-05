import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from '../Home.module.scss';
import informacoes from '../assets/informacoes.jpg';
import classNames from 'classnames';

const Informacoes = () => {
  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  const infoClass = classNames(styles.info, {
    [styles.infoMobile]: isMobile
  });

  return (
    <>
      <img alt="Informações" className={sectionTitleClass} src={informacoes} />
      <div className={infoClass}>
        <div>
          <h2>Onde</h2>
          <p>
            <a
              href="https://www.instagram.com/villaggioditrento/"
              target="_blank"
              rel="noreferrer"
            >
              Villaggio Di Trento Eventos
            </a>
            <br />
            Rua Nicola Pellanda, 7465 - Umbará, Curitiba, Paraná
          </p>
        </div>
        <div>
          <h2>Quando</h2>
          <p>16h, 25/03/2023</p>
        </div>
        <div>
          <h2>Traje</h2>
          <p>
            Livre, com recomendação de passeio completo para o início do evento.
            <br />
            Como a cerimônia será feita sobre a grama, <b>evitar salto fino</b>.
            Para o baile, a presença do bom e velho chinelo está liberadíssimo!
          </p>
        </div>
      </div>
      <div className={infoClass}>
        <div>
          <h2>Transporte</h2>
          <p>
            Para os interessados, é possível contratar uma van para buscá-los na
            ida e trazê-los na volta.
            <br />
            MJG Transportes (Marcos): 41 99964-6436 ou 41 3272-0363
          </p>
        </div>
        <div>
          <h2>Hospedagem - Intercity</h2>
          <p>
            Por{' '}
            <a
              href="https://www.intercityhoteis.com.br/hotel-curitiba/hotel-intercity-curitiba-centro-civico/24/#hotel"
              target="_blank"
              rel="noreferrer"
            >
              esse link
            </a>{' '}
            é possível reservar um quarto no Hotel Intercity com desconto usando
            o cupom VALEO.
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.038297466659!2d-49.2749047!3d-25.5879782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa27410d01320cd53!2sVillaggio%20Di%20Trento%20Eventos!5e0!3m2!1spt-PT!2spt!4v1673807917633!5m2!1spt-PT!2spt"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Villaggio Di Trento Eventos"
      ></iframe>
    </>
  );
};

export default Informacoes;
