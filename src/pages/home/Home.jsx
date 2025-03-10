import "./Home.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import home from "../../assets/homeprincipal.jpg"
import Opinions from "../../components/opinions/Opinions";
import News from "../../components/news/News";


function Home() {
    return (
        <div className="container">
            <Header />
            <img src={home} className="home-image" />
            <News />
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/z6l--c1yGJ0"
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <h2>Opiniones de nuestros clientes</h2>
            <Opinions />
            <Footer />
        </div>
    )
}
export default Home