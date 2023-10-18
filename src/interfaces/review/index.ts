import { UserInterface } from 'interfaces/user';
import { BookInterface } from 'interfaces/book';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id: string;
  book_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  book?: BookInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  book_id?: string;
}
