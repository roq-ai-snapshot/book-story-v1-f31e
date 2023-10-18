import { ChapterInterface } from 'interfaces/chapter';
import { ReviewInterface } from 'interfaces/review';
import { SubscriptionInterface } from 'interfaces/subscription';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface BookInterface {
  id?: string;
  title: string;
  author: string;
  publication_date: any;
  genre: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  chapter?: ChapterInterface[];
  review?: ReviewInterface[];
  subscription?: SubscriptionInterface[];
  company?: CompanyInterface;
  _count?: {
    chapter?: number;
    review?: number;
    subscription?: number;
  };
}

export interface BookGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  author?: string;
  genre?: string;
  company_id?: string;
}
