import Button from '@mui/material/Button';
import React, { useCallback } from 'react';
import { KidList } from '../../components/KidList';
import { Layout } from '../../components/Layout';
import { LayoutTypes } from '../../components/Layout/Layout';
import { useGetKidsQuery } from '../../redux/KKApi';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from 'react-router-dom';
import { frontendRoutes } from '../../utils/router/routes';

export const KidListPage = () => {
  document.title = 'Участники | Гранит';
  const { data: kids = [], isLoading } = useGetKidsQuery('');
  const header: LayoutTypes['header'] = {
    title: 'Список участников приключения',
    image: '/img/kidList.jpg',
  };
  const navigate = useNavigate();
  const handleAddKid = useCallback(
    () => navigate(frontendRoutes.kids.add),
    [navigate]
  );

  const toolbar = (
    <Button
      size="large"
      variant="outlined"
      startIcon={<PersonAddAlt1Icon />}
      color="info"
      onClick={handleAddKid}
    >
      Добавить участника
    </Button>
  );

  return (
    <Layout isLoading={isLoading} header={header} toolbar={toolbar}>
      <KidList kids={kids} />
    </Layout>
  );
};
