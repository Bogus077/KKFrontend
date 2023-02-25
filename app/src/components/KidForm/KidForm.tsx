import { InputLabel } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { FormikContext, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Kid } from '../../models/Kids/Kids';
import { Team } from '../../models/Team/Team';
import { useAddKidMutation, useEditKidMutation } from '../../redux/KKApi';
import { FormLayout } from '../FormLayout';
import styles from './KidForm.module.scss';
import {
  kidInitialValues,
  kidToInputValues,
  kidValidationSchema,
} from './schema';

type KidFormTypes = {
  kid?: Kid;
  action: 'edit' | 'add';
  teams: Team[];
};

export const KidForm = ({ kid, action, teams }: KidFormTypes) => {
  const { enqueueSnackbar } = useSnackbar();
  const [triggerAddKid, addKidState] = useAddKidMutation();
  const [triggerEditKid, editKidState] = useEditKidMutation();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values: typeof kidInitialValues) => {
      try {
        kid
          ? await triggerEditKid({ ...values, id: kid.id })
          : await triggerAddKid(values);
        enqueueSnackbar(
          `Данные участника ${values.surname} ${values.name} успешно обновлены`,
          {
            variant: 'success',
          }
        );
        navigate(-1);
      } catch {
        enqueueSnackbar(
          action === 'add'
            ? 'Ошибка добавления участника'
            : 'Ошибка редактирования участника',
          {
            variant: 'error',
          }
        );
      }
    },
    [action, enqueueSnackbar, kid, navigate, triggerAddKid, triggerEditKid]
  );

  const formik = useFormik({
    initialValues: kid ? kidToInputValues(kid) : kidInitialValues,
    validationSchema: kidValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormikContext.Provider value={formik}>
      <FormLayout
        title={
          action === 'add' ? 'Добавление участника' : 'Редактирование участника'
        }
        handleSubmit={formik.handleSubmit}
        submitDisabled={!formik.isValid}
      >
        <div className={styles.main}>
          <div className={styles.avatar__wrapper}>
            <img
              src="/img/avatar_default.png"
              alt="avatar"
              className={styles.avatar}
            />
          </div>

          <div className={styles.name}>
            <TextField
              id="surname"
              name="surname"
              label="Фамилия"
              variant="outlined"
              fullWidth
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.surname)}
              helperText={formik.errors.surname}
            />
            <TextField
              id="name"
              name="name"
              label="Имя"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </div>

          <div className={styles.team}>
            <InputLabel id="TeamId">Команда</InputLabel>
            <Select
              fullWidth
              labelId="TeamId"
              id="TeamId"
              name="TeamId"
              value={formik.values.TeamId}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.TeamId)}
            >
              {teams.map((team) => (
                <MenuItem value={team.id} key={team.id}>
                  <ListItemText>{team.name}</ListItemText>
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </FormLayout>
    </FormikContext.Provider>
  );
};
