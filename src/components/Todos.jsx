import todos from '../data/todos.json'
import { Chips } from "../components/Messages"
import Generating from "../components/Generating"
import WelcomeMsg from './WelcomeMsg'
import GenFX from './GenFX'
import Flyout from './Flyout'
import AccessPointButtonRive from './AccessPointButtonRive'

// import flyout from "../assets/svg/flyout.svg"
import toast from "../assets/svg/toast.svg"
import workbench from "../assets/svg/workbench.svg"
import storybookIcn from "../assets/svg/storybook.svg"
import figmaIcn from "../assets/svg/figma.svg"
import inputchip from "../assets/svg/inputchip.svg"
import { useState,useEffect } from "react"


const Project = ({categoryKey,projectKey})=>{
    const [submitted,setSubmitted] = useState(false)
    const [nextPoem,setNextPoem] = useState(0)
    const [generating,setGenerated] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const [reset,setReset] = useState(false)
    const [showFly,setShowFly] = useState(true)
    const { figma,storybook } = todos[categoryKey][projectKey]

    const [ collapsed, setCollapsed ] = useState(false)
    const [ expert, setExpert ] = useState(true)
    const [ hover, setHover ] = useState(false)
    const [ btnKey, setBtnKey ] = useState(["hover",false])
    const poems = [
        [
            "Pixel waves in a coded sea,",
            "AI's dance, fluid and free.",
            "Lines converge, a motion tale,",
            "In digital realms, design sets sail."
        ],
        [
            "Digital veins pulse with motion's grace,",
            "AI orchestrates a pixelated embrace.",
            "Fluid rhythms in the dance of design,",
            "A dynamic story, pixel lines intertwine."
        ],
        [
            "In movement, design finds its beat,",
            "AI orchestrates, a rhythm so sweet.",
            "Lines and curves, a dance on display,",
            "Motion unfolds in its graceful array."
        ],
        [
            "Fluid transitions, seamless flow,",
            "Frames in rhythm, a vibrant show.",
            "AI and design, a harmonious blend,",
            "Creating visuals that transcend."
        ],
        [
            "In the dance of design, a rhythmic art,",
            "Motion unfolds, a visual chart.",
            "Seamless transitions, a vibrant play,",
            "AI and design in a creative display."
        ]

    ]
    const inputLink = "https://ibp-cicd-core.prod1-ibp.a.intuit.com/design-systems/cgds/3591/index.html?path=/story/components-input-chip-features--dropdown"
    const workLink = "https://ibp-cicd-core.prod1-ibp.a.intuit.com/design-systems/genux-ds/131/index.html?path=/story/components-workbench--playground&knob-Adapt%20parent%20container=false&knob-Error%20message=Something%20went%20wrong.&knob-Header=Invoice%20reminder%20template&knob-History%20length=3&knob-Show%20fetching%20error=false&knob-beta=true"

    const components = {
        "AccessPointButtonRiv":<div className="AccessMain">
            <div
                className="AccessPointButtonCtn"
                onMouseOver={()=>setBtnKey(["hover",true])}
                onMouseLeave={()=>setBtnKey(["hover",false])}
            >
                <AccessPointButtonRive btnKey={btnKey} />
            </div>
            <div className="AccessCtrl">
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
                        id="hover"
                        type="checkbox"
                        checked={hover}
                        value={hover}
                        onChange={()=>{
                            setHover(!hover)
                            setBtnKey(["hover",!hover])
                        }}
                    />
                    <label htmlFor="hover">MouseOver</label>
                </div>
            </div>
        </div>,
        "FlyoutMenu":<div>
            <div className="Flyout">
                {showFly&&<Flyout/>}
            </div>
            <div className="resetBtn">
                <button onClick={()=>{
                    setShowFly(false)
                    setTimeout(()=>setShowFly(true),500)
                }}>Reset</button>
            </div>
        </div>,
        "Greeting":<WelcomeMsg/>,
        "InputChip":<a href={inputLink} target="_blank"><img src={inputchip}/></a>,
        "Toast":<img src={toast}/>,
        "PendingResponse":<Generating/>,
        "SuggestionChip":<div className="chipTest">
            <Chips
                chips={[
                    "Manage my projects",
                    "Generate Lynda's invoice",
                    "Show my income"
                ]}
                msgKey={projectKey}
                submitted={submitted}
                reset={reset}
                setReset={setReset}
                setSubmitted={setSubmitted}
            />
            {generating&&!loaded&&<Generating/>}
            {loaded&&(
                
                <div className="AIGen">
                    <span>Intuit Assist</span>
                    <div>
                        {poems[nextPoem].map((line,idx)=>(
                            <GenFX
                                speed={30}
                                delay={200 + (200 * idx)}
                                text={line}
                            />
                        ))}
                    </div>
                </div>
            )}
            {submitted&&loaded&&<div className="resetBtn"><button onClick={()=>{
                setReset(true)
                setLoaded(false)
                setGenerated(false)
                setSubmitted(false)
                if(nextPoem < poems.length) setNextPoem(nextPoem=>nextPoem+1)
                else setNextPoem(0)
            }}>Reset</button></div>}
        </div>,
        "Workbench":<a href={workLink} target="_blank"><img className="workbench" src={workbench}/></a>
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