import GenTopNav from "./GenTopNav"
import Todos from "./Todos"
import { useTTState } from '../context'

const RoadMap = ()=>{
    const { state:{ showAssist } } = useTTState()
    return (
        <div className={`RoadMap ${showAssist?"showAssist":""}`}>
            <GenTopNav/>
            <h1>Intuit Assist Motion Roadmap</h1>
            <small>Due 7/31/2024</small>
            <Todos/>
        </div>
    )
}
export default RoadMap