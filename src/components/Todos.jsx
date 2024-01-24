import todos from '../data/todos.json'
import { Chips } from "../components/Messages"
import Generating from "../components/Generating"
import WelcomeMsg from './WelcomeMsg'
import flyout from "../assets/svg/flyout.svg"
import toast from "../assets/svg/toast.svg"
import workbench from "../assets/svg/workbench.svg"
import accesspoint from "../assets/svg/accesspoint.svg"
import storybookIcn from "../assets/svg/storybook.svg"
import figmaIcn from "../assets/svg/figma.svg"
import accesspointhover from "../assets/svg/accesspointhover.svg"
import inputchip from "../assets/svg/inputchip.svg"
import { useState,useEffect } from "react"


const Project = ({categoryKey,projectKey})=>{
    const [submitted,setSubmitted] = useState(false)
    const [generating,setGenerated] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const [reset,setReset] = useState(false)
    const [accesspointimg,setAccesspointImg] = useState(accesspoint)
    const { figma,storybook } = todos[categoryKey][projectKey]
    const components = {
        "AccessPointButton":<img
            src={accesspointimg}
            onMouseEnter={()=>setAccesspointImg(accesspointhover)}
            onMouseLeave={()=>setAccesspointImg(accesspoint)}
        />,
        "FlyoutMenu":<img src={flyout}/>,
        "Greeting":<WelcomeMsg/>,
        "InputChip":<img src={inputchip}/>,
        "Toast":<img src={toast}/>,
        "PendingResponse":<Generating/>,
        "SuggestionChip":<div className="chipTest">
            <Chips
                chips={[
                    "{Dynamic response one}",
                    "{Additional response option}",
                    "{Customizable by BU}"
                ]}
                msgKey={projectKey}
                submitted={submitted}
                reset={reset}
                setReset={setReset}
                setSubmitted={setSubmitted}
            />
            {generating&&!loaded&&<Generating/>}
            {submitted&&loaded&&<div className="resetBtn"><button onClick={()=>{
                setReset(true)
                setLoaded(false)
                setGenerated(false)
                setSubmitted(false)
            }}>Reset</button></div>}
        </div>,
        "Workbench":<img className="workbench" src={workbench}/>
    }

    useEffect(()=>{
        if(submitted){
            setTimeout(()=>{
                setLoaded(true)
            },5000)
        }
        if(submitted){
            setTimeout(()=>{
                setGenerated(true)
            },1200)
        }
    },[submitted])

    return (
        <div className="Project">
            <div className="linksCtn">
                <span className="componentName">{`<${projectKey} />`}</span>
                {storybook&&<a className="links" href={storybook} target="_blank"><img width="15" src={storybookIcn}/></a>}
                {figma&&<a className="links" href={figma} target="_blank"><img width="12" src={figmaIcn}/></a>}
            </div>
            <article className={projectKey}>{components[projectKey]}</article>
        </div>
    )
}

const TodoList = ({categoryKey})=>{

    return (
        <div className="Category">
            <h2>{categoryKey}</h2>
            <div className="projects">
                {Object.keys(todos[categoryKey]).map(projectKey=>(
                    <Project
                        key={projectKey}
                        projectKey={projectKey}
                        categoryKey={categoryKey}
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