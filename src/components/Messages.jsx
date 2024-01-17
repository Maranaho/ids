import { useState,useEffect,useRef } from "react"
import { useTTState } from '../context'
import WelcomeMsg from './WelcomeMsg'
import Generating from './Generating'
import writeoffgenerated from "../assets/svg/writeoffgenerated.svg"
import aiwelcome from "../assets/svg/aiwelcome.svg"
import compare from "../assets/svg/compare.svg"
import sendAssistantMessage from "../utils/sendAssistantMessage"

const generatedResponses = {
    writeoffgenerated,
    compare,
    aiwelcome
}

const Chip =({
    idx,
    chip,
    gone,
    submitted,
    handleClick,
})=>{
    
    const animationDelay =  `${350 + 50 * idx}ms`
    const [showUp,setShowUp] = useState(true)
    
    useEffect(()=>{
        const clear = setTimeout(()=>{
            setShowUp(false)
        },1000)
        return ()=> clearTimeout(clear)
    },[])


    return (
        <button
            className={`Chip ${showUp?"firstPaint":""} ${gone?"gone":""} ${submitted && !gone ?"toBubble":""}`}
            onClick={()=>handleClick(idx)}
            style={{animationDelay}}
        >{chip}</button>
    )
}

const Chips = ({
        chips,
        msgKey,
        submitted,
        setSubmitted,
    })=>{

    const [goneArr,setGoneArr] = useState([...chips].map(()=>false))
    const { state:{aiMsgIdx}, dispatch } = useTTState()

    const handleClick = idx =>{
        if(!submitted){
            const tmpGone = [...goneArr].map((_,i)=>i !== idx)
            setSubmitted&&setSubmitted(true)
            setGoneArr(tmpGone)
            sendAssistantMessage(dispatch,aiMsgIdx)
        }
    }

    return (
        <div className="Chips">
            {chips.map((chip,idx)=>{
                return (
                    <Chip
                        idx={idx}
                        chip={chip}
                        submitted={submitted || false}
                        gone={goneArr[idx]}
                        handleClick={handleClick}
                        key={msgKey + idx}
                    />
                )
            })}
        </div>
    )
}

const Message = ({messageItem,msgKey}) =>{
    const { state:{ messages } } = useTTState()
    const { message,sender } = messageItem
    const isAi = sender === "assistant"
    const chips = messageItem.hasOwnProperty("chips") ? messageItem.chips : null
    const generated = messageItem.hasOwnProperty("generated") ? messageItem.generated : null
    const [submitted,setSubmitted] = useState(false)
    const messagesKeysArr = Object.keys(messages)
    const currentIdx = messagesKeysArr.indexOf(msgKey)
    let makeMeRound = false

    if(currentIdx < messagesKeysArr.length - 1){
        const nextOne = currentIdx + 1
        const nextMsgKey = messagesKeysArr[nextOne]
        const nextOneIsUser = messages[nextMsgKey].sender === "user"
        makeMeRound = !isAi && nextOneIsUser
    }

  return (
      <article className={`${sender} ${submitted?"submitted":""} ${makeMeRound ? "makeMeRound":""}`}>
        {isAi && <span>Intuit Assist</span>}
        <p>{message}</p>
        {generated&&<img src={generatedResponses[generated]}/>}
        {chips && (
            <Chips
                chips={chips}
                msgKey={msgKey}
                submitted={submitted}
                setSubmitted={setSubmitted}
            />
        )}
      </article>
  )
}

const Messages = ()=>{

    const { state:{ messages,generating } } = useTTState()
    const [submitted,setSubmitted] = useState(false)
    const scrollCtnRef = useRef(null)

    useEffect(()=>{
            scrollCtnRef.current.scrollTop = scrollCtnRef.current.scrollHeight
        },[messages,generating])
    
    return (
        <div ref={scrollCtnRef} className={`Messages ${generating?"generating":""}`}>
            <article className="assistant">
                <WelcomeMsg />
                <Chips
                    msgKey="0000000"
                    chips={[
                        "Where is my W2?",
                        "What documents do I need?",
                        "Help me start"
                    ]}
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                />
            </article>
            {Object.keys(messages)
            .map(messageKey=>(
                <Message
                    key={messageKey}
                    msgKey={messageKey}
                    messageItem={messages[messageKey]}
                />
            ))}
            {generating&&<Generating />}
        </div>
    )
}
export default Messages