import React, { useState } from 'react';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { Modal } from '@omegafox/components';

import styles from '../App.module.scss';

// Assets
import galeria from '../assets/galeria.jpg';
import foto02 from '../assets/foto02.jpg';
import foto03 from '../assets/foto03.jpg';
import foto04 from '../assets/foto04.jpg';

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
    { id: 0, alt: 'Foto 01 - Val e Leo', url: foto02 },
    { id: 1, alt: 'Foto 02 - Val e Leo', url: foto03 },
    { id: 2, alt: 'Foto 03 - Val e Leo', url: foto04 },
    {
      id: 3,
      alt: 'Foto 04 - Val e Leo',
      url: 'https://images.adsttc.com/media/images/5b08/b87c/f197/ccb5/4900/00bd/medium_jpg/The_S_02_filter_edit2_06.jpg?1527298139'
    },
    {
      id: 4,
      alt: 'Foto 04 - Val e Leo',
      url: 'https://images.adsttc.com/media/images/5b08/b87c/f197/ccb5/4900/00bd/medium_jpg/The_S_02_filter_edit2_06.jpg?1527298139'
    },
    {
      id: 5,
      alt: 'Foto 04 - Val e Leo',
      url: 'https://images.adsttc.com/media/images/5b08/b87c/f197/ccb5/4900/00bd/medium_jpg/The_S_02_filter_edit2_06.jpg?1527298139'
    }
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
            className={styles.modalImage}
            onClick={() => handleImageClick(foto)}
            alt={foto.alt}
            src={foto.url}
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
