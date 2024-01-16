import ChatHeader from './ChatHeader'
import Messages from './Messages'
import TypeMessage from './TypeMessage'
import { useTTState } from '../context'
import { useState } from "react"


const Chat = ()=>{
    
    const { state:{ chat,generating,showAssist }, dispatch } = useTTState()
    return (
        <aside className={`Chat ${showAssist?"showAssist":""}`}>
            <ChatHeader/>
            <Messages />
            <TypeMessage />
        </aside>
    )
}
export default Chat