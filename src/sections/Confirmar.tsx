import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetGuestsMutation,
  useGetGuestsByCodeMutation,
  useSetGuestMutation
} from '../store/base/base';

import { Button, Loading } from '@omegafox/components';
import logo from '../assets/logo.png';
import styles from './Confirmar.module.scss';
import { TGuest } from '../store/base/types';
import classNames from 'classnames';

const Confirmar = () => {
  const [guests, setGuests] = useState<TGuest[]>([]);

  const [allGuestsTrigger, allGuestsResult] = useGetGuestsMutation();
  const [guestTrigger, guestResult] = useGetGuestsByCodeMutation();
  const [setGuestTrigger, setGuestResult] = useSetGuestMutation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (allGuestsResult.data?.result.guests) {
      setGuests(allGuestsResult.data?.result.guests);
    }
  }, [allGuestsResult.data]);

  useEffect(() => {
    if (guestResult.data?.result.guests) {
      setGuests(guestResult.data?.result.guests);
    }
  }, [guestResult.data]);

  useEffect(() => {
    if (setGuestResult.data?.result.guests) {
      setGuests(setGuestResult.data?.result.guests);
    }
  }, [setGuestResult.data]);

  useEffect(() => {
    if (params.code === 'all') {
      allGuestsTrigger();
    } else if (params.code) {
      guestTrigger({ code: params.code });
    }
  }, [params.code]);

  const guestLineClass = classNames({
    [styles.guestLineMobile]: isMobile,
    [styles.guestLineDesktop]: !isMobile
  });

  const handleCodeClick = (code: string) => {
    navigate(`/c/${code}`);
  };

  const renderAllGuests = () => {
    const returnConfirmation = (status: boolean | null) => {
      if (status === null) {
        return '';
      }

      if (status) {
        return 'SIM';
      }

      return 'NÃO';
    };
    return (
      <>
        <div className={guestLineClass}>
          <div className={styles.code}>Código</div>
          <div className={styles.name}>Nome</div>
          <div className={styles.confirmed}>Confirmado?</div>
          <div className={styles.timestamp}>Última Alteração</div>
        </div>
        {allGuestsResult.isLoading && <Loading image={logo} />}
        {allGuestsResult.data?.result.guests.map((guest) => (
          <div className={guestLineClass}>
            <div
              className={styles.code}
              onClick={() => handleCodeClick(guest.code)}
            >
              {guest.code}
            </div>
            <div className={styles.name}>{guest.name}</div>{' '}
            <div className={styles.confirmed}>
              {returnConfirmation(guest.confirmed)}
            </div>
            <div className={styles.timestamp}>
              {new Date(guest.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderGuest = () => {
    return (
      <>
        <div className={guestLineClass}>
          <div className={styles.code}>Código</div>
          <div className={styles.name}>Nome</div>
          <div className={styles.confirmed}>Confirmado?</div>
        </div>
        {(guestResult.isLoading || setGuestResult.isLoading) && (
          <Loading image={logo} />
        )}
        {!guestResult.isLoading &&
          !setGuestResult.isLoading &&
          guests.map((guest) => (
            <div className={guestLineClass}>
              <div className={styles.code}>{guest.code}</div>
              <div className={styles.name}>{guest.name}</div>
              <div className={styles.confirmed}>
                <Button
                  isShadowed
                  variant={guest.confirmed ? 'primary' : 'white'}
                  onClick={() =>
                    setGuestTrigger({
                      id: guest.id,
                      code: guest.code,
                      confirmed: true
                    })
                  }
                >
                  Sim
                </Button>
                <div className={styles.spacer} />
                <Button
                  isShadowed
                  variant={!guest.confirmed ? 'primary' : 'white'}
                  onClick={() =>
                    setGuestTrigger({
                      id: guest.id,
                      code: guest.code,
                      confirmed: false
                    })
                  }
                >
                  Não
                </Button>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className={styles.container}>
      {params.code === 'all' && renderAllGuests()}
      {params.code !== 'all' && renderGuest()}
    </div>
  );
};

export default Confirmar;
