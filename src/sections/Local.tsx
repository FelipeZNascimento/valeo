import React from 'react';
// import { InstagramEmbed } from 'react-social-media-embed';
import { isMobile } from 'react-device-detect';

import styles from '../App.module.scss';
import local from '../assets/local.jpg';
import classNames from 'classnames';

const Local = () => {
  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  return (
    <>
      <img alt="Local" className={sectionTitleClass} src={local} />
      <h3>Villaggio Di Trento Eventos</h3>
      <h5>Rua Nicola Pellanda, 7465 - Umbará, Curitiba, Paraná</h5>
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
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CgNPm99vLHa/"
          width={328}
        />
      </div> */}
    </>
  );
};

export default Local;
