import styles from './Profile.module.css'
import profile from '../../img/stay.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/stayrar3" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Stayrar3 </h3>
              <p>@Stayrar3  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
            SBB council
              <br />
              BonkitoDAO
              <br />
              
              <br />
              
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
