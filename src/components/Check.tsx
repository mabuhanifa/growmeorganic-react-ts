import { Checkbox } from "@mui/material";
import { useState } from "react";
import SubCheck from "./SubCheck";

export default function Check({ item }: {
    item: {
        department: string;
        sub_departments: string[];
    },
}) {
    const [checked, setChecked] = useState(false);
    return (
        <div >
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            <label>{item.department}</label>
            {item.sub_departments.map((sub_item, index: number) => {
                return (
                    <SubCheck sub_item={sub_item} checked={checked} key={index} />
                )
            })}
        </div>
    )
}
