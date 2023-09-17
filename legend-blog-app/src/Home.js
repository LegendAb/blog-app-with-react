import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog website', body: 'lorem ipsum...', author: 'legend', id: 1},
        { title: 'Welcome to the blog!', body: 'lorem ipsum...', author: 'sarah', id: 2},
        { title: 'Web dev top tips for beginners', body: 'lorem ipsum...', author: 'legend', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    })

    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'legend')} title="Legend's blogs" /> */}
        </div>
     );
}
 
export default Home;