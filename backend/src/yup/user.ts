import * as yup from 'yup';

export const yupUserCreate = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  imageUrl: yup.string().url(),
});

export const yupUserChangePassword = yup.object().shape({
  password: yup.string().required(),
});
