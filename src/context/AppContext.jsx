import React, { createContext } from 'react'
import { useState } from 'react';
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();


export default function AppContextProvider({children}) {

    const [Loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling 
    

    async function fetchBlogPost(page = 1, tag=null, category) {
    
        setLoading(true);
       let url=`${baseUrl}?page=${page}`
       if(tag){
        url+=`&tag${tag}`;
       }
       if(category){
        url+=`&category=${category}`;
       }

        console.log(url);

        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

            setPage(data.page);
        }
        catch (error) {
            console.log('There has been a problem with your fetch operation:');
            setPage(1)
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    };
  
    function HandlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);

    }


    const value = {
        Loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        HandlePageChange,

        // other props if needed


    }
 
    return <AppContext.Provider value={value}
    >{children}</AppContext.Provider>
}
