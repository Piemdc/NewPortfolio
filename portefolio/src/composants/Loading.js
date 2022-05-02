import './home.css'
import Box from './Box'
import start from '../images/start.svg'
import audio from '../images/Looking for a new beginning.ogg'

export default function Loading() {
    return (

        <div className='startscreen'>
            <div className='ltbox'>

                <a id='start' href='/home'><h2 className='boxtitle'> Pierre Magnien</h2>
                    <img src={start} alt='Start' className='navimg' /></a>


            </div>
        </div >


    )
}

