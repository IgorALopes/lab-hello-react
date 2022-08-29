import style from "./style.module.css"
import img1 from "../../images/icon1.png"
import img2 from "../../images/icon2.png"
import img3 from "../../images/icon3.png"
import img4 from "../../images/icon4.png"

function Section() {
    return <section className={style.iconSect}>
        <div>
            <img src={img1} alt='Declarative'></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
            <img src={img2} alt='Components'></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
            <img src={img3} alt='Single-Way'></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to componet's</p>
        </div>
        <div>
            <img src={img4} alt='JSX'></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </section>
}

export default Section;