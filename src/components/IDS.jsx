import {
  Route,
  Routes
} from "react-router-dom"
import GenUX from "./GenUX"

const IDS = ()=>{

  return (
        
          <main className="intuit">
            <section className="main">
              <div className="content">
                <Routes>
                  <Route path='*' element={<p>404</p>} />

                  {/* Intuit Assist */}
                  <Route path="/" element={<GenUX/>}/>
                </Routes>
              </div>
            </section>
          </main>
      
  )
}
  export default IDS