import React from "react";
import styled from "./UserForm.module.css";
import { useFormik } from "formik";
import { Avatar, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MyUpload from "../UI/MyUpload/MyUpload";
import { USER_VALIDATION } from "./UserValidation";

const defaultValue = {
  img: null,
  firstName: "",
  lastName: "",
  age: "",
  city: "",
};

const UserForm = ({
  setIsModalActive,
  addUser,
  tableLenght,
  userToEdit,
  setUserToEdit,
}) => {
  const { img = null, ...restUserParams } = userToEdit || {};
  const [image, setImage] = React.useState(img);
  const formik = useFormik({
    initialValues: restUserParams || defaultValue,
    validationSchema: USER_VALIDATION,

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
          <div className={styled.uploadWrapper}>
            {image ? (
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={URL.createObjectURL(image)}
              />
            ) : (
              <Avatar sx={{ width: 100, height: 100 }} />
            )}
            <MyUpload
              name="img"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
              value={formik.values.img}
              accept={"image/*"}
            >
              {image ? "Изменить картинку" : "Загрузить картинку"}
            </MyUpload>
          </div>
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
            {formik.touched.firstName && formik.errors.firstName ? (
              <p style={{ color: "red" }}>{formik.errors.firstName}</p>
            ) : null}
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
            {formik.touched.lastName && formik.errors.lastName ? (
              <p style={{ color: "red" }}>{formik.errors.lastName}</p>
            ) : null}
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
            {formik.touched.age && formik.errors.age ? (
              <p style={{ color: "red" }}>{formik.errors.age}</p>
            ) : null}
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
            {formik.touched.city && formik.errors.city ? (
              <p style={{ color: "red" }}>{formik.errors.city}</p>
            ) : null}
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
