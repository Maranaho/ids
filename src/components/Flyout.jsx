import { useRive } from '@rive-app/react-canvas-lite'
import flyout from "../assets/rive/flyout.riv"

const Flyout = ()=>{
    
    const stateMachineName = "flyAway"
    const artboard = "Flyout"

    const { RiveComponent } = useRive({
        src: flyout,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard
    })

    return <RiveComponent className="Flyout"/>
}
export default Flyout