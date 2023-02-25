import React, { ReactElement } from 'react';
import styles from './SidemenuItem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type SidemenuItemTypes = {
  active?: boolean;
  title: string;
  icon: ReactElement;
  onClick: () => void;
};

export const SidemenuItem = ({
  active,
  title,
  icon,
  onClick,
}: SidemenuItemTypes) => {
  return (
    <div
      className={cx(styles.item, {
        item_active: active,
      })}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
