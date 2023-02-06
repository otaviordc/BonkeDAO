import { FaDiscord, FaTwitter } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.social_list}>
          <a href="https://discord.gg/bonkedao" >
          <FaDiscord />
          </a>
        </li>
        <li className={styles.social_list}>
        <a href="https://twitter.com/SolBonkBusiness" >
          <FaTwitter />
          </a>
        </li>
        
      </ul>
      <p className={styles.copy_right}>
        <span>Bonke DAO</span> &copy; 2023
      </p>
    </footer>
  )
}

export default Footer
