import style from "./AboutUs.module.css"
function AboutUs() {
  return (
    <>
      <section className={style.ourservices}>
        <div className={style.container}>
          <div className={style.sectitle}>
            <h2 className={style.center}>Who Are We?</h2>
            <p>
              As one of the leading healthcare companies in Saudi Arabia with a focus on the healthcare sector, as an
              integrated clinic, we provide services from most medical specialties with a focus on providing a unique
              experience to our patients.
            </p>
          </div>
          <div className={style.rowclearfix}>
            <div className={style.col}>
              <div className={style.singleserviceitem}>
                <div className={style.service}></div>
                <div className={style.serviceicon}>
                  <img src="https://image.flaticon.com/icons/svg/1034/1034131.svg" alt="" />
                </div>
                <div className={style.servicetext}>
                  <h4>
                    <a href="service-single.html">Vision</a>
                  </h4>
                  <p>To be the pioneers in providing comprehensive medical care services by standards</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowclearfix}>
            <div className={style.col}>
              <div className={style.singleserviceitem}>
                <div className={style.service}></div>
                <div className={style.serviceicon}>
                  <img src="https://image.flaticon.com/icons/svg/1034/1034131.svg" alt="" />
                </div>
                <div className={style.servicetext}>
                  <h4>
                    <h1>Mission</h1>
                  </h4>
                  <p>Commitment to provide the finest medical services for all ages</p>
                  <p>
                    As one of the leading healthcare companies in Saudi Arabia with a focus on the healthcare sector, as
                    an integrated clinic, we provide services from most medical specialties with a focus on providing a
                    unique experience to our patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowclearfix}>
            <div className={style.col}>
              <div className={style.singleserviceitem}>
                <div className={style.service}></div>
                <div className={style.serviceicon}>
                  <img src="https://image.flaticon.com/icons/svg/1034/1034131.svg" alt="" />
                </div>
                <div className={style.servicetext}>
                  <h4>
                    <a href="service-single.html">Business Services</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem dicta libero veritatis
                    reiciendis quis pariatur magni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
