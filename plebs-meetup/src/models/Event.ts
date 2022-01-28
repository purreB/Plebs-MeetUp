import { Category } from './Category';
import { Comments } from './Comments';

export interface Event {
  id: number;
  name: string;
  category: Category;
  date: string;
  time: string;
  comments: Comments[];
}
