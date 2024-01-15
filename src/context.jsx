import React from "react"
let initialTTState = {
  isIntuitEmployee:false,
  org:'@intuit.com',
  user:null,
}

const TTContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {
    
    case 'USER': {
      let USER = {...state}
      USER.user = action.payload
      return USER
    }


    case 'IS_FAM':{
      let IS_FAM = {...state}
      IS_FAM.isIntuitEmployee= action.payload
      return IS_FAM
    }
    

    default: throw new Error("Unexpected action")
  }
}

const TTStateProvider = ({ children })=> {
  const [state, dispatch] = React.useReducer(
    ttReducer,
    initialTTState
  )
  const value = { state, dispatch }
  return (
    <TTContext.Provider value={value}>{children}</TTContext.Provider>
  )
}

const useTTState = ()=> {
  const context = React.useContext(TTContext)
  if (context === undefined) {
    throw new Error(
      "useTTState must be used within a TTStateProvider"
    )
  }
  return context
}

export { TTStateProvider, useTTState }