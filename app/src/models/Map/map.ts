import { DefaultResponse } from './../API/API';
export type Place = DefaultResponse & {
  id: number;
  name: string;
  mapStep: number;
  eventStep: number;
  Events: PlaceEvent[];
  img: string;
};

export type PlaceEvent = DefaultResponse & {
  name: string;
  eventStep: number;
  startMessage: string;
  processMessage: string;
  endMessage: string;
  status: 'start' | 'process' | 'done';
  stats: Points;
  messages: PlaceEventMessage[];
};

export type Points = {
  ap: number;
  ip: number;
};

export type PlaceEventMessage = DefaultResponse & {
  message: string;
  type: 'log' | 'message';
};
