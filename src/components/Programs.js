import styles from "./Programs.module.css"
function Programs() {
  return (
    <>
      <section className={styles.ourservices}>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.LDS7NAsczYW6XabhPVDNRQHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            style={{ width: "80%", marginLeft: "10%", height: 400 }}
          />
          <hr />
          <h2 className={styles.title}>Women Care</h2>
        </div>

        <p style={{ marginLeft: 15 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique dignissimos distinctio harum
          incidunt. Vero eaque reiciendis error praesentium natus sequi ad ut, incidunt aspernatur, nulla nihil, quae
          similique quo!
        </p>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.LDS7NAsczYW6XabhPVDNRQHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            style={{ width: 500 }}
          />
          <p>hvhhfbhvbvfjvnkfjcnvjk`</p>
        </div>
      </section>
    </>
  )
}

export default Programs
