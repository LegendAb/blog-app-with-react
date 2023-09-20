import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("legend");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false)
            });
        }, 1000);        
    }, []);

    
    return ( 
        <div className="home">
            { loading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'legend')} title="Legend's blogs" /> */}
            {/* <button onClick={() => setName("abraham")}>change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;