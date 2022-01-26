import { Event } from './Event';
export interface Comments {
  id: number;
  eventID?: Event['id'];
  posted: string;
  comment: string;
}

export class Comment implements Comments {
  id: number;
  eventID?: Event['id'];
  posted: string;
  comment: string;

  constructor(commentText: string, id: number) {
    this.id = id;
    this.comment = commentText;
    this.posted = new Date().toISOString();
  }
}
