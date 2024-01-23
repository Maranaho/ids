import todos from '../data/todos.json'
import { Chips } from "../components/Messages"
import Generating from "../components/Generating"
import WelcomeMsg from './WelcomeMsg'
import flyout from "../assets/svg/flyout.svg"
import workbench from "../assets/svg/workbench.svg"
import accesspoint from "../assets/svg/accesspoint.svg"
import accesspointhover from "../assets/svg/accesspointhover.svg"
import inputchip from "../assets/svg/inputchip.svg"
import { useState } from "react"


const Project = ({projectKey})=>{
    const [submitted,setSubmitted] = useState(false)
    const [accesspointimg,setAccesspointImg] = useState(accesspoint)
    const components = {
        "AccessPointButton":<img
            src={accesspointimg}
            onMouseEnter={()=>setAccesspointImg(accesspointhover)}
            onMouseLeave={()=>setAccesspointImg(accesspoint)}
        />,
        "FlyoutMenu":<img src={flyout}/>,
        "Greeting":<WelcomeMsg/>,
        "InputChip":<img src={inputchip}/>,
        "PendingResponse":<Generating/>,
        "SuggestionChip":<Chips
            chips={[
                "{Dynamic response one}",
                "{Additional response option}",
                "{Customizable by BU}"
            ]}
            msgKey={projectKey}
            submitted={submitted}
            setSubmitted={setSubmitted}
        />,
        "Workbench":<img className="workbench" src={workbench}/>
    }

    return (
        <div className="Project">
            <span className="componentName">{`<${projectKey} />`}</span>
            <article className={projectKey}>{components[projectKey]}</article>
        </div>
    )
}

const TodoList = ({categoryKey})=>{

    return (
        <div className="Category">
            <h2>{categoryKey}</h2>
            <div className="projects">
                {todos[categoryKey].map(projectKey=>(
                    <Project
                        key={projectKey}
                        projectKey={projectKey}
                    />
                ))}
            </div>
        </div>
    )
}

const Todos = ()=>{

    return (
        <div className="Todos">
            {Object.keys(todos).map(categoryKey=>(
                <TodoList
                    categoryKey={categoryKey}
                    key={categoryKey}
                />
            ))}
        </div>
    )
}
export default Todos