import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Team } from '../../../models/Team/Team';
import styles from './TeamListItem.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { KidItem } from '../../KidItem';
import { EmptyItem } from '../../EmptyItem';

type TeamListItemTypes = {
  team: Team;
};

export const TeamListItem = ({ team }: TeamListItemTypes) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <IconButton aria-label="Редактировать" size="small" sx={{ mr: 1 }}>
          <EditIcon />
        </IconButton>
        {team.name}
      </div>
      <div className={styles.kids}>
        {team.Kids.length > 0 ? (
          team.Kids.map((kid) => <KidItem kid={kid} key={kid.id} />)
        ) : (
          <EmptyItem text="Нет участников" />
        )}
      </div>
    </div>
  );
};
