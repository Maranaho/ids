import leftBar from '../assets/svg/top-left.svg'
import accesspoint from '../assets/svg/accesspoint.svg'
import accesspointhover from '../assets/svg/accesspointhover.svg'
import rightBar from '../assets/svg/top-right-no-btn.svg'
import { useTTState } from '../context'
import { useState } from "react"

const Topbar = ()=>{
    
    const { dispatch } = useTTState()
    const [btnState,setBtnState] = useState(0)
    return (
        <nav className="Topbar">
        <img src={leftBar}/>
        <img height="100px" src={rightBar}/>
            <button
                className="AccessPointButton"
                onMouseOver={()=>setBtnState(1)}
                onMouseLeave={()=>setBtnState(0)}
                onClick={()=>dispatch({type:"SHOW_ASSIST",payload:true})}
            >
                <img src={btnState === 0?accesspoint:accesspointhover}/>
            </button>
        </nav>
    )
}
export default Topbar