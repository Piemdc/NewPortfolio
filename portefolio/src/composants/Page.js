import './page.css'
import avatar from '../images/pierre.svg'
import Minibox from '../composants/Minibox.js';
import footus from '../images/footus.svg'
import music from '../images/music.svg'
import gaming from '../images/gaming.svg'
import design from '../images/design.svg'


const Page = (props) => {

    var actu = new Date();
    var annee = actu.getFullYear();
    var anni = new Date("08 december, " + annee);
    var intervalle = anni.getTime() - actu.getTime();
    intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));


    function changewindow() {
        props.setWindow('')
    };

    if (props.type === 'about') {
        return (
            <div className='page'>

                <h2 className='titlepage' style={{ width: '100%' }}>Pierre Magnien</h2>
                <h3 className='litletitlepage' style={{ width: '100%' }}>Level 26 <progress id="age" max="100" value="50"> 50% </progress></h3>



                <div style={{ width: '20%', overflow: 'hidden', border: 'grey 4px solid' }}>
                    <img src={avatar} alt='Pierre Magnien' className='avatar'
                        style={{ width: '100%' }} />
                </div>
                <div style={{ width: '75%', padding: '1%' }}>
                    <p className='textpres' >"Après 3 ans dans le secteur de l’imprimerie, Pierre a décidé de se tourner vers un domaine
                        qui se rapproche plus de ses passions et de ses envies, diplômé d'un titre
                        professionnel, il est aujourd'hui à la recherche d'une formation complémentaire.
                        Accepté à HETIC en 3ème année de bachelor, il ne lui manque plus que la confiance d'une entreprise pour mener à bien sa mission"</p>
                </div>
                <div className='miniboxContainer'>
                    <Minibox nom='Football Américain' img={footus} details='Joueur, Coach U19' /> <Minibox nom='Musique' img={music} details='Ecoutée' /> <Minibox nom='Jeux Videos' img={gaming} /> <Minibox nom='Design' img={design} details='Développement, Créations' />
                </div>
                <button onClick={changewindow} style={{ width: '100%' }}>return</button>



            </div >
        )
    }

    else if (props.type === 'skills') {
        return (
            <div className='page'>

                <button onClick={changewindow}>return</button>

            </div>
        )
    }
    else if (props.type === 'bagage') {
        return (
            <div className='page'>

                <button onClick={changewindow}>return</button>

            </div>
        )
    }
}

export default Page;


