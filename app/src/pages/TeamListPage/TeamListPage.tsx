import Button from '@mui/material/Button';
import React from 'react';
import { Layout, LayoutTypes } from '../../components/Layout/Layout';
import { TeamList } from '../../components/TeamList';
import { useGetTeamsQuery } from '../../redux/KKApi';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const TeamListPage = () => {
  document.title = 'Команды | Гранит';
  const { data: teams = [], isLoading } = useGetTeamsQuery('');
  const header: LayoutTypes['header'] = {
    title: 'Список команд',
    image: '/img/teamList.jpg',
  };

  const toolbar = (
    <Button size="large" variant="outlined" startIcon={<GroupAddIcon />}>
      Добавить команду
    </Button>
  );

  return (
    <Layout isLoading={isLoading} header={header} toolbar={toolbar}>
      <TeamList teams={teams} />
    </Layout>
  );
};
