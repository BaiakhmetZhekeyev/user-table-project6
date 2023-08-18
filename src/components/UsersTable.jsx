import * as React from "react";
import styled from "./UsersTable.module.css";
import {
  Avatar,
  Button,
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

export default function UsersTable({ users, setUsers, deleteUser }) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(users);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setUsers(items);
  }

  return (
    <div className={styled.contentWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <TableContainer className={styled.tableWrapper} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Move</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
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
                          <TableCell {...provided.dragHandleProps}>=</TableCell>
                          <TableCell>
                            {user.img ? (
                              <Avatar src={URL.createObjectURL(user.img)} />
                            ) : (
                              <Avatar sx={{ bgcolor: "blue" }}>
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
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
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
