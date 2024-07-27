import React from 'react'
import {  useEffect } from 'react'
import StudentTable from './StudentTable'

function StudentList({students,setStudents}) {


  return (
    <>
    <h1>Student List</h1>
    {/* <div className='students-list'>
    {students && students.map((student) =>{
      return <div key={student.id} className='student'>
        <h2>{student.name}</h2>
        <p>Age: {student.age}</p>
      </div>
    })}
    </div> */}
    <StudentTable students={students} setStudents={setStudents}/>
    </>
  )
}

export default StudentList
