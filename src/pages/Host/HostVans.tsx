import { Link } from "react-router"
import { useEffect, useState } from "react"
import { Van } from "../../types"



export default function HostVans() {
    const [hostVans, setHostVans] = useState<Van[]>([])

    useEffect(() => {
        fetch("/api/host/host-vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

    const hostVansElements = hostVans.map(vanObj => {
        return (
            <Link 
                key={vanObj.id}
                to={`/host/host-vans/${vanObj.id}`}
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
            
            { hostVans.length > 0 ? (
            <>
                <h2 className="host-vans-header">Your listed vans</h2>
                <div className="host-vans-container">
                    {hostVansElements}
                </div>
            </>
            ) : (
                <h2>Loading ...</h2>
            )}
        </main>
    )
}