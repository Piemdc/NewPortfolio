import './page.css'
import Minibox from '../composants/Minibox.js';

// images logos
import avatar from '../images/pierre.svg'
import footus from '../images/footus.svg'
import music from '../images/music.svg'
import gaming from '../images/gaming.svg'
import design from '../images/design.svg'
import js from '../images/javascript.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import ps from '../images/ps.svg'

// images site
import modulox from '../images/modulox.svg'
import carbu from '../images/carbu.svg'
import ether from '../images/ether.svg'

// images réseaux
import linkedin from '../images/linkedin.svg'
import git from '../images/git.svg'

const Page = (props) => {

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

                <h2 className='titlepage' style={{ width: '100%' }}>Réseaux</h2>

                <div className='miniboxContainer'>
                    <Minibox click='true' url='linkedin' nom='Profil Linkedin' img={linkedin} />  <Minibox click='true' url='github' nom='Profil Girhub' img={git} />
                </div>

                <div style={{ width: '100%' }}>
                    <button className='closebutton' onClick={changewindow} >&lt;</button>
                </div>


            </div >
        )
    }
    else if (props.type === 'bagage') {
        return (
            <div className='page'>

                <h2 className='titlepage' style={{ width: '100%' }}>Compétences</h2>




                <div className='miniboxContainer'>
                    <Minibox nom='Javascript' img={js} details='Vanilla, React , ThreeJs' /> <Minibox nom='HTML5' img={html} /> <Minibox nom='CSS' img={css} /> <Minibox nom='Photoshop' img={ps} />
                </div>


                <h2 className='titlepage' style={{ width: '100%' }}>Réalisations</h2>
                <span><em>Cliquez pour accéder au site</em></span>

                <div className='miniboxContainer'>
                    <Minibox click='true' nom='Modulox' url='modulox' img={modulox} details='JS,HTML/CSS' /> <Minibox click='true' url='carburants' nom='Prix Carburants' img={carbu} details='JS,HTML/CSS' /> <Minibox click='true' url='ethernal' nom='Ethernal' img={ether} details='JS,HTML/CSS' />
                </div>


                <div style={{ width: '100%' }}>
                    <button className='closebutton' onClick={changewindow} >&lt;</button>
                </div>
            </div >
        )
    }
}

export default Page;


