import LottiePlayer from './LottiePlayer'
// import { Medium } from "@cgds/typography"
// import magic from '../assets/lotties/magic.json'
// import magic from '../assets/lotties/magicReg.json'
// import magic from '../assets/lotties/text.json'
// import magic from '../assets/lotties/text1.json'
import magic from '../assets/lotties/stars.json'

const Generating = ()=>(
    <div className="Generating">
        <LottiePlayer anim={magic}/>
        <span>Working</span>
    </div>
)

export default Generating