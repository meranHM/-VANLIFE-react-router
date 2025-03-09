import { useOutletContext } from "react-router"
import { Van } from "../../types"
import { requireAuth } from "../../utils"

export async function loader({ request }: {request: Request}) {
    await requireAuth({request})
}

export default function Photos() {
    const { vanDetail } = useOutletContext<{vanDetail: Van}>()

    return (
        <section className="host-van-detail-photos">
            <img src={vanDetail.imageUrl} alt={`Image of ${vanDetail.name}`} />
        </section>
    )
}