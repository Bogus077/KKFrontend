import IconButton from '@mui/material/IconButton';
import React, { useCallback } from 'react';
import { Kid } from '../../../models/Kids/Kids';
import styles from './KidListItem.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { frontendRoutes } from '../../../utils/router/routes';

type KidListItemTypes = {
  kid: Kid;
  onDelete: React.Dispatch<React.SetStateAction<Kid | null>>;
};

export const KidListItem = ({ kid, onDelete }: KidListItemTypes) => {
  const navigate = useNavigate();
  const handleEdit = useCallback(
    () => navigate(`${frontendRoutes.kids.edit}/${kid.id}`),
    [kid.id, navigate]
  );
  const handleDelete = useCallback(() => onDelete(kid), [kid, onDelete]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.delete}>
        <IconButton aria-label="Удалить" onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className={styles.edit}>
        <IconButton
          aria-label="Редактировать"
          size="small"
          onClick={handleEdit}
        >
          <EditIcon />
        </IconButton>
      </div>

      <div className={styles.main}>
        <img
          src="/img/avatar_default.png"
          alt="avatar"
          className={styles.avatar}
        />
        <span className={styles.name}>{`${kid.surname} ${kid.name}`}</span>
      </div>

      <div className={styles.stats}>stats</div>
    </div>
  );
};
