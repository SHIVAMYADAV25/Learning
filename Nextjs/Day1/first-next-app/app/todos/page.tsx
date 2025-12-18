"use client"

import React, { useEffect, useState } from 'react'

const page = () => {

const [todo,setTodo] = useState([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result)=>{
    return result.json();
  }).then((newvalue)=>{
    console.log(newvalue);
    setTodo(newvalue);
  })
  .catch((er) => console.error(er));

  // console.log(to)
},[])

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200 text-black min-h-screen'>
      {todo.slice(0,30).map((t)=>(
        <p key={t.id} >{t.title}</p>
      ))}
    </div>
  )
}

export default page


// first fetch
// fetch returns the promise
// then take the promise and the use .then(parameter will be the return eg: response) in that return the response as response.json
// then use .then to console the json returned value and then set the todo using setTodo
// use .catch for error
// and the use the .map to render the data on by one