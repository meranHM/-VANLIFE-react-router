import { redirect } from "react-router"

export async function requireAuth(request: Request) {
    const isLoggedIn: boolean = false

    if (!isLoggedIn) {
        const url = new URL(request.url).pathname
        const params = new URLSearchParams()
        params.set("redirectTo", url)
  
        return redirect(`/login?${params}`)
    }

    return null;
}
