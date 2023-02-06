import styles from './Profile.module.css'
import profile from '../../img/ivarfloki.png'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/tattoomealways" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Ivarfloki </h3>
              <p>@tattoomealways  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
              Artist on exchange.art
              <br />
              SBB council
              <br />
              Avid collector of 1/1
              <br />
              J.D and B.A degree
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
