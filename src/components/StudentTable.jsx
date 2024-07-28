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
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {db} from '../firebaseConfig'
import UpdateStudentDialog from './UpdateStudentDialog'
import { useState } from "react";


export default function StudentTable({students,setStudents}) {
const [editDialogOpen, setEditDialogOpen] = useState(false )
const [currentStudent, setCurrentStudent] = useState(null)
    

    //update student
    function handleUpdateStudent(studentId){
     const student =  students.find(s=> s.id === studentId)
     setCurrentStudent(student)
      setEditDialogOpen(true)
    }

    //delete student
    async function handleDeleteStudent(studentId){
     const studentDoc =  doc(db,'students', studentId)
     await deleteDoc(studentDoc)
      setStudents(students.filter((student)=> student.id !== studentId))
    }

    //close Update Dialog
    function handleDialogClose(){
      setEditDialogOpen(false)
      setCurrentStudent(null)
    }

    //handle change in dialog values
    function handleChange(event){
      const {name,value} = event.target
      setCurrentStudent((prev)=> (
        {
          ...prev,
          [name]:value,
        }
      ) )
    }    

    async function handleSaveStudent(){
     const studentDoc =  doc(db, 'students',currentStudent.id);
     await updateDoc(studentDoc,{
      name:currentStudent.name,
      age:currentStudent.age
     })
    //  1 logic
     setStudents((student)=> student.id === currentStudent.id ? currentStudent: student)
    //  2 logic 
    //  setStudents(students.map((student)=> student.id === currentStudent.id ? currentStudent: student ))
     handleDialogClose()
    }

  return (
    <>
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
  <UpdateStudentDialog 
  editDialogOpen={editDialogOpen} 
  currentStudent={currentStudent } 
  handleDialogClose={handleDialogClose}
  handleChange={handleChange}
  handleSaveStudent={handleSaveStudent}/>
    </>
  );
}


