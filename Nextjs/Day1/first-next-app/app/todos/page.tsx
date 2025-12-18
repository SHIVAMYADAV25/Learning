"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { get } from 'http';

async function getTodo(){
  let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
}

interface Itodo {
  title : String;
  completed : boolean;
}
async function page(){

  let todo = await getTodo();

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200 text-black min-h-screen'>
      {todo.map((TodoInter : Itodo) => <Todo title={TodoInter.title} completed={TodoInter.completed}/>)}
    </div>
  )
}


function Todo(todo : Itodo){
  return (
    <div>
      {todo.title} {todo.completed ? "done" : "not Done"}
    </div>
  )
}
export default page

