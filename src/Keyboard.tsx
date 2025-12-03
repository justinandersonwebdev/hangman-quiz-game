import styles from './Keyboard.module.css'

const letterList: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
export function Keyboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem'
      }}
    >
      {letterList.map((letter) => {
        return (
          <button key={letter} className={styles.btn}>
            {letter}
          </button>
        )
      })}
    </div>
  )
}
