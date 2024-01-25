import todos from '../data/todos.json'
import { Chips } from "../components/Messages"
import Generating from "../components/Generating"
import WelcomeMsg from './WelcomeMsg'
import AccessPointButtonRive from './AccessPointButtonRive'
import flyout from "../assets/svg/flyout.svg"
import toast from "../assets/svg/toast.svg"
import workbench from "../assets/svg/workbench.svg"
// import accesspointhover from "../assets/svg/accesspointhover.svg"
// import accesspoint from "../assets/svg/accesspoint.svg"
import storybookIcn from "../assets/svg/storybook.svg"
import figmaIcn from "../assets/svg/figma.svg"
import inputchip from "../assets/svg/inputchip.svg"
import { useState,useEffect } from "react"


const Project = ({categoryKey,projectKey})=>{
    const [submitted,setSubmitted] = useState(false)
    const [generating,setGenerated] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const [reset,setReset] = useState(false)
    // const [accesspointimg,setAccesspointImg] = useState(accesspoint)
    const { figma,storybook } = todos[categoryKey][projectKey]

    const [ hover, setHover ] = useState(false)
    const [ active, setActive ] = useState(false)
    const [ collapsed, setCollapsed ] = useState(false)
    const [ expert, setExpert ] = useState(true)
    const [ btnKey, setBtnKey ] = useState(["hover",false])

    const components = {
        // "AccessPointButton":<img
        //     src={accesspointimg}
        //     onMouseEnter={()=>setAccesspointImg(accesspointhover)}
        //     onMouseLeave={()=>setAccesspointImg(accesspoint)}
        // />,
        "AccessPointButtonRiv":<div className="AccessMain">
            <div
                className="AccessPointButtonCtn"
                onMouseOver={()=>{
                    if(!active)setBtnKey(["hover",true])
                }}
                onMouseLeave={()=>setBtnKey(["hover",false])}
                onMouseDown={()=>setBtnKey(["active",true])}
                onMouseUp={()=>setBtnKey(["active",false])}
            >
                <AccessPointButtonRive
                    btnKey={btnKey}
                    active={active}
                />
            </div>
            <div className="AccessCtrl">
                <div>
                    <input
                        id="collapsed"
                        type="checkbox"
                        checked={collapsed}
                        value={collapsed}
                        onChange={()=>{
                            setCollapsed(!collapsed)
                            setBtnKey(["collapsed",!collapsed])
                        }}
                    />
                    <label htmlFor="collapsed">Collapsed</label>
                </div>
                <div>
                    <input
                        id="expert"
                        type="checkbox"
                        checked={expert}
                        value={expert}
                        onChange={()=>{
                            setExpert(!expert)
                            setBtnKey(["expert",!expert])
                        }}
                    />
                    <label htmlFor="expert">Expert</label>
                </div>
            </div>
        </div>,
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