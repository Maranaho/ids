const nbOfSteps = 6
const stepsArr = Array.from(Array(nbOfSteps).keys())
const Steps = ()=>(
    <div className="Steps">
        {stepsArr.map(step=><div key={step} />)}
    </div>
)
export default Steps