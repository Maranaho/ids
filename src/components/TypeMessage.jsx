import { useTTState } from '../context'


const TypeMessage = ()=>{
    
    const { state:{ chat } } = useTTState()
    return (
        <div className="TypeMessage">
            TypeMessage
        </div>
    )
}
export default TypeMessage