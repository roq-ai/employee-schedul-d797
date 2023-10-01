import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
