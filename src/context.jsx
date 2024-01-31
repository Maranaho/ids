import React from "react"
import messages from "./data/messages.json"
import aiMessages from "./data/aiMessages.json"
import anims from "./data/anims.js"

let initialTTState = {
  isIntuitEmployee:false,
  showAssist:false,
  org:'@intuit.com',
  devName:'maranaho',
  user:null,
  aiMsgIdx:0,
  messages:{...messages},
  generating:false,
  pendingCopy:"Working",
  anim:0
}

const TTContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {

    case 'SET_ANIM_INDEX': {
      let SET_ANIM_INDEX = {...state}
      const fwd = action.payload
      if(fwd){
        if(SET_ANIM_INDEX.anim < anims.length) SET_ANIM_INDEX.anim = SET_ANIM_INDEX.anim + 1
        if(SET_ANIM_INDEX.anim === anims.length)SET_ANIM_INDEX.anim = 0
      }
      if(!fwd){
        if(SET_ANIM_INDEX.anim > 0)SET_ANIM_INDEX.anim = SET_ANIM_INDEX.anim - 1
        else SET_ANIM_INDEX.anim = anims.length - 1
      }
      return SET_ANIM_INDEX
    }

    case 'SET_PENDING_COPY': {
      let SET_PENDING_COPY = {...state}
      SET_PENDING_COPY.pendingCopy = action.payload
      return SET_PENDING_COPY
    }

    case 'GENERATING': {
      let GENERATING = {...state}
      GENERATING.generating = true
      if(GENERATING.aiMsgIdx < Object.keys(aiMessages).length -1) GENERATING.aiMsgIdx++ 
      else GENERATING.aiMsgIdx = 0
      return GENERATING
    }
    
    case 'NEW_MESSAGE': {
      let NEW_MESSAGE = {...state}
      NEW_MESSAGE.messages[action.payload.newMessageKey] = {...action.payload}
      NEW_MESSAGE.generating = false
      return NEW_MESSAGE
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