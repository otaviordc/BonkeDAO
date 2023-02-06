import styles from './Profile.module.css'
import profile from '../../img/STOCKSTILL.png'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/Stockstill_NFT" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Stockstill </h3>
              <p>@Stockstill_NFT  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
            
@HydraLaunchpad
 GM
              <br />
              @reptilianrenegg
 De-Rugger
              <br />
              @elysium_arts
 Director 
              <br />
              @banditoDAO
 War Criminal
              <br />
              
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
