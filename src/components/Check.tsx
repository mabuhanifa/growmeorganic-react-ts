import { Checkbox } from "@mui/material";
import { useState } from "react";
import { DepartmentItem } from "../types/types";
import SubCheck from "./SubCheck";

type PropsType = {
    item: DepartmentItem
}

export default function Check({ item }: PropsType) {
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
