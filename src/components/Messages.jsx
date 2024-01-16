import { useTTState } from '../context'
import { useState,useEffect } from "react"

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

    const handleClick = idx =>{
        const tmpGone = [...goneArr].map((_,i)=>i !== idx)
        setSubmitted(true)
        setGoneArr(tmpGone)
    }

    return (
        <div className="Chips">
            {chips.map((chip,idx)=>{
                return (
                    <Chip
                        idx={idx}
                        chip={chip}
                        submitted={submitted}
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
    const { message,sender } = messageItem
    const isAi = sender === "assistant"
    const chips = messageItem.hasOwnProperty("chips") ? messageItem.chips : null
    const [submitted,setSubmitted] = useState(false)
    
  return (
      <article className={`${sender} ${submitted?"submitted":""}`}>
        {isAi && <span>Intuit Assist</span>}
          <p>{message}</p>
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
    
    const { state:{ messages } } = useTTState()
    return (
        <div className="Messages">
            {Object.keys(messages)
            .map(messageKey=>(
                <Message
                    key={messageKey}
                    msgKey={messageKey}
                    messageItem={messages[messageKey]}
                />
            ))}
        </div>
    )
}
export default Messages