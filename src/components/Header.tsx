import { Link, NavLink } from "react-router"
import AvatarIcon from './../assets/avatar-icon.png'
import { X } from "lucide-react"

export default function Header() {
    const activeStyle = {
        fontWeight: "700",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <section className="header-container">
                <div>
                    <Link to="/">
                        <h1>#VANLIFE</h1>
                    </Link>
                </div>
                <nav className="main-navbar">
                    <NavLink 
                        to="/host"
                        style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to="/about"
                        style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/vans"
                        style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Vans
                    </NavLink>
                    <Link to="login" className="login-link">
                        <img 
                            src={AvatarIcon} 
                            alt="avatar icon" 
                            className="login-icon"
                        />
                    </Link>
                    <button 
                        onClick={() => localStorage.clear()}
                    >
                        <X />
                    </button>
                </nav>
            </section>
        </header>
    )
}