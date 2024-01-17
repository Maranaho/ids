import Messages from './Messages'
import ChatHeader from './ChatHeader'
import TypeMessage from './TypeMessage'
import { useTTState } from '../context'
import { useState } from "react"


const Chat = ()=>{
    
    const { state:{ showAssist } } = useTTState()
    return (
        <aside className={`Chat ${showAssist?"showAssist":""}`}>
            <ChatHeader />
            <Messages />
            <TypeMessage />
        </aside>
    )
}
export default Chat