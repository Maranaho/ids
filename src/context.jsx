import React from "react"
let initialTTState = {
  generating:false,
  showAssist: false
}

const TTContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {

    case 'SHOW_ASSIST': {
      let SHOW_ASSIST = {...state}
      SHOW_ASSIST.showAssist = action.payload
      return SHOW_ASSIST
    }
    

    case 'GENERATING': {
      let GENERATING = {...state}
      GENERATING.generating = true
      return GENERATING
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