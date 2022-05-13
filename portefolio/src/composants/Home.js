import React, { useState, useEffect } from 'react';
import banniere from '../images/gifban.gif'
import Box from '../composants/Box.js';
import Page from '../composants/Page.js';
import presimg from '../images/vie.svg'
import bag from '../images/bag.svg'

import weaponimg from '../images/weapon.svg'
import './home.css'

export default function Home(props) {

    const [placeholder, setPlaceholder] = useState('');
    const [displaytext, setDisplaytext] = useState(true);
    const [window, setWindow] = useState('')
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

    if (window === '') {

        return (
            <div className='banniere' style={{
                backgroundImage: `url(${banniere})`
            }}>

                {/*///////////////// Items haut /////////////////*/}
                <div className='topbox'>
                    <Box img={presimg} nom='Pierre Magnien' window={window} setWindow={setWindow} link='about' />

                    <div className='ltbox'>
                        <a href='/contact'><h2 className='boxtitle' id='contact'>Press "Space" to join</h2></a>
                    </div>
                </div>
                {/*///////////////// Items bas /////////////////*/}
                <div className='botbox'>
                    <Box img={bag} window={window} setWindow={setWindow} link='bagage' id='bag' />
                </div>


                {/* ///////////////// texte /////////////////*/}

                <div style={{ width: '100%', height: '100%', position: 'absolute', display: displaytext ? 'block' : 'none' }}>
                    <div className='text' style={{}}>
                        <div id='pixeltext'>{placeholder}</div>
                        <button className='closebutton' style={{ float: 'right' }} onClick={hidetext}>  &gt; </button>
                    </div>
                </div>
            </div >
        )
    }

    else if (window === 'about') {

        return (
            <div className='banniere' style={{
                backgroundImage: `url(${banniere})`
            }}>

                <Page window={window} setWindow={setWindow} type='about' />

            </div >
        )
    }

    else if (window === 'bagage') {

        return (
            <div className='banniere' style={{
                backgroundImage: `url(${banniere})`
            }}>

                <Page window={window} setWindow={setWindow} type='bagage' />

            </div >
        )
    }


}

