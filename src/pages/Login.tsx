import { 
    Link, 
    LoaderFunctionArgs, 
    useLoaderData, 
    Form, 
    ActionFunctionArgs,
    useActionData,
    useNavigation
} from "react-router"
import { redirect } from "../mutate"
import { loginUser } from "../api"
import { LoginError } from "../types"


export function loader({ request }: LoaderFunctionArgs) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    
    try {
        await loginUser({email, password})
        localStorage.setItem("loggedin", "true")
        const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

        return redirect(pathname)
    } catch (err) {
        if (err) {
            if (typeof err === "object" && err !== null && "message" in err) {
                return (err as LoginError).message
            }
        }
    }
}

export default function Login() {
    const navigation = useNavigation()
    const errorMessage = useActionData()
    const loginWarning = useLoaderData()

    
    return (
        <main>
            <section className="login-form-container">
                <h2> Sign in to your account</h2>
                {loginWarning && <h3 className="login-warning">{loginWarning}</h3>}
                {errorMessage && <h3 className="login-warning">{errorMessage}</h3>}
                
                <Form
                    method="post"
                    replace
                >
                    <input
                        className="email-input"
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                    <input
                        className="password-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button disabled={navigation.state === "submitting"}>
                        {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                <p className="create-account">
                    Don't have an account?
                    <Link to=".">
                        Create one now
                    </Link>
                </p>
            </section>
        </main>
    )
}