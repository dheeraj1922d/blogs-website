import react, { useState } from 'react'
import { baseUrl } from '../baseUrl';

export const AppContext = react.createContext();

export const AppContextProvider=({children})=>{
    const [page, setPage] = useState(1);
    const [isLoading, setisLoading] = useState(false)
    const [totalPage, settotalPage] = useState(null)
    const [posts , setPosts] = useState([])

    const getPost=async (page=1)=>{
        setisLoading(true);
        const url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url);
            const data = await result.json();

            console.log(data);
            setPage(data.page);
            settotalPage(data.totalPages);
            setPosts(data.posts);

            setisLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }


    const changePage=(page)=>{
        setPage(page);
        getPost(page);
    }


    const value ={
        page,
        setPage,
        isLoading,
        setisLoading,
        totalPage,
        settotalPage,
        posts,
        setPosts,
        getPost,
        changePage,


    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}