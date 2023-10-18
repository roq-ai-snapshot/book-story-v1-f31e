import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  book_id: yup.string().nullable().required(),
});
