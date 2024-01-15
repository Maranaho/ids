import { auth } from '../utils/firebase'

const SignOut = ()=>{
  return (
    <main className="SignOut">
      <button className="btn mini ghost" onClick={()=>auth.signOut()}>
        <span>Sign out</span>
      </button>
    </main>
  )
}

export default SignOut
