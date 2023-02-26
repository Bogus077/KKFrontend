import React from 'react';
import { Layout } from '../../components/Layout';
import { Map } from '../../components/Map';
import { useGetTeamsQuery } from '../../redux/KKApi';

export const DashboardPage = () => {
  document.title = 'Гранит';
  const { data: teams = [], isLoading } = useGetTeamsQuery('');

  return (
    <Layout isLoading={isLoading}>
      <Map teams={teams} />
    </Layout>
  );
};
