import close from "../assets/svg/close.svg"
import logo from "../assets/svg/logo.svg"
import signin from "../assets/svg/signin.svg"
import { auth } from '../utils/firebase'
import { Link } from "react-router-dom"

const TTNav = ()=>(
    <div className="TTNav">
        <img onClick={()=>auth.signOut()} src={close}/>
        <img src={logo}/>
        <Link to="/"><img src={signin}/></Link>
        
    </div>
)
export default TTNav