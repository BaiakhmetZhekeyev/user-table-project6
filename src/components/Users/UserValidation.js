import * as Yup from "yup";

export const USER_VALIDATION = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  age: Yup.number()
    .typeError("age must be a `number` type")
    .min(0)
    .max(100)
    .required("Required"),
  city: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});
