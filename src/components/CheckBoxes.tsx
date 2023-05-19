import data from "../data/data.json"
import Check from "./Check"
export default function CheckBoxes() {

    return (
        <div>
            {data.map((item, index) => {

                return (
                    <Check key={index} item={item} />
                )

            })}

        </div>
    )
}
