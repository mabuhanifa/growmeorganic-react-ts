import { Checkbox } from "@mui/material";
import { useState } from "react";
import SubCheck from "./SubCheck";

export default function Check({ item, index, }: {
    item: {
        department: string;
        sub_departments: string[];
    },
    index: number,
}) {
    const [checked, setChecked] = useState(false);
    return (
        <div key={index}>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            <label>{item.department}</label>
            {item.sub_departments.map((sub_item, sub_index) => {
                return (
                    <SubCheck key={sub_index} sub_item={sub_item} checked={checked} />
                )
            })}
        </div>
    )
}
