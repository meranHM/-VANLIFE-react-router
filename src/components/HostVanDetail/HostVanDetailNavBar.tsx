import { NavLink } from "react-router"

export default function HostVanDetailNavBar() {
    const activeStyle = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-van-detail-navbar">
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Details
                </NavLink>

                <NavLink 
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Pricing
                </NavLink>

                <NavLink 
                    to="photos"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Photos
                </NavLink>
            </nav>
        </>
    )
}