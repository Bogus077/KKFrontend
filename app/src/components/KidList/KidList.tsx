import { useSnackbar } from 'notistack';
import React, { useCallback, useState } from 'react';
import { Kid } from '../../models/Kids/Kids';
import { useDeleteKidMutation } from '../../redux/KKApi';
import { ConfirmModal } from '../ConfirmModal';
import styles from './KidList.module.scss';
import { KidListItem } from './KidListItem';

type KidListTypes = {
  kids: Kid[];
};

export const KidList = ({ kids }: KidListTypes) => {
  const { enqueueSnackbar } = useSnackbar();
  const [triggerDeleteKid, deleteKidState] = useDeleteKidMutation();
  const [kidToDelete, setKidToDelete] = useState<Kid | null>(null);

  const handleKidDelete = useCallback(async () => {
    try {
      kidToDelete && (await triggerDeleteKid({ id: kidToDelete.id }));
      kidToDelete &&
        enqueueSnackbar(
          `Данные участника ${kidToDelete.surname} ${kidToDelete.name} успешно удалены`,
          {
            variant: 'success',
          }
        );
      setKidToDelete(null);
    } catch {
      enqueueSnackbar('Ошибка удаления участника', {
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, kidToDelete, triggerDeleteKid]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {kids.map((kid) => (
          <KidListItem kid={kid} key={kid.id} onDelete={setKidToDelete} />
        ))}
      </div>
      {Boolean(kidToDelete) && (
        <ConfirmModal
          open={Boolean(kidToDelete)}
          onAgree={handleKidDelete}
          onCancel={() => setKidToDelete(null)}
          title="Удалить участника?"
        >
          {`Вы действительно хотите удалить участника ${kidToDelete?.surname} ${kidToDelete?.name}? Это действие необратимо`}
        </ConfirmModal>
      )}
    </div>
  );
};
