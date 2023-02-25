import React from 'react';
import { useParams } from 'react-router-dom';
import { EditKid } from '../../components/EditKid';
import { EmptyItem } from '../../components/EmptyItem';
import { Layout } from '../../components/Layout';
import { useGetKidQuery, useGetTeamsQuery } from '../../redux/KKApi';

export const EditKidPage = () => {
  const { id } = useParams();
  const { data: kid, isLoading } = useGetKidQuery({ id });
  const { data: teams = [], isLoading: isTeamsLoading } = useGetTeamsQuery('');

  return (
    <Layout isLoading={isLoading || isTeamsLoading}>
      {kid ? <EditKid kid={kid} teams={teams} /> : <EmptyItem />}
    </Layout>
  );
};
