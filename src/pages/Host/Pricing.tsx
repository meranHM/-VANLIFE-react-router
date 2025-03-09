import { useOutletContext } from "react-router"
import { Van } from "../../types"
import { requireAuth } from "../../utils"

export async function loader({ request }: {request: Request}) {
    await requireAuth({request})
}

export default function Pricing() {
    const { vanDetail } = useOutletContext<{vanDetail: Van}>()

    return (
        <section className="host-van-detail-pricing">
            <p>
                ${vanDetail.price}.00<span className="per-day">/day</span>
            </p>
        </section>
    )
}