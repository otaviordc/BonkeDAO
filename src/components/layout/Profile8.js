import styles from './Profile.module.css'
import profile from '../../img/AVDR3W.jpg'


function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.ain_profile}>
            <div className={styles.user_info}>
              <div className={styles.follow_btn}>
                <img src={profile} alt="Profile Pic" />
                <a href="
https://twitter.com/AVDR3W" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>AVDR3W </h3>
              <p>@AVDR3W </p>
            </div>

          </div>
          <div className={styles.user_bio}>
            <p>
            SBB council
              <br />
              
Award winning entrepreneur 
              <br />
              & fashion brand founder
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
