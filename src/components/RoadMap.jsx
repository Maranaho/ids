import GenTopNav from "./GenTopNav"
import Todos from "./Todos"
import { useTTState } from '../context'

const RoadMap = ()=>{
    const { state:{ showAssist } } = useTTState()
    return (
        <div className={`RoadMap ${showAssist?"showAssist":""}`}>
            <nav>
                <div>
                    <h1>Intuit Assist Motion Roadmap</h1>
                    <small>Due 7/31/2024</small>
                </div>
                <GenTopNav/>
            </nav>
            <Todos/>
        </div>
    )
}
export default RoadMap