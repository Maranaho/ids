import { useReducer,useEffect } from 'react'
import { HashRouter } from "react-router-dom"
import { useTTState } from './context'

import SignIn from './components/SignIn'
import Intuit from "./components/Intuit"
import NonIntuitUser from './components/NonIntuitUser'
import useAuth from './hooks/useAuth'

const App = ()=>{

    const {
      state: { isIntuitEmployee,org },
      dispatch
    } = useTTState()

  const user = useAuth()


  const getUser =()=>{
    if(user){
      const { displayName,email,photoURL } = user
      const isFam = email.indexOf(org) !== -1
      if(isFam !== isIntuitEmployee) dispatch({type:'IS_FAM',payload:isFam})
      dispatch({type:'USER',payload:{displayName,email,photoURL}})
    } else dispatch({type:'IS_FAM',payload:false})
  }


useEffect(getUser,[user])

  return (
    <HashRouter>
        <main className="App">
          {user&&!isIntuitEmployee&&<NonIntuitUser/>}
          {user&&isIntuitEmployee&&<Intuit/>}
          {!user&&<SignIn/>}
        </main>
    </HashRouter>
  )
}

export default App
