function NewItem({ id, title, description }) {  // Desestructuración correcta de props
  return (
    <div id={id} className="news-item">  {/* Solo un contenedor con el ID */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default NewItem;
