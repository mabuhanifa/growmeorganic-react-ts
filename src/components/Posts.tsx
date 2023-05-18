import { useEffect } from "react";
import { useDispatch } from "../contextAPI/Context";
import DataTable from "./DataTable";

export default function Posts() {
    const dispatch = useDispatch();
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
            <div className="dataTable">
                <DataTable />
            </div>
        </div>
    )
}
