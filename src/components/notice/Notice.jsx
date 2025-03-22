import notice from "../../services/notice";
import NewItem from "../newItem/NewItem";

function Notice() {
  return (
   <>
   <h2>Actualidad</h2>
   {
    notice.map((n) => ( //read all notices from array
      <NewItem key={n.id} item={n.id} title={n.title} description={n.description}/>
    ))//all values are passed to NewsItem component
   }
   </>
  );
}
export default Notice;