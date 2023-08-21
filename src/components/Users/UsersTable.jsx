import * as React from "react";
import styled from "./UsersTable.module.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import UsersTableBody from "./UsersTableBody";

const TABLE_HEAD = [
  "Avatar",
  "FirstName",
  "LastName",
  "Age",
  "City",
  "Rating",
  "Actions",
  "Move",
];

function updateRatings(userArray) {
  return userArray.map((curr, index) => {
    curr.rating = index + 1;
    return curr;
  });
}

export default function UsersTable({
  users,
  setUsers,
  deleteUser,
  getUserToEdit,
}) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const usersArr = Array.from(users);
    const [reorderedItem] = usersArr.splice(result.source.index, 1);
    usersArr.splice(result.destination.index, 0, reorderedItem);
    const newUsers = updateRatings(usersArr);
    setUsers(newUsers);
  }

  return (
    <div className={styled.contentWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <TableContainer className={styled.tableWrapper} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {TABLE_HEAD.map((item) => (
                  <TableCell>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <Droppable droppableId={"TableBody"}>
              {(provided) => (
                <TableBody {...provided.droppableProps} ref={provided.innerRef}>
                  <UsersTableBody
                    users={users}
                    deleteUser={deleteUser}
                    getUserToEdit={getUserToEdit}
                  />
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </Table>
        </TableContainer>
      </DragDropContext>
    </div>
  );
}
