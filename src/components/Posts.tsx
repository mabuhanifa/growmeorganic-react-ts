import { useEffect, useState } from "react";
import { type Posts } from "../types/types";

export default function Posts() {
    const [posts, setPosts] = useState<Posts[]>([]);


    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        loadPosts();
    }, [])
    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            }
        </div>
    )
}
