import { Checkbox } from "@mui/material"

export default function SubCheck({ sub_item, checked }: {
    sub_item: string, checked: boolean
}) {
    return (
        <div className={`sub_departments ${checked ? "" : "hide"}`}>
            <Checkbox />
            <label>{sub_item}</label>
        </div>
    )
}
