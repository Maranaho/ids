import { useTTState } from '../context'
import { useState } from "react"
import sendAssistantMessage from "../utils/sendAssistantMessage"
import sendBtn from "../assets/svg/send.svg"
import sendBtnwhite from "../assets/svg/sendwhite.svg"

const TypeMessage = ()=>{
    
    const { state:{ aiMsgIdx },dispatch } = useTTState()
    const [message,setMessage] = useState("")
    const empty = message === ""
    
    const sendIt = () =>{
        const msg = {
            newMessageKey:new Date().getTime(),
            sender: "user",
            message
        }
        dispatch({type:"NEW_MESSAGE",payload:msg})
        sendAssistantMessage(dispatch,aiMsgIdx)
        setMessage("")
    }

    return (
        <div className="TypeMessage">
            <input
                value={message}
                placeholder="Enter your message..."
                onChange={e=>setMessage(e.target.value)}
                onKeyDown={e=>{if(e.key === "Enter" && !empty) sendIt()}}
            />
            <button
                onClick={sendIt}
                className={`sendIt ${!empty?"active":""}`}
                disabled={empty}
            >
                <img src={empty?sendBtn:sendBtnwhite}/>
            </button>
        </div>
    )
}
export default TypeMessage