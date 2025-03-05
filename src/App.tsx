import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router"
import About from "./pages/About.tsx"
import Home from "./pages/Home.tsx"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.tsx"
import VanDetails, { loader as vanDetailsLoader } from "./pages/Vans/VanDetails.tsx"
import Dashboard, { loader as hostDashboardLoader } from "./pages/Host/Dashboard.tsx"
import Income, { loader as hostIncomeLoader } from "./pages/Host/Income.tsx"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.tsx"
import Reviews, { loader as hostReviewsLoader } from "./pages/Host/Reviews.tsx"
import NotFound from "./pages/NotFound.tsx"
import Login from "./pages/Login.tsx"
import Layout from "./components/Layouts/Layout.tsx"
import HostLayout from "./components/Layouts/HostLayout.tsx"
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail.tsx"
import Details, { loader as hostVanInfoLoader } from "./pages/Host/Details.tsx"
import Pricing, { loader as hostVanPricingLoader } from "./pages/Host/Pricing.tsx"
import Photos, { loader as hostVanPhotosLoader } from "./pages/Host/Photos.tsx"
import Error from "./components/Error.tsx"
import "./server.js"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />}/>
  <Route path="about" element={<About />}/>
  <Route 
    path="login" 
    element={<Login />}
  />
  <Route 
    path="vans" 
    element={<Vans />} 
    loader={vansLoader} 
    errorElement={<Error />}
  />
  
  <Route 
    path="vans/:id" 
    element={<VanDetails />}
    loader={vanDetailsLoader}
  />

  <Route path="host" element={<HostLayout />}>
    <Route 
      index 
      element={<Dashboard />}
      loader={hostDashboardLoader}
    />
    <Route 
      path="income" 
      element={<Income />}
      loader={hostIncomeLoader}
    />
    <Route 
      path="reviews" 
      element={<Reviews />}
      loader={hostReviewsLoader}
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
        loader={hostVanInfoLoader}
      />
      <Route 
        path="pricing" 
        element={<Pricing />}
        loader={hostVanPricingLoader}
      />
      <Route 
        path="photos" 
        element={<Photos />}
        loader={hostVanPhotosLoader}
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