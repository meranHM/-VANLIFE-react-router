import { requireAuth } from "../../utils"

export async function loader() {
    return await requireAuth()
}

export default function Income() {
    return (
        <h3>Income component here!</h3>
    )
}