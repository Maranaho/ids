import AccessPointButtonRive from './AccessPointButtonRive'
import { useTTState } from '../context'

const GenTopNav = ()=>{
    const { state:{ showAssist }, dispatch } = useTTState()
    return (
        <nav className="GenTopNav">
            <button className="showIt" onClick={()=>dispatch({type:"SHOW_ASSIST",payload:true})}>
                <AccessPointButtonRive initialExpert={false} />
            </button>
        </nav>
    )
}
export default GenTopNav