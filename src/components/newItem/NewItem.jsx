
function NewItem({ n}) {
  return (
    <div>
      <div id={`item${n.key}`}>
        <h2>{n.title}</h2>
        <p>{n.description}</p>
      </div>
    </div>
  );
}

export default NewItem;
