import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import {db} from '../firebaseConfig'
function CreateStudent() {

    const [name, setName] = useState("")
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
            name:name,
             age:Number(age)
          })
          setIsCreatingStudent(false)
          setName("")
          setAge("")
          
        }catch(error){
            console.log("Error creating user: " + error)
            setIsCreatingStudent(false)
        }
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} placeholder='Enter student name' required/>
        <input type="number"  value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter student age' required/>
        <button type='submit' onClick={handleSubmit}>{isCreatingStudent ? 'Creating...' : "Create User"} </button>
      </form>
    </div>
  )
}

export default CreateStudent
      