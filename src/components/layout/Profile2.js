import styles from './Profile.module.css'
import profile from '../../img/natan.png'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/natan_stein" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>NatanStein </h3>
              <p>@natan_stein</p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
            Founder BonkitoDAO
              <br />
              Dev DeMagic Island
              <br />
              Co-Founder Apt Devs
              <br />
              Web Scraping \ DA specialist
              <br />
              
              Aptos\Solana Developer
              <br />


            </p>
          </div>
          <div className={styles.user_follows}>

          </div>
        </div>
      </div>
    </div>



  );
}

export default Profile;
