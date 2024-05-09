import {Link} from "react-router-dom"
import './segundopage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Segundopage =() => {
    return(

    <div>
        <Navbar/>
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="tituloLi">Lirio</h1>
                <br/>
                <div className="contentprin">
                    <img className="imgp2" src="https://www.lavanguardia.com/files/image_449_253/files/fp/uploads/2022/03/30/6243aada8e7de.r_d.3000-2000.jpeg" width={20} height={15}></img>
                        <h3 className="subtituloLi">Información:</h3>
                        <p className="textLi">El lirio, también conocido como azucena, flor de lis o lilium es una de las plantas bulbosas más bonitas y populares. Sus flores son muy características por su forma de trompeta y su olor tan intenso, aunque es cierto que algunas variedades no son perfumadas. Se trata de una planta muy apreciada en el Feng Shui, ya que atrae buena energía al interior de la casa. Según Interflora, los lilium en colores llamativos, como el naranja o el amarillo, aportan una dosis extra de energía y vitalidad, además de dotar de alegría al ambiente.  </p>
                        <br/>
                        <h3 className="subtituloLi">Características:</h3>
                        
                            <div>
                                <ul className="textLi">
                                    <li>Los lirios son plantas bulbosas con unas flores muy sofisticadas. Se diferencian de otras flores por su tallo tan alargado, que pueden llegar a medir hasta 2 metros. ¡Impresionante! En cuanto a sus cuidados, que leerás más adelante, los lirios no necesitan mucho sol. Los lirios son flores de semisombra. Nunca deben recibir sol directo.</li>
                                    <li>Otro aspecto que siempre hay que tener en mente a la hora de colocar los lirios es que cuentan con un olor muy intenso. Los lirios contienen feniletilamina, una sustancia que estimula la producción de endorfinas en el cuerpo, y proporciona una sensación de tranquilidad y bienestar. Por eso, se aconseja colocar los lirios en espacios amplios y abiertos como el salón. Aunque es cierto que hay variedades de lirios que no cuentan con aromas.</li>
                                </ul>
                            </div>
                            <br/>

                        <h3 className="subtituloLi">Cuidados:</h3>
                        <p className="textLi">En un tiesto podrás recultivarla cada año. Para que las flores del lirio no pierdan el color, colócalas dentro de la casa con la mayor luminosidad posible. Solo requiere riegos periódicos para evitar que el sustrato se seque. Eso sí, para el correcto cuidado del lirio, mantén la tierra húmeda, pero asegúrate de que no queda agua encharcada; por eso, puede venir muy bien utilizar macetas con autorriego.</p>
                        <p className="textLi">En cuanto a la poda del lirio o lilium, tras la floración se pueden cortar los tallos y dejar que la planta se seque por completo, después ya podrás extraer los bulbos, limpiarlos y guardarlos para el próximo año. De hecho, es una de las plantas más bonitas para el patio y florece perfectamente en ambientes cómodos y sin agresiones meteorológicas.</p>
                        
                        <div className="videoLi"><iframe width="689" height="391" src="https://www.youtube.com/embed/sFD6xAIVN5k" title="Azucena o lirio - Jardinería" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <br/>
                        
                        <h3 className="subtituloLi">Significado:</h3>
                        <p className="textLi">El lirio o azucena es una flor llena de magia y encanto. Desde hace muchos años, el lirio ha sido considerado como una flor muy ligada a los dioses. En la antigua Grecia y Egipto se utilizan los lirios para hacer ofrendas a los dioses como muestra de gratitud. También los lirios están muy ligados al arte. Muchos artistas como Shakespeare, Van Gogh o Monet han incluido en sus obras los lirios o azucenas.</p>
                        <br/>
                        <br/>
                        
                            <section class="portafolioLi">
                                <div class="contenedor">
                                    <h2 class="tituloCla">Portafolio</h2>
                                    <div class="galeria-port">
                                        <div class="imagen-port">
                                            <img src="https://www.interflora.es/blog/wp-content/uploads/cuidados-de-los-lirios.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://www.interflora.es/blog/wp-content/uploads/tipos-de-lirios-2.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://previews.123rf.com/images/aneese/aneese1606/aneese160600109/59154127-detalle-de-una-flor-variada-mixta-lirios-asi%C3%A1ticos-en-un-jard%C3%ADn.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://plantasyflores.online/wp-content/uploads/2017/09/lily-1512813_1920.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://www.elblogdelatabla.com/wp-content/uploads/2019/04/lilium-Push-Off.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://www.interflora.es/blog/wp-content/uploads/lirios-grandes-1-1024x894.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://i.pinimg.com/originals/e5/4e/89/e54e8916e2a2ee336af1c7954356198f.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://m.media-amazon.com/images/I/61It5iRAszS._AC_SL1000_.jpg" alt=""></img>
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

export {Segundopage}   ;