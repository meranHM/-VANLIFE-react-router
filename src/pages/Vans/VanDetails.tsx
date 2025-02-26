import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"
import { Van } from '../../types.ts'
import { ArrowLeft } from "lucide-react"

export default function VanDetails() {
    const [vanDetail, setVanDetail] = useState<Van | null>(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))
            .catch(err => console.error("Failed to fetch van details:", err))
    }, [params.id])

    if (!vanDetail) {
        return <p>Loading ...</p>
    }
    
    const vanType = vanDetail.type
    const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)

    return (
        <main className="van-detail-main">
            <div className="van-detail-back-btn">
                <Link 
                    to=".."
                    relative="path"
                >
                    <div><ArrowLeft size={20}/></div>
                    <p>Back to all vans</p>
                </Link>
            </div>
            <article className="van-detail-container">
                <img 
                    src={vanDetail.imageUrl} 
                    alt={`Image of ${vanDetail.name} van`} 
                />
                <span 
                    className={`van-type ${vanDetail.type}`}
                >
                        {capVanType}
                </span>
                <div className="van-detail-info">
                    <h2 className="van-detail-name">
                        {vanDetail.name}
                        </h2>
                    <p className="van-detail-price">
                        ${vanDetail.price}
                        <span className="per-day">/day</span>
                    </p>
                </div>
                <p className="van-detail-desc">
                    {vanDetail.description}
                </p>
                <button className="van-detail-rent-btn">
                    Rent this van
                </button>
            </article>
        </main>
    )
}