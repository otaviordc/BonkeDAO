import styles from './Home.module.css'
import home from '../../img/home.png'

import LinkButton from '../layout/LinkButton'
import background from "../../background.json"
import Lottie from "lottie-react"

function Home() {
  return (
    <section className={styles.home_container}>
       <div className ={styles.back}>
      <Lottie loop={true} animationData={background} />
      </div>
      <h1>
        Welcome to Bonke DAO
      </h1>
      <p>Enter this new movement of solana, its happening dont miss!</p>
      <p>We are the ambassadors of Bonk culture</p>
      <LinkButton to="https://magiceden.io/marketplace/doge_" text="Join US" />
      <p className={styles.animation}>
      <img src={home} alt="home" />
      </p>
    </section>
  )
}

export default Home
