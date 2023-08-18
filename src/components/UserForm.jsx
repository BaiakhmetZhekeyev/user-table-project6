import React from "react";
import styled from "./UserForm.module.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";

const UserForm = ({ setIsModalActive, addUser, tableLenght }) => {
  const [image, setImage] = React.useState(null);
  const formik = useFormik({
    initialValues: {
      img: null,
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    },
    onSubmit: (values) => {
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
            <label htmlFor="firstName">FirstName</label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className={styled.formGroup}>
            <label htmlFor="lastName">LastName</label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className={styled.formGroup}>
            <label htmlFor="age">Age</label>
            <input
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
          </div>
          <div className={styled.formGroup}>
            <label htmlFor="city">City</label>
            <input
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>
          <div className={styled.formGroup}>
            <label htmlFor="avatar">Avatar</label>
            <input
              name="avatar"
              type="file"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setImage(event.target.files[0]);
              }}
              value={formik.values.img}
            />
          </div>
          <div className={styled.btnGroup}>
            <Button variant="outlined" onClick={() => setIsModalActive(false)}>
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