import { Event } from './Event';
export interface Comments {
  postedByName: string;
  eventID: Event['id'];
  posted: string;
  comments: string[];
}