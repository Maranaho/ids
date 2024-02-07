import Chat from './Chat'
import RoadMap from './RoadMap'
import ids from '../assets/svg/idslogo.svg'
import { auth } from '../utils/firebase'

const GenUX =()=>{

    return (
        <main className="GenUX">
            <nav className="idsTop">
                <img
                    src={ids}
                    width="110"
                    onClick={()=>auth.signOut()}
                />
            </nav>
            <div className="GenMain">
                <RoadMap/>
                <Chat/>
            </div>
        </main>
    )
}
export default GenUX