import leftBar from '../assets/svg/top-left.svg'
import rightBar from '../assets/svg/top-right.svg'
// import AccessPointButton from "@genux-ds/access-point-button"
import { useTTState } from '../context'

const Topbar = ()=>{
    
    const { dispatch } = useTTState()
    return (
        <nav className="Topbar">
            <img src={leftBar}/>
            <img src={rightBar}/>
        </nav>
    )
}
export default Topbar