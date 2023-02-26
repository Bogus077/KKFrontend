import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Team } from '../../../models/Team/Team';
import { frontendRoutes } from '../../../utils/router/routes';
import styles from './MapPoint.module.scss';

type MapPlaceTypes = {
  x: number;
  y: number;
  name: string;
  img: string;
  id: number;
  teams: Team[];
};

export const MapPoint = ({ x, y, name, img, teams, id }: MapPlaceTypes) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.main}
      style={{ top: `${y}%`, left: `${x}%` }}
      onClick={() => navigate(`${frontendRoutes.map.place}/${id}`)}
    >
      <img className={styles.image} src={img} alt="map 1-1" />
      <span className={styles.name}>{name}</span>
      <div className={styles.teams}>
        <AvatarGroup max={3}>
          {teams.map((team) => (
            <Avatar alt={team.name} key={team.id}>{`${team.name.slice(
              0,
              1
            )}`}</Avatar>
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
};
