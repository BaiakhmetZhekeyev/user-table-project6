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

  const addUser = (user) => {
    setUsers([...users, user]);
    setIsModalActive(false);
    console.log(users);
  };

  const deleteUser = (user) => {
    const usersArr = Array.from(users);
    usersArr.forEach((curr) =>
      curr.rating > user.rating ? curr.rating-- : curr.rating,
    );
    setUsers(usersArr.filter((curr) => user.id !== curr.id));
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
        />
      )}
      <UsersTable users={users} setUsers={setUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
