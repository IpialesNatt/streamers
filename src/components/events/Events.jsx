import EVENTS from "../../services/events";
import "./Events.css";

function Events() {
    return (
        <div className="events-container">
            <h2 className="events-heading">Eventos de Pesca</h2>
            <div className="events-list">
                {EVENTS.map((event, id) => (
                    <div key={id} className="event-card">
                        <h3 className="event-title">{event.name_beach}</h3>
                        <p><strong>Fecha: </strong> {new Date(event.date).toLocaleDateString()}</p>
                        <div className="photo-gallery"> <img src={event.photo} /></div>
                        <p className="event-description">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;

