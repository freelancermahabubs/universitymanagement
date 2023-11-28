import { z } from 'zod';

const UserValidationSchema = z.object({
<<<<<<< HEAD
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, { message: 'Password can not be more than 20 characters' })
=======
    password: z
    .string({ invalid_type_error: 'Passwrod must be sting' })
    .max(20, { message: 'Passwrd can not be more than 20 characters ' })
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
    .optional(),
});
export const UserValidation = {
  UserValidationSchema,
};
