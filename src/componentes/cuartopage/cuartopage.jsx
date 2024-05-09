import {Link} from "react-router-dom"
import './cuartopage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Cuartopage =() => {
    return(

    <div>
        <Navbar/>
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="tituloSa">Sakura</h1>
                <br/>
                <div className="contentprin">
                            <img className="imgp4" src="https://s1.significados.com/foto/flor-cerezo.jpg?class=article" width={20} height={15}></img>
                                <h3 className="subtituloSa">Información:</h3>
                            <p className="textSa"> La flor de cerezo, también conocida como sakura en japonés, es una de las flores más emblemáticas y hermosas del mundo, y en especial en Japón, donde es un símbolo de profunda importancia cultural y emocional. Tanto, que cada primavera se espera con mucha emoción porque las calles se llenan de su hermoso rosa pálido.</p>
                            <br/>
                            <h3 className="subtituloSa">Origen:</h3>
                            <p className="textSa">Las flores de cerezo son originarias de Asia Oriental y se han cultivado en Japón durante más de mil años. La historia de esta hermosa flor está ligada a la cultura japonesa y se remonta a los tiempos antiguos. Se cree que las primeras cerezas silvestres florecieron en el período Jomon (14,000-300 a.C.), aunque no eran tan atractivas como las variedades cultivadas posteriormente.</p>
                            <p className="textSa">El cultivo fue especialmente seleccionado a lo largo de los siglos, dando lugar a las flores que conocemos hoy en día.</p>
                            <p className="textSa">Durante el período Heian (794-1185 d.C.), la aristocracia japonesa adoptó la costumbre de contemplar la belleza de las flores de cerezo en una práctica conocida como hanami. Esta tradición sigue viva en la actualidad y se celebra durante la temporada de floración de sakura, que generalmente ocurre en primavera.</p>
                            <br />
                            <h3 className="subtituloSa">Clima:</h3>
                            <div>
                                <ul className="textSa">
                                    <li>Inviernos fríos: las flores de cerezo requieren un período de invierno frío para descansar y acumular energía para la primavera.</li>
                                    <li>Primaveras moderadas: la floración de los cerezos se produce en primavera, así que necesitan primaveras moderadamente frescas.</li>
                                    <li>Evita las heladas tardías: las heladas tardías dañan los brotes y flores de cerezo en desarrollo.</li>
                                    <li>Luz solar: las flores de cerezo necesitan una cantidad adecuada de luz solar para prosperar.</li>
                                    <li>Cambio de estaciones: la transición gradual de las estaciones, con inviernos fríos y primaveras suaves, es esencial para que los cerezos florezcan en su momento adecuado.</li>
                                </ul>
                            </div>
                            <h3 className="subtituloSa">Cuidados:</h3>
                            <div>
                                <ul className="textSa">
                                    <li>Al ser una planta que produce frutos, necesita exposición solar completa.</li>
                                    <li>Debe pasar por lo menos inmerso en tres meses de frío para que las flores puedan darse.</li>
                                    <li>Aunque resiste fríos, no deben sobrepasar los -10 °C o -15 °C máximos.</li>
                                    <li>No deben plantarse muy apretados entre ellos por la copa amplia.</li>
                                    <li>Hay que evitar colocarlo en zonas de fuertes vientos porque cuando están en flor los pétalos podrían perderse.</li>
                                </ul>
                            </div>
                            <div className="videoSa"><iframe width="695" height="391" src="https://www.youtube.com/embed/_CqsvmfApeE" title="CUIDADOS del CEREZO JAPONÉS o SAKURA 🌸🇯🇵  (Riego, Sustrato, REPRODUCCIÓN y más)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            <br/>
                            <br/>
                            <section class="portafolioSa">
                                <div class="contenedor">
                                    <h2 class="tituloCla">Portafolio</h2>
                                    <div class="galeria-port">
                                        <div class="imagen-port">
                                            <img src="https://i.pinimg.com/736x/1e/a4/c6/1ea4c6afe02563c04fcffbd9ba97de22.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://img.freepik.com/fotos-premium/flor-sakura-taiwan_1048944-6278808.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707696000&semt=ais" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://resizer.glanacion.com/resizer/v2/los-sakuras-simbolizan-la-felicidad-2DGIRLRVAZGTLEXQIYXUPKJHQQ.JPG?auth=113acc9e66453f88014a4c351f293b0d412e57c3642d088bbba9049e5aaaea78&width=420&height=280&quality=70&smart=true" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://media.admagazine.com/photos/64f79de60a323b24fd8160a5/master/pass/flor%E2%80%91de%E2%80%91cerezo.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://media.admagazine.com/photos/64f79a2fadb58ff7b4aea46d/master/w_1600%2Cc_limit/flor%25E2%2580%2591de%25E2%2580%2591cerezo%25E2%2580%2591clima.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://i.pinimg.com/474x/4c/bc/db/4cbcdb089a5e1534c4462bead9db650b.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://estaticos-cdn.prensaiberica.es/clip/f3d94685-7198-4b5a-b7ad-ec4b89682825_alta-libre-aspect-ratio_default_0.jpg" alt=""></img>
                                        </div>
                                        <div class="imagen-port">
                                            <img src="https://i.pinimg.com/originals/07/a1/d4/07a1d4dd91beba1903f3dbdcb7ce5cb2.jpg" alt=""></img>
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

export {Cuartopage}   ;