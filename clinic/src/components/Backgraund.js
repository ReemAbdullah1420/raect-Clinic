import imageee from "../assets/1.png"
import styles from "./navbar.module.css"
function Back() {
  return (
    <div>
      <img src="https://i.pinimg.com/564x/97/7f/e3/977fe3c12d7db07bab41eb8a379a5a02.jpg" style={{ width: "100%" }} />
      <div
        style={{
          backgroundImage: ` url("${imageee}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: "100px",
          right: "15px",
          width: "50%",
          height: "100vh",
          // display: "flex",
          // flexDirection:"row",
          // justifyContent:"right",
          zIndex: "0",
        }}
      />
      <div />
      <div style={{ position: "absolute", zIndex: "0", left: "50px", top: "300px" }}>
        <h1 className={styles.h1}>Where your </h1>
        <span className={styles.h3}>your health matters</span>
      </div>
    </div>
  )
}

export default Back
