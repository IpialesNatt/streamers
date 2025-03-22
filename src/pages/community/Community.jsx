import "./Community.css";
import Equipment from "../../components/equipment/Equipment";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


function Community() {
    return (
        <>
         <Header />
            <div className="community-container">
                <p>En esta sección encontraras una amplia variesdad de materiales y equipamiento de pesca exclusivas para nuestros miembros</p>
                <Equipment />
            </div>
           <Footer />
        </>
    )
}
export default Community