import { useVanDetailContext } from "../../../context"


export default function Details() {
    const vanDetail = useVanDetailContext()
    const vanType = vanDetail.type
    const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)

    return (
        <section className="host-van-detail-desc">
            <p><span className="bold">Name:</span> {vanDetail.name}</p>
            <p><span className="bold">Category:</span> {capVanType}</p>
            <p><span className="bold">Description:</span> {vanDetail.description}</p>
            <p><span className="bold">Visibility:</span> Public</p>
        </section>
    )
}