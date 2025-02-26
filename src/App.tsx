import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./components/Layouts/Layout.tsx"
import HostLayout from "./components/Layouts/HostLayout.tsx"
import HostVanDetailLayout from "./components/Layouts/HostVanDetailLayout.tsx"
import About from "./pages/About.tsx"
import Home from "./pages/Home.tsx"
import Vans from "./pages/Vans/Vans.tsx"
import VanDetails from "./pages/Vans/VanDetails.tsx"
import Details from "./components/HostVanDetail/HostVanInfo/Details.tsx"
import Pricing from "./components/HostVanDetail/HostVanInfo/Pricing.tsx"
import Photos from "./components/HostVanDetail/HostVanInfo/Photos.tsx"
import Dashboard from "./pages/Host/Dashboard.tsx"
import Income from "./pages/Host/Income.tsx"
import HostVans from "./pages/Host/HostVans.tsx"
import Reviews from "./pages/Host/Reviews.tsx"
import "./server.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetails />}/>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="host-vans" element={<HostVans />}/>

            <Route path="host-vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<Details />}/>
              <Route path="pricing" element={<Pricing />}/>
              <Route path="photos" element={<Photos />}/>
            </Route>

            <Route path="reviews" element={<Reviews />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}