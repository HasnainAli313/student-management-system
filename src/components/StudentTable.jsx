import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper  from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function StudentTable({students}) {

    //update student
    function handleUpdateStudent(){
      alert("update called")
    }

    //delete student
    function handleDeleteStudent(){
      alert("delete called")
    }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Student Roll #</TableCell>
          <TableCell align="center">Student Name</TableCell>
          <TableCell align="center">Student Age</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students && students.map((student) => (
          <TableRow
            key={student.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">
              {student.rollNo}
            </TableCell>
            <TableCell align="center">{student.name}</TableCell>
            <TableCell align="center">{student.age}</TableCell>
            <TableCell align="center">
              <EditIcon onClick={ ( )=> handleUpdateStudent(student.id)} style={{cursor:"pointer", color:"007bff", marginRight:10}}/>
              <DeleteIcon  onClick={ ( )=> handleDeleteStudent(student.id)} style={{cursor:"pointer", color:"crimson"}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}


