import * as yup from 'yup';

export const bookValidationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  publication_date: yup.date().required(),
  genre: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
