import  { useState, useEffect } from 'react'

const GenFX = ({ css,text, delay = 0,title,speed = 80 }) => {
  const [generatedText, setGeneratedText] = useState('')
  let wordIndex = 0
  const words = text.split(' ')
  let intervalKey

  const generateText = () => {
    setGeneratedText(prevText => prevText + words[wordIndex] + ' ')
    wordIndex++

    if (wordIndex === words.length) {
      clearInterval(intervalKey)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      intervalKey = setInterval(generateText, speed)
    }, delay)

    return () => {
      clearInterval(intervalKey)
      clearTimeout(timeoutId)
    }
  }, [delay])

  const displayText = generatedText.trim().split(' ').slice(0, -1).join(' ')
  if(title) return <h3>{displayText}</h3>
  return <p className={css}>{displayText}</p>
}

export default GenFX