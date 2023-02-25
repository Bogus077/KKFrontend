import React, { ReactElement } from 'react';
import styles from './Layout.module.scss';
import { Sidemenu } from './Sidemenu';

export type LayoutTypes = {
  children: ReactElement;
  isLoading?: boolean;
  header?: {
    title: string;
    subtitle?: string;
    image: string;
  };
  toolbar?: ReactElement;
};

export const Layout = ({
  children,
  isLoading,
  header,
  toolbar,
}: LayoutTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidemenu}>
        <Sidemenu />
      </div>
      <div className={styles.main}>
        {header && (
          <div className={styles.header}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${header.image})` }}
            />
            <div className={styles.title}>{header.title}</div>
            {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
          </div>
        )}

        <div className={styles.content}>
          {/* TODO: Добавить лоадер */}
          {isLoading ? <>Загрузка...</> : children}
        </div>
      </div>
    </div>
  );
};
