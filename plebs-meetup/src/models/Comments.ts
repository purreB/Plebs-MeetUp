import { Event } from './Event';
export interface Comments {
  id: number;
  eventID: Event['id'];
  posted: string;
  comment: string;
}
