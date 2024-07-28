import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import {db} from './firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useState,useEffect  } from 'react'


function App() {
  
  const [students, setStudents] = useState([])

    const getStudents = async () => {
  const studentsCollection =  collection(db, 'students')

        const studentsSnapshot = await getDocs(studentsCollection)

     const studentList = studentsSnapshot.docs.map(doc => (
            {
                id:doc.id,
                ...doc.data()
            }
        ))
        console.log(studentList);
       setStudents(studentList)
    }

    useEffect(() => {
      getStudents()
  },[students])



  return (
    <>
    <div className='app-container'>
      <h1 className='app-title'>Student Management System</h1>
      <CreateStudent getStudents={getStudents}/>
      <StudentList students={students} setStudents={setStudents} getStudents={getStudents}/>
    </div>
    </>
  )
}

export default App
