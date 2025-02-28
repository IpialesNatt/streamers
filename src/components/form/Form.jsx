import "./Form.css";

function Form() {

    return (
        <div className="register-container">
            
            <div className="register-form">
            <h2>Registro de Usuario</h2>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellidos" />
                <input type="text" placeholder="Fecha de nacimiento" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Telefono" />
                <input type="text" placeholder="Contraseña" />
                <input type="text" placeholder="Confirmación de contraseña" />
                <button>Enviar</button>
            </div>
        </div>
    );
}

export default Form;
