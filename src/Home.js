// import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   
//    const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog=> blog.id !== id)
//         setBlogs(newBlogs);
//    }
    return (
        <div className="Home">
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title='Blog Post' />}
        </div> 
    );
}
 
export default Home;