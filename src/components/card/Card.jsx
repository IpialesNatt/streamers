import "./Card.css"
function Card(props) {
    return (
        <>
            <p className={props.color}>
                <span>{props.item.name}</span>
                <span><a href={props.item.url} target="_blank">canal</a></span>
            </p>
        </>
    )
}
export default Card