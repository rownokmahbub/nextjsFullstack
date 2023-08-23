import Link from 'next/link';
import React from 'react'
async function getPostData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    await new Promise((resolve) => setTimeout(resolve,1000))
    return res.json();
}
async function getUserData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    await new Promise((resolve)=> setTimeout(resolve,1000))
    return res.json();
}
const Posts = async () => {
    // const posts= await getPostData()
    const [posts,users]= await Promise.all([getPostData(),getUserData()])
  return (
    <div>
      <h1 className="text-4xl mb-5">Post Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2  gap-5 mb-5">
        {users.map((user, i) => (
          <p className="bg-slate-700 rounded-xl p-5" key={i}>
            {user.name}
          </p>
        ))}
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2  gap-5">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li className="bg-slate-700 rounded-xl p-5 cursor-pointer">
              <h4 className="text-xl font-bold mb-3">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Posts