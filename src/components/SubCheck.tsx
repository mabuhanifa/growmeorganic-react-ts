
export default function SubCheck({ sub_item, sub_index, checked }: {
    sub_item: string, sub_index: number, checked: boolean
}) {
    return (
        <div key={sub_index} className={`sub_departments ${checked ? "" : "hide"}`}>
            <input type="checkbox" />
            <label>{sub_item}</label>
        </div>
    )
}
