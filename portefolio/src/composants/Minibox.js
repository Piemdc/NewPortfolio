import React, { useState } from 'react';


const Minibox = (props) => {

    const [showBubble, setShowBubble] = useState(false);
    let changeShow = () => { setShowBubble(!showBubble) }
    return (
        <div className='minibox' onMouseEnter={changeShow} onMouseLeave={changeShow}>

            <img src={props.img} alt={props.nom} className='navimg' />
            {showBubble ?
                <div className="bubble" >
                    <h4>{props.nom}</h4>
                    <p>{props.details}</p>
                </div>
                :
                null}


        </div>
    )
}

export default Minibox;


