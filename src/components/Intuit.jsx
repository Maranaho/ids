import {
  Route,
  Routes,
  useLocation
} from "react-router-dom"
import LeftNav from './LeftNav'
import Topbar from './Topbar'
import Placeholder from './Placeholder'
import Chat from './Chat'
import Turbi from './Turbi'



const Intuit = ()=>{
  const location = useLocation()
  const path = location.pathname
  return (
        
          <main className="intuit">
            <LeftNav/>
            <section className="main">
              <Topbar/>
              <div className="content">
                <Routes>
                  <Route path='*' element={<p>404</p>} />

                  {/* Intuit Assist */}
                  <Route path="/" element={<Turbi/>}/>
                  {/* <Route path="/" element={<Placeholder/>}/> */}
                  <Route path="/rive" element={<Turbi/>}/>
                </Routes>
                <Chat/>
              </div>
            </section>
          </main>
      
  )
}
  export default Intuit