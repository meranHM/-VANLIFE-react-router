import { useOutletContext } from "react-router"
import { Van } from "../../types"

export async function loader() {
    return null
}

export default function Photos() {
    const { vanDetail } = useOutletContext<{vanDetail: Van}>()

    return (
        <section className="host-van-detail-photos">
            <img src={vanDetail.imageUrl} alt={`Image of ${vanDetail.name}`} />
        </section>
    )
}