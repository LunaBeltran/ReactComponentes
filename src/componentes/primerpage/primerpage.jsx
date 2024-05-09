import {Link} from "react-router-dom"
import './primerpage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Primerpage =() => {
    return(

    <div>
        <Navbar/>
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="tituloCla">Clavelina</h1>
                <br/>
                    <div className="contentprin">
                        <img className="imgp1" src="https://www.hola.com/imagenes/decoracion/20211124200160/plantas-con-flores-clavelina-cuidados-nu/1-23-381/cuidados-clavelinas-clavel-chino-hola-decoracion-t.jpg" width={20} height={15}></img>
                        <h3 className="subtituloCla">Información:</h3>
                        <p className="textCla">La clavelina tiene su origen en Asia y es de esas plantas perennes que se reconocen a simple vista por su vistosidad y color, ya que su presencia en cualquier jardín hace que este se vea mucho más hermoso.</p>
                        <p className="textCla">Aunque pertenece a la familia del clavel, su propio nombre nos indica que su tamaño es más reducido. Alcanza como máximo los 50 centímetros (aunque su tamaño habitual es de alrededor de 25-30 centímetros). Se compone de tallos relativamente finos de los que brotan unas hojas de un color verde suave, acompañadas de unas preciosas flores con un diámetro de unos tres centímetros, con una variedad característica de tonalidades y pétalos anchos.</p>
                        <p className="textCla" >Es muy habitual ver posarse sobre los pétalos de las clavelinas a abejas o mariposas.</p>
                        <br/>
                        <h3 className="subtituloCla">Cuidados:</h3>
                        <p className="textCla" >Las clavelinas son muy agradecidas y no requieren de un cuidado constante, aunque conviene seguir una serie de pasos para su correcta floración.</p>
                        
                        <div>
                            <ul className="textCla">
                                <li >Riego. En verano necesitan agua con frecuencia, no así durante el resto del año. Se recomienda regarlas diariamente durante las temporadas más cálidas y dos veces por semana el resto de la temporada.</li>
                                <li>Cuidado de la tierra. Lo recomendable es plantarlas de forma agrupada, en sustrato poroso y aireado.</li>
                                <li>Luz. Es uno de los aspectos más importantes en el cuidado de la clavelina, y es que esta planta necesita mucha luz, con exposición directa en cualquier época del año. Este es uno de los requisitos indispensables para que su desarrollo se vea limitado.</li>
                                <li>Ubicación. Son adecuadas tanto para exterior como para interior, aunque su localización habitual suele ser en jardines y terrazas. Además, dada su necesidad de luz directa, el exterior suele ser la mejor elección, aunque no es una condición necesaria.</li>
                                <li>Temperatura. Se adapta a todo tipo de climas, también a los fríos, aunque se siente más cómoda en climas templados o cálidos. La primavera es el periodo ideal para plantar la clavelina.</li>
                                <li>Plagas. Con los cuidados adecuados la clavelina no debería tener problemas de plagas o enfermedades, pero habría que tener atención con la roya, un hongo que empezará a detectarse en las hojas mediante unos puntitos amarillos. Para evitarla, lo ideal es evitar la humedad excesiva, especialmente cuando la temperatura es baja.</li>
                            </ul>
                        </div>
                            
                            <div className="videoCla"><iframe width="695" height="391" src="https://www.youtube.com/embed/LXtTHN7_JYs" title="Cómo cuidar la clavelina o clavellina (Dianthus Chinensis)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            <br />
                            <h3 className="subtituloCla" >¿Donde plantar?</h3>
                            <p className="textCla">La clavelina se puede cultivar en maceta y también en jardín. La semilla germina en temperaturas moderadas, entre 15 °C y 20 °C. Es recomendable plantarlas en grupos, mejorando también su visibilidad y presencia. Hay que tener en cuenta que es importante que reciba exposición directa del sol, por lo que debes evitar la sobreexposición de las plantas. Recuerda que el suelo debe tener buen drenaje y, en caso de plantarse en macetas, no debería acumular agua en su base.</p>
                            <br />
                            <br />
                                <section class="portafolioCla">
                                    <div class="contenedor">
                                        <h2 class="tituloCla">Portafolio</h2>
                                        <div class="galeria-port">
                                            <div class="imagen-port">
                                                <img src="https://content.elmueble.com/medio/2022/07/28/clavelina-rebecca-niver-z0txuuculfq-unsplash_946793cd_1200x630.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://content.elmueble.com/medio/2022/07/27/clavelina-flor-exterior-planta_75101ead_900x900.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://2.bp.blogspot.com/-jx-dU9040Lc/W1NbymD1yMI/AAAAAAAApHM/ntTL4BqVtEQ0KXfHAXzyk0HebU0aZs75QCLcBGAs/w1200-h630-p-k-no-nu/clavelinas%2B11.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://i.pinimg.com/originals/2e/cc/14/2ecc14c1f3f0175ee2ca5d8a87ef8c7b.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://media.admagazine.com/photos/6549df6fde27ee4bf9a75f72/master/w_1600%2Cc_limit/clavel-del-poeta-significado.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://www.hogarmania.com/archivos/201909/clavel-del-poeta-668x400x80xX-1.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://www.hola.com/imagenes/decoracion/20211124200160/plantas-con-flores-clavelina-cuidados-nu/1-23-375/cuidados-clavelinas-clavel-chino-hola-decoracion-04-a.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://i.pinimg.com/736x/f4/72/ca/f472ca5b4927c4f411debbfc8965ab43.jpg" alt=""></img>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                </section>
                    </div>
                    <br />
                    <br />
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export {Primerpage}   ;