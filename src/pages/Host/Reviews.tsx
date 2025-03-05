import { requireAuth } from "../../utils"


export async function loader() {
    return await requireAuth()
}

export default function Reviews() {
    return (
        <h3>Reviews component here!</h3>
    )
}