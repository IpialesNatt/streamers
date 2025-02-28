import "./Contact.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";


function Contact(){
    return(
        <>
        <Header/>
        <p>Unete a nuestra comunidad y enterate de todas las actividades que realizamos</p>
        <Form/>
       <p>Puedes ponerte en contacto con nosotros</p> 
       <div>
        <p>Telefono: +34 620 25 87 73</p>
        <p>Email: pescapp@gmail.com</p>
        <p>Dirección: Calle de la Playa 2, 35460, Galdar</p>
       </div>

        <Footer/>
        </>
    )
}
export default Contact