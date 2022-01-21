import { Category } from './Category';
import { Event } from './Event';

export interface User {
  id: string;
  name: string;
  favorite: Category;
  event: Event[];
}
