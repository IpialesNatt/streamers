import "./Home.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import home from "../../assets/homeprincipal.jpg"
import Opinions from "../../components/opinions/Opinions";


function Home() {
    return (
        <div className="container">
            <Header />
            <img src={home} className="home-image" />
            <h2>Opiniones de nuestros clientes</h2>
            
            <Opinions/>
            <Footer />
        </div>
    )
}
export default Home