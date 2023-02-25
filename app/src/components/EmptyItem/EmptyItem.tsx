import React from 'react';
import styles from './EmptyItem.module.scss';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

type EmptyItemTypes = {
  text?: string;
};

export const EmptyItem = ({ text = 'Пустовато тут...' }: EmptyItemTypes) => {
  return (
    <div className={styles.main}>
      <HighlightAltIcon fontSize="large" />
      <div className={styles.text}>{text}</div>
    </div>
  );
};
