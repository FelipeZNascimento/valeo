import React, { useState } from 'react';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { Modal } from '@omegafox/components';

import styles from './Galeria.module.scss';

// Assets
import galeria from '../assets/galeria.jpg';
import foto01 from '../assets/galeria/01.jpg';
import foto02 from '../assets/galeria/02.jpg';
import foto03 from '../assets/galeria/03.jpg';
import foto04 from '../assets/galeria/04.jpg';
import foto05 from '../assets/galeria/05.jpg';
import foto06 from '../assets/galeria/06.jpg';
import foto07 from '../assets/galeria/07.jpg';
import foto08 from '../assets/galeria/08.jpg';
import foto09 from '../assets/galeria/09.jpg';
import foto10 from '../assets/galeria/10.jpg';
import foto11 from '../assets/galeria/11.jpg';
import foto12 from '../assets/galeria/12.jpg';
import foto13 from '../assets/galeria/13.jpg';

type TGalleryPhotos = {
  id: number;
  url: string;
  alt: string;
};

const Local = () => {
  const [selectedImage, setSelectedImage] = useState<null | TGalleryPhotos>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryPhotos = [
    { id: 0, alt: 'Foto 01 - Val e Leo', url: foto01 },
    { id: 2, alt: 'Foto 02 - Val e Leo', url: foto02 },
    { id: 3, alt: 'Foto 03 - Val e Leo', url: foto03 },
    { id: 1, alt: 'Foto 04 - Val e Leo', url: foto04 },
    { id: 4, alt: 'Foto 05 - Val e Leo', url: foto05 },
    { id: 5, alt: 'Foto 06 - Val e Leo', url: foto06 },
    { id: 6, alt: 'Foto 07 - Val e Leo', url: foto07 },
    { id: 7, alt: 'Foto 08 - Val e Leo', url: foto08 },
    { id: 8, alt: 'Foto 09 - Val e Leo', url: foto09 },
    { id: 9, alt: 'Foto 10 - Val e Leo', url: foto10 },
    { id: 10, alt: 'Foto 11 - Val e Leo', url: foto11 },
    { id: 11, alt: 'Foto 12 - Val e Leo', url: foto12 },
    { id: 12, alt: 'Foto 13 - Val e Leo', url: foto13 }
  ];

  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  const handleImageClick = (galleryPhoto: TGalleryPhotos) => {
    setSelectedImage(galleryPhoto);
    setIsModalOpen(true);
  };

  const handleClickPrevious = () => {
    if (selectedImage) {
      const previousPhoto = galleryPhotos.find(
        (photo) => photo.id === selectedImage.id - 1
      );

      if (previousPhoto) {
        setSelectedImage(previousPhoto);
      } else {
        setSelectedImage(galleryPhotos[galleryPhotos.length - 1]);
      }
    }
  };

  const handleClickNext = () => {
    if (selectedImage) {
      const nextPhoto = galleryPhotos.find(
        (photo) => photo.id > selectedImage.id
      );

      if (nextPhoto) {
        setSelectedImage(nextPhoto);
      } else {
        setSelectedImage(galleryPhotos[0]);
      }
    }
  };

  return (
    <>
      <img alt="Galeria" className={sectionTitleClass} src={galeria} />
      <div className={styles.galeria}>
        {galleryPhotos.map((foto) => (
          <img
            alt={foto.alt}
            className={styles.modalImage}
            loading="lazy"
            src={foto.url}
            onClick={() => handleImageClick(foto)}
          />
        ))}
      </div>
      <Modal
        size="big"
        isOpen={isModalOpen}
        isPaddedContent={!isMobile}
        isRounded={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onClose={() => setIsModalOpen(false)}
      >
        {selectedImage && (
          <img
            className={styles.modalImage}
            alt={selectedImage.alt}
            src={selectedImage.url}
          />
        )}
      </Modal>
    </>
  );
};

export default Local;
