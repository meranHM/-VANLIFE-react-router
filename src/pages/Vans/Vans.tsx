import { useEffect, useState } from "react"
import {Van} from '../../types.ts'
import { Link } from "react-router"

export default function Vans() {
    const [vansList, setVansList] = useState<Van[]>([])


    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansList(data.vans))
    }, [])

    const vanElements = vansList.map((vanObj) => {
        const vanType = vanObj.type
        const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)
        
        return (
            <article
                key={vanObj.id} 
                className="van-card"
            >
                <Link 
                    to={`/vans/${vanObj.id}`} 
                    aria-label={`View details for ${vanObj.name}, priced at ${vanObj.price} per day`}
                >   
                    <div className="van-picture">
                        <img src={vanObj.imageUrl} alt={`Image of ${vanObj.name}`} />
                    </div>
                    <div className="van-info">
                        <h3 className="van-name">{vanObj.name}</h3>
                        <div className="van-price-container">
                            <span className="van-price">${vanObj.price}</span>
                            <span className="per-day">/day</span>
                        </div>
                    </div>
                    <span className={`van-type ${vanObj.type}`}>
                        {capVanType}
                    </span>
                </Link>    
            </article>
        )
    })

    return (
        <main className="vans-main">
            <h2 className="vans-header">Explore our van options</h2>
            
            <section className="vans-filter-container">
                <div className="vans-filters">
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                </div>
                <div>
                    <button className="vans-clear-filter-btn">
                        Clear filters
                    </button>
                </div>
            </section>
            <section className="van-cards-container">
                {vanElements}
            </section>
        </main>
    )
}