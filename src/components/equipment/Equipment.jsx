import "./Equipment.css";
import EQUIPMENT from "../../services/equipment";

function Equipment() {
    return (
        <div className="equipment-container">
            <h2 className="equipment-heading">¡Equípate para la aventura!</h2>
            <div className="equipment-list">
                {EQUIPMENT.map((e, id) => (
                    <div key={id} className="equipment-card">
                        <h3 className="equipment-model">{e.model}</h3>
                        <div className="photo-gallery">
                            <img src={e.photo} alt={`Imagen relacionada con ${e.model}`} />
                        </div>
                        <p className="equipment-price">{e.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Equipment;