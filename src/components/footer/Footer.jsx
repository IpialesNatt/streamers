import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-svg.svg";
import gmail from "../../assets/gmail.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import github from "../../assets/github.svg";

function Footer() {
    const enlaces = [
        {
            titulo: "ENLACES DE INTERÉS",
            items: [
                { name: "Turismo", url: "https://www.gobiernodecanarias.org/turismo/" },
                { name: "Licencias marítima", url: "https://www.gobiernodecanarias.org/pesca/temas/pesca_recreativa/tramitacion.html" },
                { name: "Tallas mínimas", url: "https://www.gobiernodecanarias.org/pesca/temas/tallas_minimas/" }
            ]
        },
        {
            titulo: "DESTACADOS",
            items: [
                { name: "Eventos", url: "#" },
                { name: "Blog", url: "#" },
                { name: "Ranking", url: "#" }
            ]
        },
        {
            titulo: "PLAYAS",
            items: [
                { name: "Playa de La Aldea", url: "#" },
                { name: "Puerto de Mogán", url: "#" },
                { name: "El agujero de Gáldar", url: "#" }
            ]
        },
        {
            titulo: "EQUIPAMIENTO",
            items: [
                { name: "Cañas", url: "#" },
                { name: "Anzuelos", url: "#" },
                { name: "Boyas", url: "#" },
                { name: "Impermeables", url: "#" }
            ]
        }
    ];

    const socialLinks = [
        { img: facebook, alt: "Facebook", url: "https://www.facebook.com/seariverfishing" },
        { img: gmail, alt: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
        { img: instagram, alt: "Instagram", url: "https://www.instagram.com/canaryislandsextremefishing/?igsh=MXI5MWEwZHUwdDJ1Mw%3D%3D#" },
        { img: twitter, alt: "Twitter", url: "https://x.com/i/flow/login" },
        { img: youtube, alt: "YouTube", url: "https://www.youtube.com/@pescandodecosta" },
        { img: github, alt: "GitHub", url: "https://github.com/IpialesNatt/streamers"}
    ];

    const legal = [
        { name: "@FishMatch Contacto", path: "/contact" },
        { name: "Aviso legal", path: "/legal" },
        { name: "Política de privacidad", path: "/privacity" },
        { name: "Cookies", path: "/cookies" }
    ];

    const ListadoEnlaces = ({ titulo, items }) => (
        <div className="box">
            <div className="tittle-box">
                <p>{titulo}</p>
            </div>
            <div className="content-box">
                {items.map((item, index) => (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container-footer">
            <div className="top-footer">
                {enlaces.map((grupo, index) => (
                    <ListadoEnlaces key={index} titulo={grupo.titulo} items={grupo.items} />
                ))}
            </div>

            <div className="bottom-footer">
                <div className="social-box">
                    {socialLinks.map((social, index) => (
                        <div className="icono-img" key={index}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                <img src={social.img} alt={social.alt} width="30" height="30" />
                            </a>
                        </div>
                    ))}
                   <a href="/notice.xml"><img src="/src/assets/iconrss.png" alt="rss icon" width="30" height="30" /></a> 
                </div>
                <div className="legal-box">
                    {legal.map((l, index) => (
                        <Link key={index} to={l.path}>
                            {l.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
