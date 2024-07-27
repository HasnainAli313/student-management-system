import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import {db} from '../firebaseConfig'
function CreateStudent({getStudents}) {

    const [name, setName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [age, setAge] = useState("")
    const [isCreatingStudent ,setIsCreatingStudent] = useState(false)

    const handleSubmit = async(e)=> {
        e.preventDefault()
        setIsCreatingStudent(true)
        if(name === "" || age === ""){
          alert("Please enter name and age")
        }
        try{
          await addDoc(collection(db,'students'),{
            rollNo:Number(rollNo),
            name:name,
             age:Number(age)
          })
          setIsCreatingStudent(false)
          setRollNo("")
          setName("")
          setAge("")
          //get updated students
          await getStudents()
          
        }catch(error){
            console.log("Error creating user: " + error)
            setIsCreatingStudent(false)
        }
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
      <input type="number"  value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder='Enter student rollNo' required/>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} placeholder='Enter student name' required/>
        <input type="number"  value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter student age' required/>
        <button type='submit' onClick={handleSubmit}>{isCreatingStudent ? 'Creating...' : "Create User"} </button>
      </form>
    </div>
  )
}

export default CreateStudent
      