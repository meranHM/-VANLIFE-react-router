import { Link, useLoaderData } from "react-router"
import { Van } from "../../types"
import { getHostVans } from "../../api"


export async function loader() {
    return getHostVans()
}

export default function HostVans() {
    const hostVans: Van[] = useLoaderData()

    const hostVansElements = hostVans.map(vanObj => {
        return (
            <Link 
                key={vanObj.id}
                to={vanObj.id}
            >
                <article 
                className="host-van-card"
            >
                    <div className="host-van-picture">
                        <img 
                            src={vanObj.imageUrl} 
                            alt={`Image of ${vanObj.name}`}
                        />
                    </div>
                    <div className="host-van-info">
                        <h3 className="host-van-name">{vanObj.name}</h3>
                        <p className="host-van-price">${vanObj.price}<span className="per-day">/day</span></p>
                    </div>
                </article>
            </Link>
        )
    })

    return (
        <main className="host-vans-main">
                <h2 className="host-vans-header">Your listed vans</h2>
                <div className="host-vans-container">
                    {hostVansElements}
                </div>
        </main>
    )
}