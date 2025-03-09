import { redirect } from "./mutate";

export async function requireAuth({ request }: {request: Request}) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  

  if (!isLoggedIn) {
    return redirect(`/login?message= You must log in first&redirectTo=${pathname}`); 
  }
  
  return null;
}
