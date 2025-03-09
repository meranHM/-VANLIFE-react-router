import { Link, useLocation, LoaderFunctionArgs } from "react-router"
import { Van } from '../../types.ts'
import { ArrowLeft } from "lucide-react"
import { useLoaderData } from "react-router"
import { getVan } from "../../api.ts"

export async function loader({ params }: LoaderFunctionArgs) {
    if (!params.id) {
        throw new Error("Van ID is required")
    }
    return await getVan(params.id)
}

export default function VanDetails() {
    const location = useLocation()
    const vanDetail: Van = useLoaderData()

    const vanType = vanDetail.type
    const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)
    const search = location.state?.search || ""
    const searchType = location.state?.type || "all"

    return (
        <main className="van-detail-main">
            <div className="van-detail-back-btn">
                <Link 
                    to={`..${search}`}
                    relative="path"
                >
                    <div><ArrowLeft size={20}/></div>
                    <p>Back to {searchType} vans</p>
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