import React, { useState, useEffect } from 'react';
import banniere from '../images/gifban.gif'
import Box from '../composants/Box.js';
import presimg from '../images/vie.svg'
import bag from '../images/bag.svg'

import weaponimg from '../images/weapon.svg'
import './home.css'

export default function Home(props) {

    const [placeholder, setPlaceholder] = React.useState('');
    const [displaytext, setDisplaytext] = React.useState(true);
    const string = 'Bonjour ! Bienvenue sur mon programme de présentation , cliquez sur les différents éléments pour afficher plus d\'informations !';
    const index = React.useRef(0);


    function hidetext() {
        setDisplaytext(!displaytext);
    }

    React.useEffect(() => {
        function tick() {
            setPlaceholder(prev => prev + string[index.current]);
            index.current++;
        }
        if (index.current < string.length) {
            let addChar = setInterval(tick, 20);
            return () => clearInterval(addChar);
        }
    }, [placeholder]);

    return (
        <div className='banniere' style={{
            backgroundImage: `url(${banniere})`
        }}>
            <div className='topbox'>
                <Box img={presimg} nom='Pierre Magnien' link='/about' />
                <div className='ltbox'>
                    <a href='/contact'><h2 className='boxtitle' id='contact'>Press "Space" to join</h2></a>
                </div>
            </div>
            <div className='botbox'>
                <Box img={bag} link='/bagage' id='bag' />
            </div>
            <div className='text' style={{ display: displaytext ? 'block' : 'none' }}>
                <div id='pixeltext'>{placeholder}</div>

                <button className='closebutton' onClick={hidetext}>  &gt; </button>
            </div>
        </div >
    )
}

