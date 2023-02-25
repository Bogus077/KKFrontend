import { DefaultResponse } from '../API/API';

export type Kid = DefaultResponse & {
  TeamId?: number;
  name: string;
  surname: string;
};

export type GetKidsResponse = Kid[];

export type GetKidResponse = Kid;
export type GetKidRequest = { id?: number | string };

export type AddKidRequest = { TeamId?: number; name: string; surname: string };
export type EditKidRequest = {
  TeamId?: number;
  name: string;
  surname: string;
  id?: number | string;
};
export type AddKidResponse = Kid;
export type EditKidResponse = Kid;

export type DeleteKidRequest = { id?: number | string };
