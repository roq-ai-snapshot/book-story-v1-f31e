import * as yup from 'yup';

export const chapterValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  book_id: yup.string().nullable().required(),
});
