import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
       <Link href='/table'>
      <a>Voltar</a>
      </Link>
    </div>
  )
}
