import Intuit from "./components/Intuit"
import { HashRouter } from "react-router-dom"
const App =()=> {
    return (
        <HashRouter>
            <main className="App">
                <Intuit />
            </main>
        </HashRouter>
    )
}
export default App