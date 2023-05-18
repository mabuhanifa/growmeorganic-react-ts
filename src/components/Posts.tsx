import { useEffect } from "react";
import { useStore } from "../contextAPI/Context";

export default function Posts() {
    const { state: { posts }, dispatch } = useStore();
    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            dispatch({
                type: "ADD_POSTS",
                payload: data
            })
        }
        loadPosts();
    }, [dispatch])
    return (
        <div>
            {
                posts && posts.map(post => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            }
        </div>
    )
}
