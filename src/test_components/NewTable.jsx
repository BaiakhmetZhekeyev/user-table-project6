// import React from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
//
// const characters = [
//   { name: "Baiakhmet", id: "1" },
//   { name: "Aisultan", id: "2" },
//   { name: "Yernar", id: "3" },
// ];
//
// const NewTable = () => {
//   return (
//     <DragDropContext>
//       <Droppable droppableId="characters">
//         {(provided) => (
//           <ul
//             className="characters"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {characters.map((row, index) => {
//               return (
//                 <Draggable key={row.id} draggableId={row.id} index={index}>
//                   {(provided) => (
//                     <li
//                       {...provided.draggableProps}
//                       ref={provided.innerRef}
//                       {...provided.dragHandleProps}
//                     >
//                       <div
//                         style={{ padding: "20px", backgroundColor: "yellow" }}
//                       >
//                         {row.name}
//                       </div>
//                     </li>
//                   )}
//                 </Draggable>
//               );
//             })}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };
//
// export default NewTable;
