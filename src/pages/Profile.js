import { Link } from "react-router-dom"
import styles from "./Profile.module.css"
function Profile() {
  return (
    <>
      {" "}
      <section className={styles.ourservices}>
        <div className={styles.contentprofilepage}>
          <div className={styles.profileuserpage}>
            <div className={styles.imguserprofile}>
              <img
                className={styles.profilebgHome}
                src="https://th.bing.com/th/id/OIP.xU8IXrDxyuMAzkMrpbJriAAAAA?pid=ImgDet&w=400&h=403&rs=1"
              />

              <img className={styles.avatar} src="https://data.whicdn.com/images/330597461/original.jpg" alt="jofpin" />
              <div className={styles.userprofiledata}>
                <h1 style={{ color: "black" }}>
                  {" "}
                  <div className={styles.link}>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/11.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/1.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/3.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/9.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/7.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/10.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/5.png" height={200} />
                    </Link>
                    <Link to="/">
                      <img src="https://shifaa.kau.edu.sa/assets/images/icons/6.png" height={200} />
                    </Link>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
