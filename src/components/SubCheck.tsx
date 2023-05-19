import { Checkbox } from "@mui/material"

type PropsType = {
    sub_item: string,
    checked: boolean
}

export default function SubCheck(
    { sub_item, checked }
        : PropsType) {
    return (
        <div className={`sub_departments ${checked ? "" : "hide"}`}>
            <Checkbox />
            <label>
                {sub_item}
            </label>
        </div>
    )
}
