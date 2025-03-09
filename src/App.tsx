import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetails"
import Dashboard, { loader as dashboardLoader} from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/Dashboard"
import HostVanPricing from "./pages/Host/Pricing"
import HostVanPhotos from "./pages/Host/Photos"
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import Layout from "./components/Layouts/Layout"
import HostLayout from "./components/Layouts/HostLayout"
import Error from "./components/Error"
import { requireAuth } from "./utils"

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      errorElement={<Error />}
      loader={vanDetailLoader}
    />

    <Route 
      path="host" 
      element={<HostLayout />}
    >
      <Route
        index
        element={<Dashboard />}
        errorElement={<Error />}
        loader={dashboardLoader}
      />
      <Route
        path="income"
        element={<Income />}
        errorElement={<Error />}
        loader={requireAuth}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        errorElement={<Error />}
        loader={requireAuth}
      />
      <Route
        path="host-vans"
        element={<HostVans />}
        errorElement={<Error />}
        loader={hostVansLoader}
      />
      <Route
        path="host-vans/:id"
        element={<HostVanDetail />}
        errorElement={<Error />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          errorElement={<Error />}
          loader={requireAuth}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          errorElement={<Error />}
          loader={requireAuth}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          errorElement={<Error />}
          loader={requireAuth}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

