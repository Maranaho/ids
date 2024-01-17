import { v4 } from 'uuid'
import aiMessages from "../data/aiMessages.json"
const wait = 7000

const sendAssistantMessage = (dispatch,aiMsgIdx) =>{
    const aiMsgKey = Object.keys(aiMessages)[aiMsgIdx]
    setTimeout(()=>dispatch({type:"GENERATING"}),1200)
        setTimeout(()=>{
            const msg = {
                newMessageKey:v4(),
                sender: "assistant",
                message: aiMessages[aiMsgKey].message,
                chips: aiMessages[aiMsgKey].chips
            }
            dispatch({type:"NEW_MESSAGE",payload:msg})
        },wait)
}
export default sendAssistantMessage