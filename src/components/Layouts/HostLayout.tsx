import { NavLink, Outlet } from "react-router"

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    

    return (
        <>
            <nav className="host-navbar">
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="host-vans"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}