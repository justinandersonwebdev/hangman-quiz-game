import words from './wordList.json'
import { useState } from 'react'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(guessedLetters)
  console.log(wordToGuess)

  return <h1>Hello World</h1>
}

export default App
