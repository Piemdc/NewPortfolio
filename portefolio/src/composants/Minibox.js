
import React, { useState } from 'react';


const Minibox = (props) => {

    const [showBubble, setShowBubble] = useState(false);

    let changeShow = () => { setShowBubble(!showBubble) }

    let url = '/' + props.url;

    let redirect = () => {
        switch (props.url) {
            case 'linkedin':
                let win = window.open('https://www.linkedin.com/in/pierre-magnien-817623179/', "_blank").focus();
                break;

            case 'github':
                window.open('https://github.com/Piemdc', "_blank");
                win.focus();
                break;

            default:
                window.open(url, "_blank");
                win.focus();

                break;
        }
    }


    return (
        <div className='minibox' onClick={props.click === 'true' ? redirect : null} onMouseEnter={changeShow} onMouseLeave={changeShow}>

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


