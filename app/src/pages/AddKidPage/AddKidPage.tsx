import React from 'react';
import { AddKid } from '../../components/AddKid';
import { Layout } from '../../components/Layout';
import { useGetTeamsQuery } from '../../redux/KKApi';

export const AddKidPage = () => {
  const { data: teams = [], isLoading: isTeamsLoading } = useGetTeamsQuery('');

  return (
    <Layout isLoading={isTeamsLoading}>
      <AddKid teams={teams} />
    </Layout>
  );
};
