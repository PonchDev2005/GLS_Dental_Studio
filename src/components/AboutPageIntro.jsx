export function AboutPageIntro({ aboutpage }) {
    return (
        <section className="AboutPage">
        <div className="intro">
          <div data-aos="fade-right" className="left">
            <video src={aboutpage?.about_page_intro?.video}></video>
          </div>
          <div data-aos="fade-left" className="right">
            <h1>{aboutpage?.about_page_intro?.title}</h1>
          </div>
        </div>
      </section>
    );
  }