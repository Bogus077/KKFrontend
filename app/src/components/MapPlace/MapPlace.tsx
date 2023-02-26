import React from 'react';
import { Place } from '../../models/Map/map';
import { MapEvent } from './MapEvent';
import styles from './MapPlace.module.scss';

type MapPlaceTypes = {
  place: Place;
};

export const MapPlace = ({ place }: MapPlaceTypes) => {
  return (
    <div className={styles.place}>
      <img src={place.img} alt="place" className={styles.img} />
      <span className={styles.title}>{place.name}</span>
      <div className={styles.events}>
        {place.Events.map((event) => (
          <MapEvent event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};
