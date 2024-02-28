import { useState } from "react";
import BlogList from "./BlogList";

const Props = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: 'My Website', author: 'BS', id: 1}
        ]
    );
    
    return(
        <div className="props">
            <BlogList blogs = {blogs} title = 'All blogs' />
        </div>
    );
}

export default Props;