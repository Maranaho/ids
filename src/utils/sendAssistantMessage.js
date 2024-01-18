import aiMessages from "../data/aiMessages.json"
const wait = 7000

const sendAssistantMessage = (dispatch,aiMsgIdx) =>{
    const aiMsgKey = Object.keys(aiMessages)[aiMsgIdx]
    setTimeout(()=>dispatch({type:"GENERATING"}),1200)
        setTimeout(()=>{
            const msg = {
                ...aiMessages[aiMsgKey],
                newMessageKey:new Date().getTime(),
                sender: "assistant"
            }
  
            dispatch({type:"NEW_MESSAGE",payload:msg})
        },wait)
}
export default sendAssistantMessage