import IconButton from '@mui/material/IconButton';
import React, { ReactElement, useCallback, useState } from 'react';
import styles from './FormLayout.module.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ConfirmModal } from '../ConfirmModal';

type FormLayoutTypes = {
  title: string;
  children: ReactElement;
  submitButtonText?: string;
  cancelButtonText?: string;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  submitDisabled?: boolean;
};

export const FormLayout = ({
  title,
  children,
  submitButtonText = 'Сохранить',
  cancelButtonText = 'Отмена',
  handleSubmit,
  submitDisabled,
}: FormLayoutTypes) => {
  const navigate = useNavigate();
  const handleBack = useCallback(() => navigate(-1), [navigate]);
  const [isBack, setIsBack] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.toolbar}>
        <IconButton aria-label="Назад" onClick={handleBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <span className={styles.title}>{title}</span>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            size="large"
            color="success"
            startIcon={<SaveOutlinedIcon />}
            onClick={() => handleSubmit()}
            disabled={submitDisabled}
          >
            {submitButtonText}
          </Button>
          <Button
            size="large"
            color="error"
            startIcon={<CancelPresentationOutlinedIcon />}
            onClick={() => setIsBack(true)}
          >
            {cancelButtonText}
          </Button>
        </div>
      </div>

      <div className={styles.content}>{children}</div>
      {isBack && (
        <ConfirmModal
          open={isBack}
          onAgree={handleBack}
          onCancel={() => setIsBack(false)}
          title="Отменить изменения?"
        >
          Изменения будут отменены. Информация не сохранится. Всё равно
          отменить?
        </ConfirmModal>
      )}
    </div>
  );
};
