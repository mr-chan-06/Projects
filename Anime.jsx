import Listitems from "./Listitems";
import { NARUTO_CHAR } from "./Naruto";
export default function Anime() {
    return (
        <div>
            {
                NARUTO_CHAR.map((value) => {
                    return <Listitems obj={value} />
                })
            }
        </div>
    )
}