import styles from './Profile.module.css'
import profile from '../../img/TR98.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="https://twitter.com/ThomasRobo98" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>TR98 </h3>
              <p>@ThomasRobo98  </p>
            </div>

          </div>
          <div className={styles.ser_bio}>
            <p>
              SBB OG
              <br />
              SBB council
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
