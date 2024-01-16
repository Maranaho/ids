import React from "react"
import messages from "./messages.json"

let initialTTState = {
  isIntuitEmployee:false,
  showAssist:false,
  org:'@intuit.com',
  devName:'maranaho',
  user:null,
  messages:{...messages}
}

const TTContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {

    case 'IS_GENERATING': {
      let IS_GENERATING = {...state}
      IS_GENERATING = action.payload
      return IS_GENERATING
    }

    case 'SEND_MESSAGE': {
      let SEND_MESSAGE = {...state}
      const { newMessageKey,message } = action.payload
      SEND_MESSAGE.messages[newMessageKey] = message
      return SEND_MESSAGE
    }

    case 'SHOW_ASSIST': {
      let SHOW_ASSIST = {...state}
      SHOW_ASSIST.showAssist = action.payload
      return SHOW_ASSIST
    }
    
    
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