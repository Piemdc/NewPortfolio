
const Box = (props) => {


    function changewindow() {
        props.setWindow(props.link)
    };


    return (
        <div className='ltbox'>

            <div id={props.id} onClick={changewindow}><h2 className='boxtitle'>{props.nom}</h2>
                <img src={props.img} alt={props.nom} className='navimg' /></div>


        </div>
    )
}

export default Box;


