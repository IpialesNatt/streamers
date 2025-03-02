import "./Community.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Equipment from "../../components/equipment/Equipment";


function Community() {
    return (
        <>
            <Header />
            <div>
                <p>En esta sección encontraras una amplia variesdad de materiales y equipamiento de pesca exclusivas para nuestros miembros</p>
                <Equipment />
            </div>
            <Footer />
        </>
    )
}
export default Community