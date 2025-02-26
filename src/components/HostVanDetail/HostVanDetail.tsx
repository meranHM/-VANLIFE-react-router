import { useVanDetailContext } from "../../context"

export default function HostVanDetail() {
    const vanDetail = useVanDetailContext()
    const vanType = vanDetail.type
    const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)

    return (
        <>
            <article className="host-van-detail-container">
                <div className="host-van-detail-card">
                    <img 
                        src={vanDetail.imageUrl} 
                        alt={`Image of ${vanDetail.name}`} 
                    />
                    <div className="host-van-detail-info">
                    <span 
                        className={`van-type ${vanDetail.type}`}
                    >
                        {capVanType}
                    </span>
                    <h2 className="host-van-detail-name">
                        {vanDetail.name}
                    </h2>
                    <p className="host-van-detail-price">
                        ${vanDetail.price}
                        <span className="per-day">/day</span>
                    </p>
                    </div>
                </div>
            </article>
        </>
    )
}