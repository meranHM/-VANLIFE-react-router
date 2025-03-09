import { useRouteError } from "react-router"
import { LoginError } from "../types"

export default function Error() {
    const error = useRouteError() as LoginError

    return (
        <main>
            <section className="error-container">
                <h2>Error: {error.message || "An unexpected error occured"}</h2>
                {error.status && <p>Status: {error.status} - {error.statusText}</p>}
            </section>
        </main>
    )
}