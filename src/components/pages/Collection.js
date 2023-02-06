import quadro from '../../img/quadro.png'
import styles from './Collection.module.css'
import collection from "./collection.json"
import Lottie from "lottie-react"

function Collection() {
  return (
    <section className={styles.collection_container}>
      <div className ={styles.back}>
      <Lottie loop={true} animationData={collection} />
      </div>
      <h1>The Collection</h1>
      <p>Solana Bonk Business was built for the culture by the culture, a 30 day social experiment with an incredible pixelated doge PFP. After the 30 day period expires 
        Bonke DAO will takeover and continue to build the Bonk culture. A total supply of 5000 NFT minted with $BONK token.</p>
        <img src={quadro} alt="quadro" />
    </section>
  );
}

export default Collection;
