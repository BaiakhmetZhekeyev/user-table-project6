import React, { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";

const MaterialTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "rating",
        header: "Rating",
      },
    ],
    [],
  );

  const [data, setData] = useState([
    {
      firstName: "Baiakhmet",
      lastName: "First",
      city: "Ayagoz",
      age: 25,
      rating: 1,
    },
    {
      firstName: "Aisultan",
      lastName: "Second",
      city: "Astana",
      age: 24,
      rating: 2,
    },
    { firstName: "Mike", lastName: "Third", city: "sada", age: 45, rating: 3 },
    { firstName: "John", lastName: "Fourth", city: "VS", age: 31, rating: 4 },
    {
      firstName: "Dastan",
      lastName: "Fifth",
      city: "Costa",
      age: 25,
      rating: 5,
    },
    { firstName: "Aldiyar", lastName: "Six", city: "Rica", age: 89, rating: 6 },
  ]);

  return (
    <MaterialReactTable
      autoResetPageIndex={false}
      columns={columns}
      data={data}
      enableRowOrdering
      enableSorting={false}
      enableColumnActions={false}
      enableEditing={true}
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            const oldRating = draggingRow.original.rating;
            const newRating = hoveredRow.original.rating;
            for (let item of data) {
              console.log(item);
              if (item.rating < oldRating && item.rating > newRating) {
                item.rating = item.rating + 1;
              }
            }
            draggingRow.original.rating = newRating;
            hoveredRow.original.rating++;
            data.splice(
              hoveredRow.index,
              0,
              data.splice(draggingRow.index, 1)[0],
            );
            setData([...data]);
          }
        },
      })}
    />
  );
};

export default MaterialTable;
