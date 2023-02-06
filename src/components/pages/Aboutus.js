import styles from './Aboutus.module.css'
import back from '../../img/back.png'
import circuit from "./circuit.json"
import Lottie from "lottie-react"

function Aboutus() {
  return (
    <section className={styles.aboutus_container}>
      
      
      <h1>About us</h1>
      <div className ={styles.back}>
      <Lottie loop={true} animationData={circuit} />
      </div>
      <p>Our DAO is a group of individuals who work together to spread bonk word. 
          Effective teams are characterized by strong communication, trust, and collaboration among members. 
          When team members work together effectively, they are able to achieve results that are greater than what they could achieve as individuals. 
          This DAO can be a valuable tool for solving complex problems, making important decisions,
           and executing complex projects. Whether working on a small project or a large-scale effort, 
           a team provides a supportive environment for its members to thrive and contribute their unique skills and perspectives.
           </p>
           <img src={back} alt="back" />
           
    </section>
    
  );
}

export default Aboutus;
