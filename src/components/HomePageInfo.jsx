
export function HomePageInfo({ homepage }) {
    return (
        <div className="info">
            <div className="info_right" data-aos="fade-right">
                {homepage.fadeRight?.map((item, index) => (
                    <div key={index}>
                        <h1>{item.value}</h1>
                        <p>{item.description}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="info_left" data-aos="fade-left">
                {homepage.fadeLeft?.map((item, index) => (
                    <div key={index}>
                        <h1>{item.value}</h1>
                        <p>{item.description}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
