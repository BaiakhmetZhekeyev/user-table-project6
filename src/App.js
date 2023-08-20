import "./App.css";
import UserForm from "./components/UserForm";
import UsersTable from "./components/UsersTable";
import { Button } from "@mui/material";
import * as React from "react";

function App() {
  const [users, setUsers] = React.useState([
    {
      img: "",
      firstName: "Baiakhmet",
      lastName: "Zhekeyev",
      age: 25,
      city: "Ayagoz",
      rating: 1,
      id: "123",
    },
    {
      img: "",
      firstName: "Aisultan",
      lastName: "Baltabayev",
      age: 26,
      city: "Abay",
      rating: 2,
      id: "124",
    },
    {
      img: "",
      firstName: "John",
      lastName: "First",
      age: 16,
      city: "Taraz",
      rating: 3,
      id: "125",
    },
    {
      img: "",
      firstName: "Yernar",
      lastName: "Yesenbolat",
      age: 31,
      city: "Shymkent",
      rating: 4,
      id: "126",
    },
    {
      img: "",
      firstName: "Zhasik",
      lastName: "Zhasontory",
      age: 28,
      city: "Nur-sultan",
      rating: 5,
      id: "127",
    },
  ]);

  const [isModalActive, setIsModalActive] = React.useState(false);
  const [userToEdit, setUserToEdit] = React.useState(null);

  const addUser = (user) => {
    if (userToEdit === null) {
      setUsers([...users, user]);
    } else {
      setUsers(
        users.map((curr) => {
          return curr.id !== user.id ? curr : user;
        }),
      );
    }
    setIsModalActive(false);
    setUserToEdit(null);
  };

  const deleteUser = (user) => {
    const usersArr = Array.from(users);
    usersArr.forEach((curr) =>
      curr.rating > user.rating ? curr.rating-- : curr.rating,
    );
    setUsers(usersArr.filter((curr) => user.id !== curr.id));
  };

  const getUserToEdit = (user) => {
    setUserToEdit(user);
    setIsModalActive(true);
  };

  return (
    <div className="App">
      <Button
        onClick={() => setIsModalActive(true)}
        variant="contained"
        style={{ width: "150px" }}
      >
        Add User
      </Button>
      {isModalActive && (
        <UserForm
          setIsModalActive={setIsModalActive}
          addUser={addUser}
          tableLenght={users.length}
          userToEdit={userToEdit}
          setUserToEdit={setUserToEdit}
        />
      )}
      <UsersTable
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
        getUserToEdit={getUserToEdit}
      />
    </div>
  );
}

export default App;
