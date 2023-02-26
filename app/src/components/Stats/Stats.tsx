import React from 'react';
import { Points } from '../../models/Map/map';
import styles from './Stats.module.scss';
import { StatsItem } from './StatsItem';

type StatsTypes = {
  need: Points;
  have: Points;
};

export const Stats = ({ need, have }: StatsTypes) => {
  return (
    <div className={styles.main}>
      <StatsItem type="ap" need={need.ap} have={have.ap} />
      <StatsItem type="ip" need={need.ip} have={have.ip} />
    </div>
  );
};
