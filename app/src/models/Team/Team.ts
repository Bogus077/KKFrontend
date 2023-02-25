import { DefaultResponse } from '../API/API';
import { Kid } from '../Kids/Kids';

export type Team = DefaultResponse & {
  name: string;
  Kids: Kid[];
};

export type GetTeamsResponse = Team[];
