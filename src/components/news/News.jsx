import "./News.css";
import news from "../../services/news";

function News() {
    return (
        <div className="news-container">
            <h2 className="news-heading">Descubre nuestros servicios más demandados</h2>
            <div className="news-list">
                {news.map((n, id) => (
                    <div key={id} className="news-card">
                        <h3 className="news-title">{n.name}</h3>
                        <div className="photo-gallery">
                            <img src={n.photo} alt={`Imagen relacionada con ${n.name}`} />
                        </div>
                        <p className="news-description">{n.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
