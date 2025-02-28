import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container-header">
            <img src={logo} className="header-logo" alt="Logo" />
            <ul className={`header-menu ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="/home" onClick={() => setMenuOpen(false)}>Inicio</a>
                </li>
                <li>
                    <a href="/streamers_list" onClick={() => setMenuOpen(false)}>Lista de Streamers</a>
                </li>
                <li>
                    <a href="/places" onClick={() => setMenuOpen(false)}>Lugares de pesca</a>
                </li>
                <li>
                    <a href="/community" onClick={() => setMenuOpen(false)}>Comunidad</a>
                </li>
                <li>
                    <a href="/eventss" onClick={() => setMenuOpen(false)}>Eventos</a>
                </li>
                <li>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>Contacto / Únete</a>
                </li>
            </ul>
            <div className="user-icon">
                <a href="#">
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Usuario" />
                </a>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>☰</div>
        </div>
    );
}

export default Header;

