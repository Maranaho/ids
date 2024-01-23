import motionLogo from '../assets/svg/motionLogo2.svg'
import { auth } from '../utils/firebase'
import { useTTState } from '../context'

const GenTopNav = ()=>{
    const { state:{ showAssist }, dispatch } = useTTState()
    return (
        <nav className="GenTopNav">
            <img src={motionLogo} onClick={()=>auth.signOut()}/>
            <button
                disabled={showAssist}
                className={`sign mini ${showAssist ?"hide":""}`}
                onClick={()=>dispatch({type:"SHOW_ASSIST",payload:true})}
            >Open Assist</button>
        </nav>
    )
}
export default GenTopNav