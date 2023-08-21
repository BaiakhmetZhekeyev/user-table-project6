import React from "react";
import { Avatar, IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Draggable } from "react-beautiful-dnd";

const UsersTableBody = ({ users, deleteUser, getUserToEdit }) => {
  return (
    <>
      {users.map((user, index) => (
        <Draggable key={user.id} draggableId={user.id} index={index}>
          {(provided) => (
            <TableRow ref={provided.innerRef} {...provided.draggableProps}>
              <TableCell>
                {user.img ? (
                  <Avatar
                    sx={{ width: 48, height: 48 }}
                    src={URL.createObjectURL(user.img)}
                  />
                ) : (
                  <Avatar sx={{ width: 48, height: 48, bgcolor: "blue" }}>
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
    </>
  );
};

export default UsersTableBody;
