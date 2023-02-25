import React from 'react';
import { Team } from '../../models/Team/Team';
import styles from './TeamList.module.scss';
import { TeamListItem } from './TeamListItem';

type TeamListTypes = {
  teams: Team[];
};

export const TeamList = ({ teams }: TeamListTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {teams.map((team) => (
          <TeamListItem team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
};
