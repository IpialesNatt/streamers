
function NewItem(n) {
  return (
    <div className="new-item-container">
      <div id={`item${n.key}`} className="new-item">
        <h2>{n.title}</h2>
        <p>{n.description}</p>
      </div>
    </div>
  );
}

export default NewItem;
