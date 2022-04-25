
export default function Box(props) {
    return (
        <div className='ltbox'>

            <a id={props.id} href={props.link}><h2 className='boxtitle'>{props.nom}</h2>
                <img src={props.img} alt={props.nom} className='navimg' /></a>


        </div>
    )
}




