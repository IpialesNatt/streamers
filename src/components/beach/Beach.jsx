import BEACHES from "../../services/beaches";
import "./Beach.css"


function Beach() {
    return (
        <div className="beach-container" >
            <h2 className="beach-heading">¡Elige playa y lanza el anzuelo!</h2>
            <div className="individual-beach">
                {BEACHES.map((f, id) => (
                    <div key={id} className="beach-card">
                        <h3>{f.name}</h3>
                        <p><strong>Dificultad de acceso:</strong> {f.dificult}</p>
                        <p><strong>Tipo de pesca:</strong> {f.type.join(", ")}</p>
                        <p><strong>Especies comunes:</strong> {f.fish.join(", ")}</p>
                        <div className="photo-gallery">
                            {f.photo.map((img, i) => (
                                <img key={i} src={img} alt={`Foto de ${f.name}`} />
                            ))}
                        </div>
                        <a href={f.maps} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Beach
