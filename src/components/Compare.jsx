import { useState,useEffect } from "react"
import GenFX from "./GenFX"
const Compare = ()=>{
    const explonential = [
        3, 7, 9, 10, 18, 22,24,25,33,34,37,38,39,
        50, 53, 61, 67, 69, 72, 78, 82, 85, 83,
        92, 100,110,111,118,120,119,118,116,101,70,67,55,43,34,32,31
      ]
    const justZeroes = Array.from(Array(explonential.length).keys()).map(()=>0)
    const [bars,setBars] = useState(justZeroes)
    const [low,setLow] = useState(false)
    const increment = 30
    const threshhold = 30
    const content = [
        "90% of customers from other businesses like you pay $49.99 for Champion Hoodie.",
        "Recommendation: increase price to $49.99",
        "+$10.00 price increase"
    ]

    const transitionDelay = idx => `${increment * idx}ms`

    useEffect(()=>{

        const clear = setTimeout(()=>{
            setBars(explonential)
        },1000)
        const clear1 = setTimeout(()=>{
            setLow(true)
        },4000)
        return ()=>{
            clearTimeout(clear)
            clearTimeout(clear1)
        }
    },[])
      
    return (
        <div className="Compare Card">
            <GenFX
                title
                text="Price compared compared to peers:"
            />
            <h4 className={low?"low":""}>Low</h4>
            <div className="bars">
                {explonential.map((bar,idx)=>{
                    const style = {
                        transitionDelay:transitionDelay(idx),
                        height: bars[idx]
                    }
                    return (
                        <div
                            className={`${bar < threshhold ? "low":""} ${bar === 33?"bingo":""}`}
                            style={style}
                            key={bar}
                        >
                            <small>${bar}0.00</small>
                        </div>
                    )
                })}
            </div>
            <div className={`txt ${low?"grow":""}`}>
                    <GenFX
                        css="grey"
                        text={content[0]}
                        delay={4000}
                    />
                    <GenFX
                        css="black"
                        text={content[1]}
                        delay={5500}
                    />
                    <GenFX
                        css="green"
                        text={content[2]}
                        delay={5800}
                    />
            </div>
        </div>
    )
}
export default Compare