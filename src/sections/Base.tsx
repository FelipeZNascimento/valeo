import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Navbar, TNavbarButton, Sidenav } from '@omegafox/components';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../Home.module.scss';
import logo from '../assets/logo.png';

interface Props {
  children: React.ReactNode;
}

const Base = ({ children }: Props) => {
  const [selectedMenuId, setSelectedMenuId] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToAnchor = (url: string) => {
    const element = document.getElementById(url);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavbarClick = (button: TNavbarButton) => {
    navigate(`/#${button.url}`);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    setSelectedMenuId(button.id);
    scrollToAnchor(button.url);
  };

  const navbarButtons = [
    {
      id: 1,
      text: 'Informações',
      url: 'informacoes'
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
        {children}
      </div>
    </div>
  );
};

export default Base;
