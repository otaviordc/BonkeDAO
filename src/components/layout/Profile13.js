import styles from './Profile.module.css'
import profile from '../../img/stackingsol.jpg'


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
https://twitter.com/StackingSol" >
                  <button>Follow</button>
                </a>
              </div>
              <h3>Stacking.sol</h3>
              <p>@StackingSol  </p>
            </div>

          </div>
          <div className={styles.user_bio}>
            <p>
            SBB council
              <br />
              GoldPanther DAO
              <br />
              Dark Skellies 💀
              <br />
              Sol Patrol 🚨
              <br />
              Reptilian Renegade 🦎
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
