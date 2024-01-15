import { useState } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite'
import turbi from "../assets/rive/turbi.riv"
import TTTitle from './TTTitle'
import TTNav from './TTNav'
import Range from './Range'
const Turbi = ()=>{

    const stateMachineName = "SetConfidence"
    const inputName = "confidence"
    const initialValue = 1
    const [ value, setValue ] = useState(initialValue)
    const { rive, RiveComponent } = useRive({
        src: turbi,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard:"turbi"
    })

    
    const confidenceInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputName,
            initialValue
        )

    const handleChange = e =>{
        if(confidenceInput){
            const confidenceLevel = e.target.value
            confidenceInput.value = confidenceLevel
            setValue(confidenceLevel)
        }
    }
    return (
        <div className="Turbi">
            <header>
                <TTNav/>
                <TTTitle/>
            </header>
            <RiveComponent className="riveComponent"/>
            <Range
                value={value}
                handleChange={handleChange}
            />
        </div>
    )
}
export default Turbi