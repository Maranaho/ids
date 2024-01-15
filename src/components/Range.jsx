// import { span } from "@cgds/typography"
const Range = ({value,handleChange})=>{

    const labels = [
        "I don’t feel",
        "Somewhat",
        "I am 100%"
    ]

    return (
        <div className="Range">

            <input
                min="0"
                max="2"
                step="1"
                type="range"
                value={value}
                className="range"
                onChange={handleChange}
            />

            <div className="rangeInput">

                <span className="labels">
                    {labels.map((label,idx)=>{
                        const e = {
                            target :{
                                value:idx
                            }
                        }
                        return (
                            <label
                                key={label}
                                onClick={()=>handleChange(e)}
                            >{label}<br/>confident</label>
                        )
                    })}
                </span>

                <div
                    className="progress"
                    style={{
                        width:`${value * 50}%`
                    }}
                />

                <button
                    className="pointer"
                    style={{
                        transform:`translateX(calc(${value * 190}px))`
                    }}
                />
                
            </div>
        </div>
    )
}
export default Range