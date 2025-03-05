import { Van } from '../../types.ts'
import { useSearchParams, Link, useLoaderData } from "react-router"
import { getVans } from "../../api.ts"
import { useState } from 'react'

export async function loader() {
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error] = useState<Error | null>(null)
    const vansList: Van[] = useLoaderData()

    const typeFilter = searchParams.get("type")

    const filteredVans = 
            typeFilter 
            ? vansList.filter(vanObj => vanObj.type === typeFilter)
            : vansList

    const vanElements = filteredVans.map((vanObj) => {
        const vanType = vanObj.type
        const capVanType = vanType.charAt(0).toUpperCase() + vanType.slice(1)
        
        return (
            <article
                key={vanObj.id} 
                className="van-card"
            >
                <Link 
                    to={vanObj.id}
                    state={{ 
                        search: `?${searchParams.toString()}`,
                        type: typeFilter
                    }}
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


    if (error) {
        return <h2 aria-live="assertive">There was an error: {error.message}</h2>
    }


    return (
        <main className="vans-main">
            <h2 className="vans-header">Explore our van options</h2>
            <section className="vans-filter-container">
                <div className="vans-filters">
                    <button
                        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                        onClick={() => setSearchParams({type: "simple"})}
                    >
                        Simple
                    </button>
                    <button
                        className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                        onClick={() => setSearchParams({type: "luxury"})}
                    >
                        Luxury
                    </button>
                    <button
                        className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                        onClick={() => setSearchParams({type: "rugged"})}
                    >
                        Rugged
                    </button>
                </div>
                {typeFilter && (
                    <div>
                        <button 
                            className="vans-clear-filter-btn"
                            onClick={() => setSearchParams({})}
                        >
                                Clear Filters
                        </button>
                    </div>)}
            </section>
            <section className="van-cards-container">
                {vanElements}
            </section>
        </main>
    )
}