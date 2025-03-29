import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import notice from "../../services/notice";
import NewItem from "../newItem/NewItem";
import "./Notice.css";

function Notice() {
  const location = useLocation();

  // Efecto para manejar el scroll al hash
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            element.classList.add('highlight');
            setTimeout(() => element.classList.remove('highlight'), 1500);
          }, 100);
        }
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [location]);

  return (
    <div className="notice-container">
      <h2>Actualidad</h2>
      <div className="news-list">
        {notice.map((item) => (
          <NewItem
            key={item.id}
            id={`item-${item.id}`}  // Pasa el ID formateado
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Notice;