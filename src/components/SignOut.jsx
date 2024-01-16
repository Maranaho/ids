import { auth } from '../utils/firebase'
import motionlogo from '../assets/svg/motionlogo2.svg'

const SignOut = ()=>{
  return (
      <main className="SignOut">
      <img className="ialogo" src={motionlogo}/>
      <div>
        <h1>Non intuit visitor</h1>
        <p>Intuit email required</p>
        <button className="sign" onClick={()=>auth.signOut()}>Sign out</button>
      </div>
    </main>
  )
}

export default SignOut
