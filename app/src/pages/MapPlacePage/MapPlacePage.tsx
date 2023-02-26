import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { MapPlace } from '../../components/MapPlace';
import { Place } from '../../models/Map/map';
import { place } from './mocks';

export const MapPlacePage = () => {
  const { id } = useParams();

  document.title = `${place.name} | Гранит`;

  return (
    <Layout>
      <MapPlace place={place} />
    </Layout>
  );
};
