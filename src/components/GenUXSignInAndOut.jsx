import { auth,provider,GoogleAuthProvider,signInWithPopup } from '../utils/firebase'

import idslogo from '../assets/svg/idslogo.svg'
import idsmark from '../assets/svg/idsmark.svg'

const GenUXSignInAndOut =  ({isIn}) =>{

  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider)
      .then(res => GoogleAuthProvider.credentialFromResult(res))
      .catch(err => console.log(err))
  }

  const handlAuth = ()=>{
    if(isIn) auth.signOut()
    else signInWithGoogle()
  }
  return (
    <main className="GenUXSignInAndOut">
      <img className="idsmark" src={idsmark}/>
      <div>
        <img src={idslogo}/>
        <h1>Intuit Assist <span>Motion</span></h1>
        <p>Intuit email required</p>
        <button className="sign invert" onClick={handlAuth}>Sign {isIn?"out":"in"}</button>
      </div>
    </main>
  )
}

export default GenUXSignInAndOut
