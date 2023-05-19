import { useEffect } from "react";
import { useDispatch } from "../contextAPI/hooks";
import data from "../data/data.json";
import Check from "./Check";
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
        };
        loadPosts();
    }, [dispatch]);
    return (
        <div>
            <div className="dataTable">
                <DataTable />
            </div>
            <div className="checkBoxes">
                <div>
                    <div className="checkBoxes-container">
                        {data.map((item, index: number) => {

                            return (
                                <Check key={index} item={item} />
                            )

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
