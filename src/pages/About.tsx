import AboutBg from './../assets/about-bg.png'
import { Link } from 'react-router'

export default function About() {
    return (
        <main className="about-main">
            <section className="about-hero">
                <img src={AboutBg} alt="A man sitting on a camper van" />
            </section>
            <section className="about-desc">
                <h2>
                    Don’t squeeze in a sedan when you could relax in a van.
                </h2>
                <p className="first-p">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="second-p">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </section>
            <section className="about-promotion">
                <h3>
                    Your destination is waiting.<br />
                    Your van is ready.
                </h3>
                <Link to="/vans">Explore our vans</Link>
            </section>
        </main>
    )
}