import React, { useState } from "react";
import styles from "./App.module.scss";
import { Navbar, TNavbarButton, Sidenav } from "@omegafox/components";
import { isMobile } from "react-device-detect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [selectedMenuId, setSelectedMenuId] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarButtons = [
    {
      id: 0,
      text: "Val & Leo",
      url: "#valeo",
    },
    {
      id: 1,
      text: "Local",
      url: "#local",
    },
    {
      id: 2,
      text: "Galeria",
      url: "#galeria",
    },
    {
      id: 3,
      text: "Confirmar Presença",
      url: "#convite",
    },
    {
      id: 4,
      text: "Presentes",
      url: "#presentes",
    },
  ];

  const handleNavbarClick = (button: TNavbarButton) => {
    setSelectedMenuId(button.id);
    console.log(button.url);
  };

  const renderMobileMenu = () => {
    return (
      <>
        <Navbar
          navbarLeft={[
            {
              id: 0,
              text: "",
              url: "",
              renderingFunction: () => (
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              ),
            },
          ]}
          platform="copa"
          selectedId={0}
          onClick={handleNavbarClick}
        />
        <Sidenav
          isOpen={isMobileMenuOpen}
          selectedId={selectedMenuId}
          sidenavButtons={[]}
          onClick={() => console.log("click")}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </>
    );
  };

  const renderBrowserMenu = () => {
    return (
      <Navbar
        navbarLeft={navbarButtons}
        platform="copa"
        selectedId={selectedMenuId}
        onClick={handleNavbarClick}
      />
    );
  };

  return (
    <div className={styles.App}>
      <header>
        {isMobile && renderMobileMenu()}
        {!isMobile && renderBrowserMenu()}
      </header>
      <section id="home">
        <h2>Val & Leo</h2>
      </section>
      <section id="local">
        <h2>Local</h2>
        <h3>Villaggio Di Trento Eventos</h3>
        <h4>Rua Nicola Pellanda, 7465 - Umbará, Curitiba, Paraná</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.038297466659!2d-49.2749047!3d-25.5879782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa27410d01320cd53!2sVillaggio%20Di%20Trento%20Eventos!5e0!3m2!1spt-PT!2spt!4v1673807917633!5m2!1spt-PT!2spt"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Villaggio Di Trento Eventos"
        ></iframe>
      </section>
      <section id="galeria">
        <h2>Galeria</h2>
      </section>
      <section id="convite">
        <h2>Convite</h2>
      </section>
      <section id="presentes">
        <h2>Presentes</h2>
      </section>
    </div>
  );
};

export default App;
