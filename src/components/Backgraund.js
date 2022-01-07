import imageee from "../assets/1.png"
import styles from "./navbar.module.css"
function Back() {
  return (
    <div>
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
