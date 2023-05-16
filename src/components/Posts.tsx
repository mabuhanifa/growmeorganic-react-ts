import { useEffect, useState } from "react";
import { type Posts } from "../types/types";

export default function Posts() {
    const [post, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            console.log(data);

        }
        loadPosts()

    }, [])
    return (
        <div>Posts</div>
    )
}
