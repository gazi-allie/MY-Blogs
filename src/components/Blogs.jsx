import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
// import { useContext } from 'react'
import{Loader} from './Loader'
 

export const Blogs = () => {
    const { posts, Loading } = useContext(AppContext);
  
    console.log('posts are here :', posts); // Add this line to check the structure of posts
  
    return (
      <div className="flex flex-col mt-12 mb-20 gap-y-10 max-w-2xl mx-auto overflow-auto">
        {/* <Loader/> */}
        {Loading ? (
          <Loader />
        ) : posts.length === 0 ? (
          <div >
    
            <p className='text-amber-900 '>No Post Found</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <p className='text-rose-600 text-xl font-bold '>{post.title}</p>
              <p className='font-semibold'>
                By <span className='font-medium'>{post.author}</span> on <span>{post.category}</span>
              </p>
              <p>Posted on {post.date}</p>
              <p className='text-gray-950 font-medium'>{post.content}</p>
              <div className='text-sky-400  font-semibold underline  '>
                {post.tags.map((tag, index) => (
                  <span key={index}>{` #${tag}`}</span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
export default Blogs
