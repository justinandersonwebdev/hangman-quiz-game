import words from './wordList.json'
import { useState } from 'react'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  console.log(wordToGuess)

  return <h1>Hello World</h1>
}

export default App
