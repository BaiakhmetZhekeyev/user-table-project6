import * as React from "react";
import styled from "./UsersTable.module.css";
import {
  Avatar,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReorderIcon from "@mui/icons-material/Reorder";

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
                <TableCell>Avatar</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Move</TableCell>
              </TableRow>
            </TableHead>
            <Droppable droppableId={"TableBody"}>
              {(provided) => (
                <TableBody {...provided.droppableProps} ref={provided.innerRef}>
                  {users.map((user, index) => (
                    <Draggable
                      key={user.id}
                      draggableId={user.id}
                      index={index}
                    >
                      {(provided) => (
                        <TableRow
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <TableCell>
                            {user.img ? (
                              <Avatar
                                sx={{ width: 48, height: 48 }}
                                src={URL.createObjectURL(user.img)}
                              />
                            ) : (
                              <Avatar
                                sx={{ width: 48, height: 48, bgcolor: "blue" }}
                              >
                                {user.firstName[0] + user.lastName[0]}
                              </Avatar>
                            )}
                          </TableCell>
                          <TableCell>{user.firstName}</TableCell>
                          <TableCell>{user.lastName}</TableCell>
                          <TableCell>{user.age}</TableCell>
                          <TableCell>{user.city}</TableCell>
                          <TableCell>{user.rating}</TableCell>
                          <TableCell>
                            <IconButton
                              aria-label="delete"
                              size="small"
                              style={{ marginRight: "10px" }}
                              onClick={() => deleteUser(user)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              color="primary"
                              aria-label="delete"
                              size="small"
                              onClick={() => getUserToEdit(user)}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                          <TableCell {...provided.dragHandleProps}>
                            <ReorderIcon />
                          </TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
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
