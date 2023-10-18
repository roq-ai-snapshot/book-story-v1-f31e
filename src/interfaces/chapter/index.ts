import { BookInterface } from 'interfaces/book';
import { GetQueryInterface } from 'interfaces';

export interface ChapterInterface {
  id?: string;
  title: string;
  content: string;
  book_id: string;
  created_at?: any;
  updated_at?: any;

  book?: BookInterface;
  _count?: {};
}

export interface ChapterGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  book_id?: string;
}
