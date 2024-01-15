import close from "../assets/svg/close.svg"
import logo from "../assets/svg/logo.svg"
import signin from "../assets/svg/signin.svg"
import { auth } from '../utils/firebase'
const TTNav = ()=>(
    <div className="TTNav">
        <img onClick={()=>auth.signOut()} src={close}/>
        <img src={logo}/>
        <img src={signin}/>
    </div>
)
export default TTNav