import { Link } from "react-router"

export default function NotFound() {
    return (
        <main>
            <section className="not-found-container">
                <h2>
                    Sorry, the page you were <br/> looking for was not found.
                </h2>
                <Link
                    to="/"
                >
                    Return to home
                </Link>
            </section>
        </main>
    )
}