import x from '../Profile.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Description = () => {
    return (
        <div className={x.desc}>
            <img className={x.desc__img}
                 src="https://codeasy.net/ContentStorage/Chapters/63a30d3f-dd0c-4327-8ca6-e455f6f56ebf/Assets/c_sharp_samurai.jpg"
                 alt="ava"/>
            <div>
                <div className={x.title}>
                    Taras Shevchenko
                </div>

                <div className={x.text}>
                    Date of Birth: 12 Feb.
                </div>
                <div className={x.text}>
                    City: Kiev
                </div>
                <div className={x.text}>
                    Education: KNUBA
                </div>
                <div className={x.text}>
                    WebSite: TarasShevchenko.com
                </div>
            </div>
        </div>
    )
}

export default Description;