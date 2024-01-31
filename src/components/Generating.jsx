import LottiePlayer from './LottiePlayer'
import anims from "../data/anims.js"
import { useTTState } from '../context'
const Generating = ()=>{
    const { state:{ pendingCopy,anim } } = useTTState()
    return (
        <div className="Generating">
            <LottiePlayer anim={anims[anim]}/>
            <span>{pendingCopy}</span>
        </div>
    )
}
export default Generating