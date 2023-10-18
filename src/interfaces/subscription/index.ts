import { UserInterface } from 'interfaces/user';
import { BookInterface } from 'interfaces/book';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  start_date: any;
  end_date: any;
  user_id: string;
  book_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  book?: BookInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  book_id?: string;
}
