import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router"
import About from "./pages/About.tsx"
import Home from "./pages/Home.tsx"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.tsx"
import VanDetails, { loader as vanDetailsLoader } from "./pages/Vans/VanDetails.tsx"
import Dashboard from "./pages/Host/Dashboard.tsx"
import Income from "./pages/Host/Income.tsx"
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans.tsx"
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail.tsx"
import Reviews from "./pages/Host/Reviews.tsx"
import NotFound from "./pages/NotFound.tsx"
import Login, {loader as loginLoader} from "./pages/Login.tsx"
import Layout from "./components/Layouts/Layout.tsx"
import HostLayout from "./components/Layouts/HostLayout.tsx"
import Details from "./pages/Host/Details.tsx"
import Pricing from "./pages/Host/Pricing.tsx"
import Photos from "./pages/Host/Photos.tsx"
import Error from "./components/Error.tsx"
import "./server.js"
import { requireAuth } from "./utils.ts"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route 
      path="login" 
      element={<Login />}
      loader={loginLoader}
    />
    <Route 
      path="vans" 
      element={<Vans />} 
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetails />}
      loader={vanDetailsLoader}
    />
    <Route 
      path="host" 
      element={<HostLayout />}
      loader={async ({request}) => await requireAuth(request)}
    >
      <Route 
        index 
        element={<Dashboard />}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="reviews" 
        element={<Reviews />}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="host-vans" 
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route 
        path="host-vans/:id" 
        element={<HostVanDetail/>}
        loader={hostVanDetailLoader}
      >
        <Route 
          index 
          element={<Details />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route 
          path="pricing" 
          element={<Pricing />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route 
          path="photos" 
          element={<Photos />}
          loader={async ({request}) => await requireAuth(request)}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />}/>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}