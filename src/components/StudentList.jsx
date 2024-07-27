import React from 'react'
import {  useEffect } from 'react'
import StudentTable from './StudentTable'

function StudentList({students,setStudents}) {


  return (
    <>
    <h1>Student List</h1>
    
    <StudentTable students={students} setStudents={setStudents}/>
    </>
  )
}

export default StudentList
