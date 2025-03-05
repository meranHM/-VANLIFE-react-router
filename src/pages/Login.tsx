import { Link, LoaderFunctionArgs, useLoaderData } from "react-router"
import { useState } from "react"

export function loader({ request }: LoaderFunctionArgs) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "", password: ""
    })
    const loginWarning = useLoaderData()

    function handleSubmit(formData: FormData) {
        const email = formData.get("email")
        console.log(email)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main>
            <section className="login-form-container">
                <h2> Sign in to your account</h2>
                <h3>{loginWarning}</h3>
                <form action={handleSubmit}>
                    <input
                        className="email-input"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        value={loginFormData.email}
                    />
                    <input
                        className="password-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={loginFormData.password}
                    />
                    <button>Sign in</button>
                </form>
                <p>
                    Don't have an account?
                    <Link to=".">
                        Create one now
                    </Link>
                </p>
            </section>
        </main>
    )
}