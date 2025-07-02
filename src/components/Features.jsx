import imagenTest from "../assets/imagenTest.jpg"
export default function Features(){
    return(
    <>
        <section id="features">
            <h2>Caracteristicas Principales</h2>
            <div class="card" style={{width:"18rem"}}>
                <img src={imagenTest} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
            <div class="card" style={{width:"18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </section>
    </>)
}