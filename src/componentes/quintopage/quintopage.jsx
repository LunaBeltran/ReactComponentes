import {Link} from "react-router-dom"
import './quintopage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Quintopage =() => {
    return(

    <div>
        <Navbar/>
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="tituloGi">Girasol</h1>
                <br/>
                    <div className="contentprin">
                        <img className="imgp5" src="https://www.thecolvinco.com/es/blog/wp-content/uploads/2017/07/12A7681-copia-min.jpg" width={20} height={15}></img>
                            <h3 className="subtituloGi">Información:</h3>
                            <p className="textGi">Los girasoles, con su radiante belleza y su imponente presencia, han cautivado la atención y el asombro de la humanidad durante siglos. Estas flores majestuosas, conocidas científicamente como Helianthus annuus, son verdaderas maravillas de la naturaleza que se destacan por su peculiar comportamiento y sus múltiples usos.</p>
                            <br/>
                            <h3 className="subtituloGi">¿Donde poner?</h3>
                            <p className="textGi">Los girasoles son plantas que requieren de una exposición solar adecuada para su crecimiento óptimo. Por lo tanto, elige un lugar en tu jardín, terraza o patio que reciba la mayor cantidad de luz solar posible y que sea suficientemente ancho para permitir su desarrollo. ¡Son plantas que pueden crecer hasta ser bastante altas!</p>
                            <p className="textGi">A su vez, asegúrate de plantarlos en un suelo bien drenado que no sea propenso a encharcar el agua y que sea ligeramente arenoso y fértil. Si es posible, busca un lugar protegido de vientos fuertes y orientados hacia el este para que cuando se vaya el sol hacia el oeste hayan aprovechado toda la luz solar posible. </p>
                            <br />
                            <h3 className="subtituloGi">Origen y significado:</h3>
                            <p className="textGi">Los girasoles son una planta herbácea originaria de Centro y Norteamérica, aunque actualmente se cultivan en zonas muy diversas. Su relación con el sol es de sobra conocida: lo llevan implícito en su nombre, lo miran para nutrirse de sus rayos y sus colores nos lo recuerdan. Precisamente sus tonalidades los convierten también en símbolos de infancia, buena energía y vitalidad.</p>
                            <p className="textGi">Ya en la mitología griega, los girasoles representaban a los dioses del sol y simbolizaban la adoración al astro rey. En la cultura popular contemporánea, los girasoles también se han asociado con sentimientos de optimismo y alegría, transmitiendo un mensaje de esperanza incluso en los momentos más oscuros.</p>
                            <br />
                            <h3 className="subtituloGi">Cuidados de un girasol cortado:</h3>
                            <p className="textGi">Presta atención a las siguientes claves para cuidar girasoles cortados que nos ha facilitado la experta de Colvin Mireia Aldomà:</p>
                                <div>
                                    <ul className="textGi">
                                        <li>Riego. Lo ideal es regarlos con agua fresquita cada día o cada dos días. Eso sí, conviene evitar siempre que haya pétalos u hojas en el agua, pues esto puede provocar que se pudra el tallo o se deteriore la flor.</li>
                                        <li>Vitaminas. Según Mireia, es básico agregar siempre "flower food" para mantener las plantas bonitas y bien hidratadas. En sus palabras, este alimento "es como nuestro café de la mañana". Aunque también nos deja un alternativa casera: las aspirinas.</li>
                                        <li>Lugar. Los girasoles deben colocarse en un sitio fresco al que no llegue luz solar directa. Además, debemos evitar que el ramo esté cerca de cualquier aparato que emita calor, aire frío, vapor o similares. Y es que las flores huyen de las temperaturas extremas.</li>
                                        <li>Corta el tallo. Por último, Mireia nos da un truco de florista: corta el tallo en diagonal, y no recto, para que absorba más agua, repitiendo esta acción cada dos días. Y, por supuesto, mima las plantas.</li>
                                    </ul>
                                </div>
                            <div className="videoGi"><iframe width="695" height="391" src="https://www.youtube.com/embed/CsIHZpeidfk" title="5 Recomendaciones para la siembra y el cuidado de los girasoles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            <br/>
                            <br/>

                                <section class="portafolioGi">
                                    <div class="contenedor">
                                        <h2 class="tituloCla">Portafolio</h2>
                                        <div class="galeria-port">
                                            <div class="imagen-port">
                                                <img src="https://eos.com/wp-content/uploads/2023/09/how-to-grow-sunflower.png.webp" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://content.elmueble.com/medio/2023/05/30/campo-de-girasoles_5216fe58_230530101206_1200x630.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://www.floresyplantas.net/wp-content/uploads/flores-de-girasoles1.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopBp8h8XxujeXCcvQm0aX3M1tygsL4oqPHi13RjbdpA&s" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvDWW-Hhv1m3LyCZc7G_ku_5OOH8gx9pW-qX4IgFmMg&s" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://content.elmueble.com/medio/2019/07/18/ramo-de-girasoles-formentera_d94b1c6e_1000x784.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://www.publico.es/ahorro-consumo-responsable/wp-content/uploads/2022/09/sunflower-1024x682.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXPdllPPqRK-oN4OCV32uNqI9Alho0N8nmWmET9fOMg&s" alt=""></img>
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

export {Quintopage}   ;