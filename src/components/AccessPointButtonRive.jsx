import { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite'
import accesspointbutton from "../assets/rive/accesspointbutton.riv"

const AccessPointButtonRive = ({
        btnKey=["hover",false],
        initialExpert = true,
        initialCollapsed = false,
        initialHover = false
    })=>{
    
    const stateMachineName = "accessButton"
    const inputHover = "hover"
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
            collapsedInput&&
            expertInput
        ){

        switch (btnKey[0]) {
            case "hover": hoverInput.value = btnKey[1]; break;
            case "collapsed": collapsedInput.value = btnKey[1];break;
            case "expert": expertInput.value = btnKey[1]; break;
        }
       }
    }

    useEffect(handleChange,[
        btnKey,
        hoverInput,
        collapsedInput,
        expertInput
    ])
    return <RiveComponent className="AccessPointButtonRive"/>
}
export default AccessPointButtonRive