import React from 'react';
import { Team } from '../../models/Team/Team';
import { KidForm } from '../KidForm';

type AddKidTypes = {
  teams: Team[];
};

export const AddKid = ({ teams }: AddKidTypes) => {
  return <KidForm action="add" teams={teams} />;
};
