'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'
export default function AddPost() {
    const router = useRouter()
    const [modal,setModal]= useState(false)
    const [inputs,setInputs]= useState({})

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('/api/posts',inputs)
        .then(res =>{
          
        }).catch(err =>{
            
        }).finally(()=>{
            setInputs({});
            setModal(false)
            router.refresh()
        })
    }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prev =>({...prev, [name] : value}))
    }
  return (
    <div>
      <button
        onClick={() => setModal(true)}
        className="btn btn-primary capitalize"
      >
        Create Post
      </button>
      <Modal modal={modal} setModal={setModal}>
        <form
          className="flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl pb-3">Add New Post </h1>
          <div className="grid grid-cols-1 w-full min-w-[300px] gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="description"
              
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
