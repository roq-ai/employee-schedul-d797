import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  shift_start: yup.date().nullable(),
  shift_end: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  location_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
});
