import { Category } from './Category';

export interface Event {
  id: number;
  name: string;
  category: Category;
  date: string;
  time: string;
}
