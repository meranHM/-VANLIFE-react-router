import { requireAuth } from "../../utils"
import { BsStarFill } from "react-icons/bs"
import { useLoaderData, Link, LoaderFunctionArgs } from "react-router"
import { Van } from "../../types"
import { getHostVans } from "../../api"


export async function loader({ request }: LoaderFunctionArgs) {
    const authResult = await requireAuth({ request })
    if (authResult) return authResult
    
    const data = await getHostVans()
    return data
}

export default function Dashboard() {
    const hostVans: Van[] = useLoaderData()

        const hostVansElements = hostVans.map( vanObj => {
            return (
                <div className="host-van-single" key={vanObj.id}>
                    <img src={vanObj.imageUrl} alt={`Photo of ${vanObj.name}`} />
                    <div className="host-van-info">
                        <h3>{vanObj.name}</h3>
                        <p>${vanObj.price}/day</p>
                    </div>
                    <Link to={`vans/${vanObj.id}`}>Edit</Link>
                </div>
                )
            })

    return (
        <main>
            <section className="dashboard-container">
                <section className="host-dashboard-earnings">
                    <div className="info">
                        <h2>Welcome!</h2>
                        <p>Income last <span className="days">30 days</span></p>
                        <h3>$2,260</h3>
                    </div>
                    <Link to="income">Details</Link>
                </section>
                <section className="host-dashboard-reviews">
                    <div className="host-dashboard-reviews-score">
                        <h2>Review score</h2>
                        <BsStarFill className="star" />
                        <p>
                            <span>5.0</span>/5
                        </p>
                    </div>
                    <Link to="reviews">Details</Link>
                </section>
                <section className="host-dashboard-vans">
                    <div className="top">
                        <h2>Your listed vans</h2>
                        <Link to="vans">View all</Link>
                    </div>
                    <div className="host-vans-list">
                            {hostVansElements}
                    </div>
                </section>
            </section>
        </main>
    )
}
