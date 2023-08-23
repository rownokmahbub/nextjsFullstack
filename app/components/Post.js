'use client'
import React, { useState } from 'react'
import {BiMessageSquareEdit} from 'react-icons/bi'
import { MdOutlineDelete } from "react-icons/md";
import Modal from './Modal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Post({post}) {
    const router = useRouter();
    const [edit,setEdit] =useState(false);
    const [postedit,setPostEdit] = useState(post);
    const [modaldelete,setModalDelete]= useState(false)
    const handleEditSubmit =(e)=>{
      e.preventDefault();
      axios
        .patch(`/api/posts/${post.id}`, postedit)
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
          
          setEdit(false);
          router.refresh();
        });
    }
     const handleChange = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       setPostEdit((prev) => ({ ...prev, [name]: value }));
     };
     const handleDeletePost = (id)=>{
         
         axios
           .delete(`/api/posts/${id}`)
           .then((res) => {})
           .catch((err) => {})
           .finally(() => {
             setEdit(false);
             router.refresh();
           });
     }
  return (
    <div
      className="p-3 my-5 bg-slate-700 rounded-xl flex justify-between items-start"
      key={post.id}
    >
      <div>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-base">{post.description}</p>
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => setEdit(true)}
          className="btn btn-success btn-sm capitalize"
        >
          {" "}
          <BiMessageSquareEdit />{" "}
        </button>
        {/* edit modal will be here */}

        <Modal modal={edit} setModal={setEdit}>
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={handleEditSubmit}
          >
            <h1 className="text-2xl pb-3">Add New Post </h1>
            <div className="grid grid-cols-1 w-full min-w-[300px] gap-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="title"
                value={postedit.title || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="description"
                value={postedit.description || ""}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </Modal>

        <button
          onClick={() => setModalDelete(true)}
          className="btn btn-error btn-sm capitalize"
        >
          {" "}
          <MdOutlineDelete />{" "}
        </button>

        <Modal modal={modaldelete} setModal={setModalDelete}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-red-400 text-2xl pb-3">
              Are you Sure Want to Delete this post?
            </h1>
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => handleDeletePost(post.id)}
                className="btn btn-error btn-sm capitalize"
              >
                Yes
              </button>
              <button
                onClick={() => setModalDelete(false)}
                className="btn btn-secondary btn-sm capitalize"
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
