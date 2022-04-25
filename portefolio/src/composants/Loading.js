import './home.css'
import Box from './Box'
import start from '../images/start.svg'
import audio from '../images/Looking for a new beginning.ogg'

export default function Loading() {
    return (

        <div className='startscreen'>
            <Box nom='Pierre Magnien' img={start} id='start' link='/home' />
        </div>
    )
}

