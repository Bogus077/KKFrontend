import React from 'react';
import { Team } from '../../models/Team/Team';
import styles from './Map.module.scss';
import { MapPoint } from './MapPoint';

type MapTypes = {
  teams: Team[];
};

export const Map = ({ teams }: MapTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <img src="/img/maps/map1.jpg" alt="map" />
        <MapPoint
          id={1}
          x={10}
          y={10}
          name="Вход в лес"
          img="/img/maps/map1_1.jpg"
          teams={teams}
        />
      </div>
    </div>
  );
};
