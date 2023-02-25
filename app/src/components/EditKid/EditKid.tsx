import React from 'react';
import { Kid } from '../../models/Kids/Kids';
import { Team } from '../../models/Team/Team';
import { KidForm } from '../KidForm';

type EditKidTypes = {
  kid: Kid;
  teams: Team[];
};

export const EditKid = ({ kid, teams }: EditKidTypes) => {
  return <KidForm action="edit" kid={kid} teams={teams} />;
};
