import "./App.css";
import UserForm from "./components/Users/UserForm";
import UsersTable from "./components/Users/UsersTable";
import { Button } from "@mui/material";
import * as React from "react";

function App() {
  const [users, setUsers] = React.useState([
    {
      img: null,
      firstName: "Baiakhmet",
      lastName: "Zhekeyev",
      age: 25,
      city: "Ayagoz",
      rating: 1,
      id: "123",
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
    const newUsers = users.reduce((acc, item) => {
      if (item.id === user.id) {
        return acc;
      } else if (item.rating > user.rating) {
        item.rating--;
      }
      acc.push(item);
      return acc;
    }, []);
    setUsers(newUsers);
  };

  const getUserToEdit = (user) => {
    setUserToEdit(user);
    setIsModalActive(true);
  };

  return (
    <div className="App">
      <div className="usersTableWrapper">
        <Button
          onClick={() => setIsModalActive(true)}
          variant="contained"
          style={{ width: "200px" }}
        >
          Add User
        </Button>
        <UsersTable
          users={users}
          setUsers={setUsers}
          deleteUser={deleteUser}
          getUserToEdit={getUserToEdit}
        />
        {isModalActive && (
          <UserForm
            setIsModalActive={setIsModalActive}
            addUser={addUser}
            lastUserRating={users[users.length - 1]?.rating}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
