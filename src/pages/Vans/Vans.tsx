import { useEffect, useState } from "react"
import {Van} from '../../types.ts'
import { useSearchParams, Link } from "react-router"

export default function Vans() {
    const [vansList, setVansList] = useState<Van[]>([])
    const [searchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const filteredVans = 
            typeFilter 
            ? vansList.filter(vanObj => vanObj.type === typeFilter)
            : vansList

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansList(data.vans))
    }, [])

    const vanElements = filteredVans.map((vanObj) => {
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
                    <i className={`van-type ${vanObj.type} selected`}>
                        {capVanType}
                    </i>
                </Link>    
            </article>
        )
    })

    return (
        <main className="vans-main">
            <h2 className="vans-header">Explore our van options</h2>
            
            <section className="vans-filter-container">
                <div className="vans-filters">
                    <Link 
                        to="?type=simple"
                        className="van-type simple"
                    >
                        Simple
                    </Link>
                    <Link 
                        to="?type=luxury"
                        className="van-type luxury"
                    >
                        Luxury
                    </Link>
                    <Link 
                        to="?type=rugged"
                        className="van-type rugged"
                    >
                        Rugged
                    </Link>
                </div>
                <div>
                    <Link 
                        to="."
                        className="vans-clear-filter-btn">
                        Clear filters
                    </Link>
                </div>
            </section>
            <section className="van-cards-container">
                {vanElements}
            </section>
        </main>
    )
}