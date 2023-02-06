import styles from './Profile.module.css'
import profile from '../../img/profile.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/gynchiii" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Gynchi </h3>
              <p>@gynchiii  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
              Aptos / Solana Dev
              <br />
              SBB council
              <br />
              BonkitoDAO Dev
              <br />
              Alder Mages Dev,
              <br />
              DeMagic Island Dev
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
