import { useState, useEffect } from "react"
import { Outlet, useParams, Link } from "react-router"
import { Van } from "../../types.ts"
import { VanDetailContext } from "../../context.ts"
import { ArrowLeft } from "lucide-react"
import HostVanDetail from "../HostVanDetail/HostVanDetail.tsx"
import HostVanDetailNavBar from "../HostVanDetail/HostVanDetailNavBar.tsx"


export default function HostVanDetailLayout() {
    const [hostVanDetail, setHostVanDetail] = useState<Van | null>(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/host/host-vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVanDetail(data.vans[0]))
            .catch(err => console.error("Failed to fetch van details:", err))
    }, [params.id])

    if (!hostVanDetail) {
        return <p>Loading ...</p>
    }

    return (
        <>
        <div className="host-van-detail-back-btn">
            <Link 
                to=".."
                relative="path"            
            >
                <div><ArrowLeft size={20}/></div>
                <p>Back to all vans</p>
            </Link>
        </div>
        <main className="host-van-detail-main">
            <VanDetailContext value={hostVanDetail}>
                <HostVanDetail />
                <HostVanDetailNavBar />
                <Outlet />
            </VanDetailContext>
        </main>
        </>
    )
}