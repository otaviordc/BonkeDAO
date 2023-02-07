import styles from './Profile.module.css'
import profile from '../../img/shmervz.png'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/shmervz" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Shmervz </h3>
              <p>@shmervz </p>
            </div>

          </div>
          <div className={styles.user_bio}>
            <p>
            Web3 Enthusiast
              <br />
              Co-Founder at #BonkitoDAO
              <br />
              Council & CM at #BonkeDAO
              <br />
              Community Manager at #AlphaC
              <br />
              Advisor at #DeMagicIsland
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
