import React from 'react';
import styles from './StatsItem.module.scss';

type StatsItemTypes = {
  type: 'ap' | 'ip';
  need: number;
  have: number;
};

export const StatsItem = ({ type, need, have }: StatsItemTypes) => {
  const color = type === 'ap' ? '#ff6633' : '#9D3BDC';
  const value = Math.floor((have / need) * 100);
  return (
    <div className={styles.main}>
      <div className={styles.values}>
        <div className={styles.values__have} style={{ color: color }}>
          {have}
        </div>
        <div className={styles.values__need}>{need}</div>
      </div>
      <div className={styles.container}>
        <div
          className={styles.container__fill}
          style={{ width: `${value}%`, backgroundColor: color }}
        />
        <div className={styles.divider} />
        <div className={styles.divider} />
        <div className={styles.divider} />
      </div>
      <div className={styles.title}>
        {type === 'ap' ? 'Очки действия' : 'Очки интеллекта'}
      </div>
    </div>
  );
};
