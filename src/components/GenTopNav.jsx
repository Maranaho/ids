import motionLogo from '../assets/svg/motionlogo2.svg'
import AccessPointButtonRive from './AccessPointButtonRive'
import { auth } from '../utils/firebase'
import { useTTState } from '../context'

const GenTopNav = ()=>{
    const { state:{ showAssist }, dispatch } = useTTState()
    return (
        <nav className="GenTopNav">
            {/* <img src={motionLogo} onClick={()=>auth.signOut()}/> */}
            <div className="logOut" onClick={()=>auth.signOut()} />
            <button className="showIt" onClick={()=>dispatch({type:"SHOW_ASSIST",payload:true})}>
                <AccessPointButtonRive initialExpert={false} />
            </button>
            {/* <button
                disabled={showAssist}
                className={`sign mini ${showAssist ?"hide":""}`}
                onClick={()=>dispatch({type:"SHOW_ASSIST",payload:true})}
            >Open Assist</button> */}
        </nav>
    )
}
export default GenTopNav