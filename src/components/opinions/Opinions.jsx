import "./Opinions.css";
import { useEffect, useState, useCallback } from "react";
import opinionsService from "../../services/opinion.js";

const normalizeText = (text) => 
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function Opinions() {
    
    const [opinions, setOpinions] = useState([]);
    const [formData, setFormData] = useState({
        idUser: "",
        idBeach: "",
        nameBeach: "",
        stars: 0,
        comment: ""
    });
    const [editingOpinion, setEditingOpinion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOpinions = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const snapshot = await opinionsService.getAllOpinions();
            const opinionsData = [];
            
            snapshot.forEach((item) => {
                opinionsData.push({
                    key: item.key,
                    ...item.val()
                });
            });
            
            setOpinions(opinionsData);
        } catch (err) {
            console.error("Error loading opinions:", err);
            setError("Error al cargar las opiniones");
        } finally {
            setIsLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchOpinions();
    }, [fetchOpinions]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const targetState = editingOpinion ? setEditingOpinion : setFormData;
        
        targetState(prev => ({
            ...prev,
            [name]: name === "stars" ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            if (editingOpinion) {
                await opinionsService.updateOpinion(editingOpinion.key, editingOpinion);
                setOpinions(prev => 
                    prev.map(o => o.key === editingOpinion.key ? editingOpinion : o)
                );
                setEditingOpinion(null);
            } else {
                const newKey = await opinionsService.addOpinion(formData);
                setOpinions(prev => [...prev, { ...formData, key: newKey }]);
                setFormData({
                    idUser: "",
                    idBeach: "",
                    nameBeach: "",
                    stars: 0,
                    comment: ""
                });
            }
        } catch (err) {
            console.error("Operation failed:", err);
            setError(`Error al ${editingOpinion ? "actualizar" : "agregar"} la opinión`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (opinionKey) => {
        if (!window.confirm("¿Estás seguro de que quieres eliminar esta opinión?")) return;
        
        setIsLoading(true);
        try {
            await opinionsService.removeOpinion(opinionKey);
            setOpinions(prev => prev.filter(o => o.key !== opinionKey));
            if (editingOpinion?.key === opinionKey) setEditingOpinion(null);
        } catch (err) {
            console.error("Delete failed:", err);
            setError("Error al eliminar la opinión");
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (opinion) => setEditingOpinion({ ...opinion });
    const handleCancelEdit = () => setEditingOpinion(null);

    const filteredOpinions = opinions.filter((opinion) => {
        const normalizedSearch = normalizeText(searchTerm);
        return (
            normalizeText(opinion.nameBeach).includes(normalizedSearch) || 
            opinion.stars.toString() === searchTerm
        );
    });

    return (
        <div className="opinions-container">
            {/* Sección de formulario */}
            <div className="add-opinion">
                <h3>{editingOpinion ? "Editar Opinión" : "Añadir Opinión"}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nameBeach"
                        value={editingOpinion?.nameBeach || formData.nameBeach}
                        placeholder="Nombre de la playa"
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="number"
                        name="stars"
                        value={editingOpinion?.stars ?? formData.stars}
                        placeholder="Valoración (1-5)"
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                        required
                        disabled={isLoading}
                    />
                    <textarea
                        name="comment"
                        value={editingOpinion?.comment || formData.comment}
                        placeholder="Escribe tu comentario"
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                    />
                    
                    <div className="form-buttons">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Procesando..." : editingOpinion ? "Actualizar" : "Enviar"}
                        </button>
                        {editingOpinion && (
                            <button 
                                type="button" 
                                onClick={handleCancelEdit}
                                disabled={isLoading}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

          
            <div className="search-box">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por playa o valoración"
                    disabled={isLoading}
                />
            </div>

            {/* Listado de opiniones */}
            <div className="opinion-box">
                {error && <p className="error-message">{error}</p>}
                
                {isLoading && opinions.length === 0 ? (
                    <p>Cargando opiniones...</p>
                ) : filteredOpinions.length > 0 ? (
                    filteredOpinions.map((opinion) => (
                        <div key={opinion.key} className="opinion-card">
                            <h4>{opinion.nameBeach}</h4>
                            <div className="rating">
                                {"★".repeat(opinion.stars).padEnd(5, "☆")}
                            </div>
                            <p className="comment">{opinion.comment}</p>
                            
                            <div className="opinion-actions">
                                <button 
                                    onClick={() => handleEdit(opinion)}
                                    disabled={isLoading}
                                    className="edit-button"
                                >
                                    Editar
                                </button>
                                <button 
                                    onClick={() => handleDelete(opinion.key)}
                                    disabled={isLoading}
                                    className="delete-button"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron opiniones {searchTerm && `para "${searchTerm}"`}</p>
                )}
            </div>
        </div>
    );
}

export default Opinions;