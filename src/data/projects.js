import flyout from "../assets/svg/flyout.svg"
import { Chips } from "../components/Messages"

const [submitted,setSubmitted] = useState(false)
const projects = {
    "flyout":()=>{ return <img src={flyout} />},
    "suggestionChip":()=>{ return (
        <Chips
            chips={chips}
            msgKey={msgKey}
            submitted={submitted}
            setSubmitted={setSubmitted}
        />
    )}
}
export default projects