import Messages from './Messages'
import ChatHeader from './ChatHeader'
import TypeMessage from './TypeMessage'
import Disclaimer from './Disclaimer'
import { useTTState } from '../context'


const Chat = ()=>{
    
    const { state:{ showAssist } } = useTTState()
    return (
        <aside className={`Chat ${showAssist?"showAssist":""}`}>
            <ChatHeader />
            <Messages />
            <TypeMessage />
            <Disclaimer />
        </aside>
    )
}
export default Chat