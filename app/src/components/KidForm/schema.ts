import { number, object, string } from 'yup';
import { Kid } from '../../models/Kids/Kids';
import { VALIDATION_ERRORS } from '../../models/Validation/validation';

export const kidInitialValues = {
  name: '',
  surname: '',
  TeamId: undefined as number | undefined,
};

export const kidValidationSchema = object({
  name: string().required(VALIDATION_ERRORS.REQUIRED),
  surname: string().required(VALIDATION_ERRORS.REQUIRED),
  TeamId: number(),
});

export const kidToInputValues = (kid: Kid) => ({
  name: kid.name,
  surname: kid.surname,
  TeamId: kid.TeamId ?? undefined,
});
