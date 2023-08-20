import React from "react";
import styled from "./UserForm.module.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import MyUpload from "./UI/MyUpload/MyUpload";

const UserForm = ({
  setIsModalActive,
  addUser,
  tableLenght,
  userToEdit,
  setUserToEdit,
}) => {
  const [image, setImage] = React.useState(userToEdit?.img || null);
  const formik = useFormik({
    initialValues: { ...userToEdit, img: null } || {
      img: null,
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      age: Yup.number("It must be number").min(0).max(100).required("Required"),
      city: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      if (userToEdit) {
        addUser({
          ...values,
          id: userToEdit.id,
          rating: userToEdit.rating,
          img: image,
        });
        return;
      }
      const userRating = tableLenght + 1;
      let userId = Date.now().toString();
      addUser({ ...values, id: userId, rating: userRating, img: image });
    },
  });

  return (
    <div className={styled.modalContainer}>
      <div className={styled.modal}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styled.formGroup}>
            <TextField
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? true
                  : false
              }
              label="FirstName"
              variant="outlined"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {/*{formik.touched.firstName && formik.errors.firstName ? (*/}
            {/*  <p style={{ color: "red" }}>{formik.errors.firstName}</p>*/}
            {/*) : null}*/}
          </div>
          <div className={styled.formGroup}>
            <TextField
              error={
                formik.touched.lastName && formik.errors.lastName ? true : false
              }
              label="LastName"
              variant="outlined"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {/*{formik.touched.lastName && formik.errors.lastName ? (*/}
            {/*  <p style={{ color: "red" }}>{formik.errors.lastName}</p>*/}
            {/*) : null}*/}
          </div>
          <div className={styled.formGroup}>
            <TextField
              error={formik.touched.age && formik.errors.age ? true : false}
              label="Age"
              variant="outlined"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              onBlur={formik.handleBlur}
            />
            {/*{formik.touched.age && formik.errors.age ? (*/}
            {/*  <p style={{ color: "red" }}>{formik.errors.age}</p>*/}
            {/*) : null}*/}
          </div>
          <div className={styled.formGroup}>
            <TextField
              error={formik.touched.city && formik.errors.city ? true : false}
              label="City"
              variant="outlined"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              onBlur={formik.handleBlur}
            />
            {/*{formik.touched.city && formik.errors.city ? (*/}
            {/*  <p style={{ color: "red" }}>{formik.errors.city}</p>*/}
            {/*) : null}*/}
          </div>
          <div className={styled.formGroup}>
            <MyUpload
              name="img"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
              value={formik.values.img}
            >
              Upload avatar
            </MyUpload>
            {/*<label htmlFor="avatar">Avatar</label>*/}
            {/*<input*/}
            {/*  name="avatar"*/}
            {/*  type="file"*/}
            {/*  onChange={(event) => {*/}
            {/*    setImage(event.target.files[0]);*/}
            {/*  }}*/}
            {/*  value={formik.values.img}*/}
            {/*/>*/}
          </div>
          <div className={styled.btnGroup}>
            <Button
              variant="outlined"
              onClick={() => {
                setIsModalActive(false);
                setUserToEdit(null);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
