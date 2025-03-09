import { NavLink, useLoaderData, Link, Outlet, LoaderFunctionArgs } from "react-router"
import { ArrowLeft } from "lucide-react"
import { getVan } from "../../api"
import { requireAuth } from "../../utils"


export async function loader({params, request}: LoaderFunctionArgs) {
    const authResult = await requireAuth({ request })
    if (authResult) return authResult

    if (!params.id) {
        throw new Error("Van ID is required")
    }

    return getVan(params.id)
}

export default function HostVanDetail() {
    const currentVan = useLoaderData()
    console.log(currentVan)


    const activeStyle = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    const vanType = currentVan.type
    const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)

    return (
        <>
            <div className="host-van-detail-back-btn">
                <Link 
                    to=".."
                    relative="path"            
                >
                    <div><ArrowLeft size={20}/></div>
                    <p>Back to all vans</p>
                </Link>
            </div>
            <article className="host-van-detail-container">
                <div className="host-van-detail-card">
                    <img 
                        src={currentVan.imageUrl} 
                        alt={`Image of ${currentVan.name}`} 
                    />
                    <div className="host-van-detail-info">
                    <span 
                        className={`van-type ${currentVan.type}`}
                    >
                        {capVanType}
                    </span>
                    <h2 className="host-van-detail-name">
                        {currentVan.name}
                    </h2>
                    <p className="host-van-detail-price">
                        ${currentVan.price}
                        <span className="per-day">/day</span>
                    </p>
                    </div>
                </div>
            </article>
            <nav className="host-van-detail-navbar">
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Details
                </NavLink>

                <NavLink 
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Pricing
                </NavLink>

                <NavLink 
                    to="photos"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Photos
                </NavLink>
            </nav>
            <Outlet context={{currentVan}}/>
        </>
    )
}