import { Link } from "react-router"

export default function Home() {
    return (
        <main className="home-main">
            <section className="home-hero">
                <h2>
                    You got the travel plans, we <br /> 
                    got the travel vans.
                </h2>
                <p>
                    Add advanture to your life by joining the #vanlife movement.<br />
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link to="/vans">Find your van</Link>
            </section>
        </main>
    )
}