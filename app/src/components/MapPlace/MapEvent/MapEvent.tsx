import React from 'react';
import { PlaceEvent } from '../../../models/Map/map';
import { Stats } from '../../Stats';
import styles from './MapEvent.module.scss';
import classNames from 'classnames/bind';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const cx = classNames.bind(styles);

type MapEventTypes = {
  event: PlaceEvent;
};

export const MapEvent = ({ event }: MapEventTypes) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>{event.name}</div>
      <div className={styles.messages}>
        {event.messages.map((msg) => (
          <div
            className={cx('message', {
              message_log: msg.type === 'log',
            })}
            key={msg.id}
          >
            {msg.type === 'log' && <InfoOutlinedIcon />}
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <div className={styles.stats}>
        <Stats
          need={{ ap: event.stats.ap, ip: event.stats.ip }}
          have={{ ap: 40, ip: 13 }}
        />
        {event.status === 'start' && (
          <Button
            size="large"
            variant="contained"
            fullWidth
            startIcon={<StartOutlinedIcon />}
          >
            Начать
          </Button>
        )}
        {event.status === 'process' && (
          <Button
            size="large"
            variant="contained"
            fullWidth
            color="success"
            disabled={true}
            startIcon={<CheckCircleOutlineOutlinedIcon />}
          >
            Завершить
          </Button>
        )}
      </div>
    </div>
  );
};
