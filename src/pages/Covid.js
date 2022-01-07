import image from "../assets/16.png"
import styles from "./Covid.module.css"

function Covid() {
  return (
    <>
      <div className={styles.img1}>
        <img src={image} />
      </div>
      <div className={styles.img2}>
        <img src={image} />
      </div>
      <div className={styles.h1h}>
        <a href="https://covid19.moh.gov.sa/" className={styles.h1}>
          Corona prevention <br />
          <b>COVID-19</b>
        </a>
      </div>
      <div>
        <img src="https://covid19awareness.sa/wp-content/uploads/2020/04/shape.svg" className={styles.img3}/>
      </div>
    </>
  )
}

export default Covid
