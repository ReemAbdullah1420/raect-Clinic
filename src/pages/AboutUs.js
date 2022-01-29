import style from "./AboutUs.module.css"
function AboutUs() {
  return (
    <>
      <section className={style.ourservices}>
        <div className={style.container}>
          <div className={style.sectitle}>
            <h2 className={style.center}>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" height={50} width={50} />
              </div>
              Who Are We?
            </h2>
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
                  <h2>
                    <div>
                      <img src="https://cdn-icons-png.flaticon.com/512/784/784712.png" height={50} width={50} />
                    </div>
                    Vision
                  </h2>

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
                  <h2 style={{ color: "black", margin: 10 }}>
                    <div>
                      <img
                        height={50}
                        width={50}
                        src="https://cdn-icons.flaticon.com/png/512/2822/premium/2822676.png?token=exp=1643176274~hmac=ef6a14e4d00dc938b5f3ec07899dd7fe"
                      />
                    </div>
                    Our message
                  </h2>

                  <p>Commitment to provide the finest medical services for all ages</p>
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
