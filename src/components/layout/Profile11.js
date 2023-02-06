import styles from './Profile.module.css'
import profile from '../../img/oliversinho.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/oliversimoza" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Oliversinho </h3>
              <p>@oliversimoza  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
            SBB council
              <br />
              BonkitoDAO
              <br />
              BonkitoDAO Dev
              <br />
              Crypto and Nfts collector
              <br />
              Entrepreneur
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
