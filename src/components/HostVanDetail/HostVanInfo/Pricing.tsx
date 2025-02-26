import { useVanDetailContext } from "../../../context"

export default function Pricing() {
    const vanDetail = useVanDetailContext()

    return (
        <section className="host-van-detail-pricing">
            <p>
                ${vanDetail.price}.00<span className="per-day">/day</span>
            </p>
        </section>
    )
}