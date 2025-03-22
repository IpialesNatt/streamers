import "./Contact.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";


function Contact() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <p>Inicar sesion</p>
                <Form />
                <div>
                    <h1>Contacto</h1>
                    <p> +34 620 25 87 73</p>
                    <p> peskapp@gmail.com</p>
                    <p> Calle de la Playa 2, 35460, Galdar</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact