import { useOutletContext } from "react-router"
import { Van } from "../../types"

export async function loader() {
    return null
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