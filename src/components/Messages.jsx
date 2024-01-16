import { useTTState } from '../context'
import moment from "moment"

const Message = ({messageItem}) =>{
    const { message,sender,timestamp } = messageItem
  return (
      <article className={sender}>
          {message}
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
                    messageItem={messages[messageKey]}
                />
            ))}
        </div>
    )
}
export default Messages