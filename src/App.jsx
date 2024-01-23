import { useEffect } from 'react'
import { HashRouter } from "react-router-dom"
import { useTTState } from './context'

// import SignIn from './components/SignIn'
import IDS from "./components/IDS"
import GenUXSignInAndOut from './components/GenUXSignInAndOut'
import useAuth from './hooks/useAuth'

const App = ()=>{

    const {
      state: { isIntuitEmployee,org,devName },
      dispatch
    } = useTTState()

  const user = useAuth()


  const getUser =()=>{
    if(user){
      const { displayName,email,photoURL } = user
      const isFam = email.includes(org) || email.includes(devName)
      if(isFam !== isIntuitEmployee) dispatch({type:'IS_FAM',payload:isFam})
      dispatch({type:'USER',payload:{displayName,email,photoURL}})
    } else dispatch({type:'IS_FAM',payload:false})
  }


useEffect(getUser,[user])

  return (
    <HashRouter>
        <main className="App">
          {user&&!isIntuitEmployee&&<GenUXSignInAndOut isIn/>}
          {user&&isIntuitEmployee&&<IDS/>}
          {!user&&<GenUXSignInAndOut />}
        </main>
    </HashRouter>
  )
}

export default App
