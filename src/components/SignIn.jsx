import { auth,provider,GoogleAuthProvider,signInWithPopup } from '../utils/firebase'
import motionlogo from '../assets/svg/motionlogo.svg'

const SignIn = ()=>{

  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider)
      .then(res => GoogleAuthProvider.credentialFromResult(res))
      .catch(err => console.log(err))
  }
  return (
    <main className="SignIn">
      <img className="ialogo" src={motionlogo}/>
      <div>
        <h1>CG Rive demo</h1>
        <p>Intuit email required</p>
        <button className="sign" onClick={signInWithGoogle}>Sign in</button>
      </div>
    </main>
  )
}

export default SignIn
