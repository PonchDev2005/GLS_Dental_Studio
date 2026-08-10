export function ServicesPageIntro({servicespage}){
    return(
        <section className="ServicePage">
            <div className="intro">
                <div data-aos="fade-right" className="left">
                    <video src={servicespage?.intro?.intro_video_url}
                    loop        /* Կրկնվելու համար */
                    autoPlay    /* Ավտոմատ միանալու համար */
                    muted       /* Պարտադիր է autoPlay-ի համար */
                    playsInline></video>
                </div>
                <div data-aos="fade-left" className="right">
                    <h1>{servicespage?.intro?.intro_text}</h1>
                </div>
            </div>
        </section>
    );
}