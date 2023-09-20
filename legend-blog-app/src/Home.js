import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const [name, setName] = useState("legend");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message) 
            })
        }, 1000);        
    }, []);

    
    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { loading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'legend')} title="Legend's blogs" /> */}
            {/* <button onClick={() => setName("abraham")}>change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;