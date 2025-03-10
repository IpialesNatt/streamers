import "./Opinions.css";
import opinions from "../../services/opinions";
function Opinions() {
    return (

        <div className="opinions-container" >
            <div className="opinion-box">
                {opinions.map((o, idUser) => (
                    <div key={idUser} className="id-opinion">
                        <p><strong>Playa:</strong> {o.nameBeach}</p>
                        <p><strong>Valoración:</strong> {o.stars}</p>
                        <p><strong>Comentario:</strong> {o.comment}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Opinions
