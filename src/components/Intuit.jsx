import LeftNav from './LeftNav'
import Topbar from './Topbar'
import Placeholder from './Placeholder'
import Chat from './Chat'
import Turbi from './Turbi'



const Intuit = ()=>{
  return (
          <main className="intuit">
            <LeftNav/>
            <section className="main">
              <Topbar/>
              <div className="content">
                <Turbi/>
              </div>
            </section>
            <Chat/>
          </main>
      
  )
}
  export default Intuit