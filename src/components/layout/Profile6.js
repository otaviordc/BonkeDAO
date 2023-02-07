import styles from './Profile.module.css'
import profile from '../../img/marmar.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/mar_mar_sol" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Marmar </h3>
              <p>@mar_mar_sol  </p>
            </div>

          </div>
          <div className={styles.user_bio}>
            <p>
            3D architectural artist
              <br />
              ReptilianRenegg

              <br />
              Council member
              

              <br />
              Robinhood_DAO
              <br />
              Council member
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
