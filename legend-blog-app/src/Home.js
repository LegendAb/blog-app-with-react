import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog website', body: 'lorem ipsum...', author: 'legend', id: 1},
        { title: 'Welcome to the blog!', body: 'lorem ipsum...', author: 'sarah', id: 2},
        { title: 'Web dev top tips for beginners', body: 'lorem ipsum...', author: 'legend', id: 3}
    ]);

    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'legend')} title="Legend's blogs" />
        </div>
     );
}
 
export default Home;