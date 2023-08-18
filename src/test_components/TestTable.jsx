// import * as React from "react";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//
// function createUser(firstName, id) {
//   return { firstName, id };
// }
//
// const rows = [
//   createUser("Baiakhmet", "123"),
//   createUser("Aisultan", "124"),
//   createUser("Eclair", "125"),
// ];
//
// export default function TestTable() {
//   return (
//     <DragDropContext>
//       <Droppable droppableId={"TableBody"}>
//         {(provided) => (
//           <ul {...provided.droppableProps} ref={provided.innerRef}>
//             {rows.map((row, index) => (
//               <Draggable key={row.id} draggableId={row.id} index={index}>
//                 {(provided) => (
//                   <li
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <div>{row.firstName}</div>
//                   </li>
//                 )}
//               </Draggable>
//             ))}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
