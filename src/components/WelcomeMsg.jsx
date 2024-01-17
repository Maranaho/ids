import { useTTState } from '../context'

const WelcomeMsg = ()=>{
  const { state:{ user } } = useTTState()
  const times = ["morning","afternoon","evening","night"]
  const hourOfDay = new Date().getHours()
  let timeOfDay
  if(hourOfDay < 12) timeOfDay = 0
  else if(hourOfDay < 18) timeOfDay = 1
  else if(hourOfDay < 21) timeOfDay = 2
  else timeOfDay = 3
  return (
    <div className="WelcomeMsg">
      <p>
        <span className="intro">Good</span>
        <span className="intro">{times[timeOfDay]},</span>
        <span className="intro">{user.displayName.split(" ")[0]}</span>
      </p>
      <h3>Nice to meet you!</h3>
      <p>I'm your AI-powered assistant. I can answer questions <strong>about taxes</strong>, connect you to experts, and help with tasks. Sometimes I make mistakes, but I'll get better with your feedback.</p>
      <p>Select an option or ask a question to start.</p>
    </div>
  )
}
export default WelcomeMsg