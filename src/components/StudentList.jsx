import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import {db} from '../firebaseConfig'
import StudentTable from './StudentTable'

function StudentList({students}) {
  return (
    <>
    <h1>Student List</h1>
    <StudentTable students={students}/>
    </>
  )
}

export default StudentList
