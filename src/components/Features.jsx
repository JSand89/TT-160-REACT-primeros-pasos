import imagenTest from "../assets/imagenTest.jpg"
import styles from "./features.module.css"
export default function Features(){
    return(
    <>
        <h2>Caracteristicas Principales</h2>
        <section id="features" className={styles.features}>
            <div class="card" style={{width:"18rem"}}>
                <img src={imagenTest} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
            <div class="card" style={{width:"18rem"}}>
                <img src={imagenTest} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
            <div class="card" style={{width:"18rem"}}>
                <img src={imagenTest} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </section>
    </>)
}