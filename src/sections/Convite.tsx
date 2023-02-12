import React, { useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

import styles from './Convite.module.scss';
import classNames from 'classnames';
import convite from '../assets/convite.jpg';
import { Button } from '@omegafox/components';

const Convite = () => {
  const [invitationCode, setInvitationCode] = useState('');
  const navigate = useNavigate();

  const digit1 = useRef<HTMLInputElement>(null);
  const digit2 = useRef<HTMLInputElement>(null);
  const digit3 = useRef<HTMLInputElement>(null);
  const digit4 = useRef<HTMLInputElement>(null);
  const digit5 = useRef<HTMLInputElement>(null);

  const sectionTitleClass = classNames({
    [styles.sectionTitleMobile]: isMobile,
    [styles.sectionTitleDesktop]: !isMobile
  });

  const textFieldContainerClass = classNames(styles.textFieldContainer, {
    [styles.textFieldContainerMobile]: isMobile,
    [styles.textFieldContainerDesktop]: !isMobile
  });

  const handleConfirm = () => {
    navigate(`/c/${invitationCode}`);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { currentTarget } = event;

    const previousSibling = currentTarget.previousElementSibling;
    const hasPreviousSibling =
      previousSibling &&
      currentTarget.previousElementSibling.nodeName === 'INPUT';

    const nextSibling = currentTarget.nextElementSibling;
    const hasNextSibling =
      nextSibling && currentTarget.nextElementSibling.nodeName === 'INPUT';

    if (event.code === 'Enter' && invitationCode.length === 5) {
      handleConfirm();
    } else if (event.code === 'ArrowLeft') {
      if (hasPreviousSibling) {
        (previousSibling as HTMLElement).focus();
      }
    } else if (event.code === 'ArrowRight') {
      if (hasNextSibling) {
        (nextSibling as HTMLElement).focus();
      }
    } else if (event.code === 'Backspace' && hasPreviousSibling) {
      (previousSibling as HTMLElement).focus();
    } else if (currentTarget.value !== '' && hasNextSibling) {
      (nextSibling as HTMLElement).focus();
    }

    if (
      digit1.current?.value &&
      digit2.current?.value &&
      digit3.current?.value &&
      digit4.current?.value &&
      digit5.current?.value
    ) {
      setInvitationCode(
        digit1.current.value +
          digit2.current.value +
          digit3.current.value +
          digit4.current.value +
          digit5.current.value
      );
    } else {
      setInvitationCode('');
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteContent = e.clipboardData.getData('Text').replace(/\s/g, '');
    if (pasteContent.length > 0 && digit1.current) {
      digit1.current.value = pasteContent[0];
    }
    if (pasteContent.length > 1 && digit2.current) {
      digit2.current.value = pasteContent[1];
    }
    if (pasteContent.length > 2 && digit3.current) {
      digit3.current.value = pasteContent[2];
    }
    if (pasteContent.length > 3 && digit4.current) {
      digit4.current.value = pasteContent[3];
    }
    if (pasteContent.length > 4 && digit5.current) {
      digit5.current.value = pasteContent[4];
      digit5.current.focus();
    }

    setInvitationCode(pasteContent.slice(0, 5));
  };

  return (
    <>
      <img alt="Convite" className={sectionTitleClass} src={convite} />
      <h1 style={{ textAlign: 'center' }}>
        Favor confirmar presença até 01/03.
      </h1>
      <div className={textFieldContainerClass} onPaste={handlePaste}>
        <input type="text" maxLength={1} ref={digit1} onKeyUp={handleKeyUp} />
        <input type="text" maxLength={1} ref={digit2} onKeyUp={handleKeyUp} />
        <input type="text" maxLength={1} ref={digit3} onKeyUp={handleKeyUp} />
        <input type="text" maxLength={1} ref={digit4} onKeyUp={handleKeyUp} />
        <input type="text" maxLength={1} ref={digit5} onKeyUp={handleKeyUp} />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          isShadowed
          isDisabled={invitationCode.length !== 5}
          variant="white"
          onClick={handleConfirm}
        >
          Buscar
        </Button>
      </div>
    </>
  );
};

export default Convite;
