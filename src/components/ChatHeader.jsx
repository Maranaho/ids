import { useTTState } from '../context'
import closeBtn from "../assets/svg/close.svg"


const ChatHeader = ()=>{
    
    const { dispatch } = useTTState()
    return (
        <header className="ChatHeader">
            <h2>Intuit Assist</h2>
            <button
                className="closeBtn"
                onClick={()=>dispatch({type:"SHOW_ASSIST",payload:false})}
            >
                <img src={closeBtn}/>
            </button>
            
        </header>
    )
}
export default ChatHeader