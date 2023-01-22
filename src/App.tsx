import React, { useState } from 'react';
import { Navbar, TNavbarButton, Sidenav } from '@omegafox/components';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.scss';

// Assets
// import valeo from './assets/valeo.jpg';
import convite from './assets/convite.jpg';
import presentes from './assets/presentes.jpg';
// import foto01 from './assets/foto01.jpg';
import logo from './assets/logo.png';
import main from './assets/main.jpg';
import bg from './assets/bg.jpg';

// Sections
import Local from './sections/Local';
import Galeria from './sections/Galeria';

const App = () => {
  const [selectedMenuId, setSelectedMenuId] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarButtons = [
    {
      id: 1,
      text: 'Local',
      url: 'local'
    },
    {
      id: 2,
      text: 'Galeria',
      url: 'galeria'
    },
    {
      id: 0,
      text: '',
      url: 'valeo',
      renderingFunction: () => (
        <img className={styles.logo} alt="Logo" src={logo} />
      )
    },
    {
      id: 3,
      text: 'Confirmar Presença',
      url: 'convite'
    },
    {
      id: 4,
      text: 'Presentes',
      url: 'presentes'
    }
  ];

  const mainImageContainerClass = classNames({
    [styles.mainImageContainerMobile]: isMobile,
    [styles.mainImageContainerDesktop]: !isMobile
  });

  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  const handleNavbarClick = (button: TNavbarButton) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    setSelectedMenuId(button.id);
    const element = document.getElementById(button.url);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    console.log(button.url);
  };

  const renderMobileMenu = () => {
    return (
      <>
        <Navbar
          isSlim
          navbarLeft={[
            {
              id: 0,
              text: '',
              url: '',
              renderingFunction: () => (
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              )
            }
          ]}
          theme="valeo"
          selectedId={0}
          onClick={() => setIsMobileMenuOpen(true)}
        />
        <Sidenav
          isOpen={isMobileMenuOpen}
          selectedId={selectedMenuId}
          sidenavButtons={navbarButtons}
          theme="valeo"
          onClick={handleNavbarClick}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </>
    );
  };

  const renderBrowserMenu = () => {
    return (
      <Navbar
        isSticky
        sameSizeButtons
        navbarLeft={navbarButtons}
        theme="valeo"
        selectedId={selectedMenuId}
        onClick={handleNavbarClick}
      />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          {isMobile && renderMobileMenu()}
          {!isMobile && renderBrowserMenu()}
        </header>
        <div className={mainImageContainerClass}>
          <img
            id="valeo"
            alt="Foto 01 - Val e Leo"
            className={styles.mainImage}
            src={main}
          />
        </div>
        <section id="local">
          <Local />
        </section>
        <section id="galeria">
          <Galeria />
        </section>
        <section id="convite">
          <img alt="Convite" className={sectionTitleClass} src={convite} />
        </section>
        <section id="presentes">
          <img alt="Presentes" className={sectionTitleClass} src={presentes} />
        </section>
      </div>
    </div>
  );
};

export default App;
