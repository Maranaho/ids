import {
  Route,
  Routes,
  useLocation
} from "react-router-dom"
import LeftNav from './LeftNav'
import Topbar from './Topbar'
import Placeholder from './Placeholder'
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
                  {/* <Route path="/" element={<Placeholder/>}/> */}
                  <Route path="/" element={<Turbi/>}/>
                </Routes>
              </div>
            </section>
          </main>
      
  )
}
  export default Intuit