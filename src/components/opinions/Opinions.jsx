import "./Opinions.css";
import OPINIONS from "../../services/opinions";
function Opinions() {
    return (

        <div className="opinions-container" >
            <div className="opinion-box">
                {OPINIONS.map((o, id_user) => (
                    <div key={id_user} className="id-opinion">
                        <p><strong>Playa:</strong> {o.name_beach}</p>
                        <p><strong>Valoración:</strong> {o.stars}</p>
                        <p><strong>Comentario:</strong> {o.comment}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Opinions
