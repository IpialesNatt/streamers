import "./Opinions.css";
import { useEffect, useState } from "react";
import opinionsService from "../../services/opinion.js"; // Asegúrate de tener este servicio para manejar Firebase

// Función para eliminar tildes de un texto
const removeAccents = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function Opinions() {
    const [opinions, setOpinions] = useState([]); // Estado para las opiniones
    const [newOpinion, setNewOpinion] = useState({
        idUser: "",
        idBeach: "",
        nameBeach: "",
        stars: 0,
        comment: ""
    });
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el valor de búsqueda

    // Función para cargar todas las opiniones desde Firebase
    const findAllOpinions = () => {
        opinionsService.getAllOpinions()
            .then((items) => {
                let allOpinions = [];
                items.forEach(item => {
                    const key = item.key;
                    const data = item.val();
                    allOpinions.push({
                        key: key,
                        idUser: data.idUser,
                        idBeach: data.idBeach,
                        nameBeach: data.nameBeach,
                        stars: data.stars,
                        comment: data.comment
                    });
                });
                setOpinions([...allOpinions]); // Actualiza el estado con las opiniones
            })
            .catch((err) => {
                console.error("Error al cargar las opiniones:", err);
            });
    };

    // Captura los cambios del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOpinion(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Aquí se envían los datos a Firebase
        opinionsService.addOpinion(newOpinion)
            .then(() => {
                // Actualiza las opiniones para reflejar la nueva
                setOpinions(prevOpinions => [...prevOpinions, newOpinion]);
                // Limpia el formulario después de agregar la opinión
                setNewOpinion({
                    idUser: "",
                    idBeach: "",
                    nameBeach: "",
                    stars: 0,
                    comment: ""
                });
            })
            .catch((err) => {
                console.error("Error al agregar la opinión:", err);
            });
    };

    // Filtra las opiniones según el término de búsqueda
    const filteredOpinions = opinions.filter((opinion) => {
        const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase()); // Normaliza el término de búsqueda
        const normalizedBeachName = removeAccents(opinion.nameBeach.toLowerCase()); // Normaliza el nombre de la playa
        const normalizedStars = opinion.stars.toString(); // No se necesita normalizar los números

        // Filtra por nombre de la playa o valoración
        return (
            normalizedBeachName.includes(normalizedSearchTerm) || 
            normalizedStars === normalizedSearchTerm
        );
    });

    useEffect(() => {
        findAllOpinions(); // Llama a la función al montar el componente
    }, []);

    return (
        <div className="opinions-container">
            {/* Formulario para añadir nueva opinión */}
            <div className="add-opinion">
                <h3>Añadir Opinión</h3>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="nameBeach"
                        value={newOpinion.nameBeach}
                        placeholder="Nombre de la playa"
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="stars"
                        value={newOpinion.stars}
                        placeholder="Valoración (1-5)"
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="comment"
                        value={newOpinion.comment}
                        placeholder="Escribe tu comentario"
                        onChange={handleInputChange}
                    />
                    <button type="submit">Enviar Opinión</button>
                </form>
            </div>

            <div className="search-box">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por playa o valoración"
                />
            </div>

            <div className="opinion-box">
                {filteredOpinions.length > 0 ? (
                    filteredOpinions.map((o) => (
                        <div key={o.idUser} className="id-opinion">
                            <p><strong>Playa:</strong> {o.nameBeach}</p>
                            <p><strong>Valoración:</strong> {o.stars}</p>
                            <p><strong>Comentario:</strong> {o.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron opiniones que coincidan con la búsqueda.</p>
                )}
            </div>
        </div>
    );
}

export default Opinions;
