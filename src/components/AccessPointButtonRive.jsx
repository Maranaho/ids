import { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite'
import accesspointbutton from "../assets/rive/accesspointbutton.riv"

const AccessPointButtonRive = ({
        btnKey,
        active,
        initialHover = false,
        initialActive = false,
        initialCollapsed = false,
        initialExpert = true
    })=>{
    
    const stateMachineName = "accessButton"
    const inputHover = "hover"
    const inputActive = "active"
    const inputCollapsed = "collapsed"
    const inputExpert = "expert"
    const artboard = "AccessButtonPointRiv"

    const { rive, RiveComponent } = useRive({
        src: accesspointbutton,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard
    })

    const hoverInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputHover, initialHover
        )
    const activeInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputActive, initialActive
        )
    const collapsedInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputCollapsed, initialCollapsed
        )
    const expertInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputExpert, initialExpert
        )

    const handleChange = () =>{
       if(
            hoverInput&&
            activeInput&&
            collapsedInput&&
            expertInput
        ){

        switch (btnKey[0]) {

            case "hover": hoverInput.value = btnKey[1]; break;
            case "active":{
                if(!active && btnKey[1])activeInput.value = btnKey[1]
                if(active && !btnKey[1])activeInput.value = btnKey[1]
                break;
            }
            case "collapsed": collapsedInput.value = btnKey[1];break;
            case "expert": expertInput.value = btnKey[1]; break;
        }
       }
    }

    useEffect(handleChange,[
        btnKey,
        hoverInput,
        activeInput,
        collapsedInput,
        expertInput
    ])
    return <RiveComponent className="AccessPointButtonRive"/>
}
export default AccessPointButtonRive