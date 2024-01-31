import LottiePlayer from './LottiePlayer'
import anims from "../data/anims.js"
import { useTTState } from '../context'
import { useState,useRef,useEffect } from "react"

const PendingExplorations = ()=>{
    const inputRef = useRef(null)
    const { state:{ pendingCopy,anim }, dispatch } = useTTState()
    const [showCopy,setShowCopy] = useState(true)
    const [val,setVal] = useState(pendingCopy)
    const handleKeyDown = e =>{
        if(e.key === "Enter")submitValue()
    }
    const submitValue = ()=> {
        dispatch({type:"SET_PENDING_COPY",payload:val})
        setShowCopy(true)
    }
    const handleNav = fwd => dispatch({type:"SET_ANIM_INDEX",payload:fwd})
    useEffect(()=>{
        if(!showCopy&&inputRef){
            inputRef.current.focus()
            inputRef.current.select()
        }
    },[inputRef,showCopy])

    return (
        <div className="PendingResonseExplorations">
            <button onClick={()=>handleNav(false)}>prev</button>
            <div>
                <LottiePlayer anim={anims[anim]}/>
                {showCopy&&(
                    <span
                    onClick={()=>setShowCopy(false)}
                    style={{width:pendingCopy.length + "ch"}}
                    >{pendingCopy}</span>)}
                    {!showCopy&&(
                    <input
                        value={val}
                        ref={inputRef}
                        style={{width:val.length + "ch"}}
                        onKeyDown={handleKeyDown}
                        onBlur={submitValue}
                        onChange={e=>setVal(e.target.value)}
                    />
                )}
            </div>
            <button onClick={()=>handleNav(true)}>next</button>
        </div>
    )

}
export default PendingExplorations