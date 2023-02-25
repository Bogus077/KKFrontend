import { Avatar } from '@mui/material';
import React from 'react';
import { Kid } from '../../models/Kids/Kids';
import styles from './KidItem.module.scss';

type KidItemTypes = {
  kid: Kid;
};

export const KidItem = ({ kid }: KidItemTypes) => {
  return (
    <div className={styles.main}>
      <Avatar src="/img/avatar_default.png" />
      <div className={styles.name}>{`${kid.surname} ${kid.name}`}</div>
    </div>
  );
};
