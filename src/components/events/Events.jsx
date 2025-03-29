import events from "../../services/events";
import "./Events.css";

function Events() {
    return (
        <div className="events-container">
            <div className="events-list">
                {events.map((event, id) => (
                    <div key={id} className="event-card">
                        <h3 className="event-title">{event.beachName}</h3>
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

