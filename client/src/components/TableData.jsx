import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const TableData = ({ tasks, handleDelete }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="w-10/12 m-auto">
      <div className="bg-blue-100 font-bold p-2 my-2 text-center">
        Daily Update Table
      </div>
      <div className="">
        <form className="flex items-center p-4 bg-slate-300 rounded shadow-sm ">
          <input
            className="w-full outline-none p-2 rounded"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or id ...."
          />
          <FaSearch />
        </form>
      </div>
      <Table className="my-14" component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Yesterday Task</TableCell>
            <TableCell>Yesterday Date</TableCell>
            <TableCell>Today Task</TableCell>
            <TableCell>Today Date</TableCell>
            <TableCell>Roald Block</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks
            .filter((task) => {
              return Object.values(task).some((value) => {
                if (typeof value === "string") {
                  return value.toLowerCase().includes(searchTerm.toLowerCase());
                } else {
                  return false;
                }
              });
            })
            .map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.yesterday_task}</TableCell>
                <TableCell align="left">{row.yesterday_date}</TableCell>
                <TableCell align="left">{row.today_task}</TableCell>
                <TableCell align="left">{row.today_date}</TableCell>
                <TableCell align="left">{row.role_block}</TableCell>
                <TableCell align="left">
                  <div className="flex justify-between items-center px-4">
                    <button onClick={() => handleDelete(row._id)}>
                      <MdDelete size={20} className="text-red-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

TableData.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TableData;
