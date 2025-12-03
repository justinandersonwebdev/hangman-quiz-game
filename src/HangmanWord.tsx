export function HangmanWord() {
  const word: string = 'test'
  const guessedLetters: string[] = ['t', 'e']
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace'
      }}
    >
      {word.split('').map(
        (letter, index) => (
          console.log(letter),
          (
            <span key={index} style={{ borderBottom: '.1em solid black' }}>
              <span
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? 'visible'
                    : 'hidden'
                }}
              >
                {letter}
              </span>
            </span>
          )
        )
      )}
    </div>
  )
}
