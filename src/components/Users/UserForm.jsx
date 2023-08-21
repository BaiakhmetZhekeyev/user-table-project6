import React from "react";
import styled from "./UserForm.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
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

const userInfo = [
  { name: "firstName", label: "FirstName", id: 1 },
  { name: "lastName", label: "LastName", id: 2 },
  { name: "age", label: "Age", id: 3 },
  { name: "city", label: "City", id: 4 },
];

const UserForm = ({
  setIsModalActive,
  addUser,
  tableLenght,
  userToEdit,
  setUserToEdit,
}) => {
  const { img = null, ...restUserParams } = userToEdit || {};
  const [image, setImage] = React.useState(img);

  const handleSubmit = (values) => {
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
  };

  return (
    <div className={styled.modalContainer}>
      <div className={styled.modal}>
        <Formik
          initialValues={restUserParams || defaultValue}
          validationSchema={USER_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
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
                  accept={"image/*"}
                >
                  {image ? "Изменить картинку" : "Загрузить картинку"}
                </MyUpload>
              </div>
              {userInfo.map((item) => {
                return (
                  <div className={styled.formGroup} key={item.id}>
                    <Field
                      as={TextField}
                      label={item.label}
                      variant="outlined"
                      name={item.name}
                      error={
                        errors[item.name] && touched[item.name] ? true : false
                      }
                    />
                    {errors[item.name] && touched[item.name] ? (
                      <p className={styled.validationError}>
                        {errors[item.name]}
                      </p>
                    ) : null}
                  </div>
                );
              })}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
