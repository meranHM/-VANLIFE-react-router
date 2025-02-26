import { useVanDetailContext } from "../../../context"

export default function Photos() {
    const vanDetail = useVanDetailContext()

    return (
        <section className="host-van-detail-photos">
            <img src={vanDetail.imageUrl} alt={`Image of ${vanDetail.name}`} />
        </section>
    )
}