import {Link} from "react-router-dom"
import './tercerapage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Tercerapage =() => {
    return(

    <div>
        <Navbar/>
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="tituloGar">Gardenia</h1>
                <br/>
                <div className="contentprin">
                    <img className="imgp3" src="https://www.elespectador.com/resizer/EtDjEvvlmGIrKLYa0uCO3UYKef0=/arc-anglerfish-arc2-prod-elespectador/public/JJHREQ4TOFHWDMX5UHTT6X7EZQ.jpg" width={20} height={15}></img>
                        <h3 className="subtituloGar">Información:</h3>
                            <p className="textGar">Son arbustos de hojas perennes de color verde claro, brillantes y lisas. Sus flores son blancas, similares a las rosas y se usan comúnmente como plantas ornamentales. Una flor, colocada en un vasito con agua, puede perfumar con un intenso y agradable aroma una habitación durante un par de días.</p>
                            <br/>
                            <h3 className="subtituloGar">Características:</h3>
                            <p className="textGar">La gardenia es una planta con flor que se puede cultivar tanto en interior como exterior. Es fácil de cuidar y no necesita un mantenimiento muy específico aunque no tolera bien los cambios de rutina. En cuanto a su origen, procede del sur de China y existen muchas variedades, la más común es la Gardenia Jasminoides. Es una planta de hoja perenne de color verde que puede llegar a medir hasta un metro en el exterior. En maceta no suele crecer tanto. </p>
                            <br/>
                            <h3 className="subtituloGar">Cuidados:</h3>
                            <p className="textGar">La gardenia es una planta con una buena floración y que casi no necesita cuidados. Aunque es cierto que no le gustan mucho los cambios de rutina. De aspecto es muy similar a las rosas. Aquí encontrarás algunos cuidados básicos si te animas a añadir en tu casa esta planta tan bonita: </p>
                            <div>
                                <ul className="textGar">
                                    <li>Luz. Es una planta que necesita mucha luz. De modo que si la añades en el interior de la casa debes situar en un rincón muy iluminado, puede ser cerca de la ventana. </li>
                                    <li>Riego. En verano la gardenia puede sufrir más por lo que hay que incidir con el riego, preferiblemente por inmersión. Esto significa que puedes introducir la maceta en un recipiente de agua y dejarla unos 15 minutos. También es bueno pulverizar agua sobre las hojas para que no se sequen, aunque siempre hay que evitar mojar las flores.</li>
                                    <li>Temperatura. La gardenia puede crecer perfectamente entre los 30 °C y los 15 °C.</li>
                                    <li>Sustrato. Ya sea en el jardín o cultivada en maceta en el interior, la gardenia necesita un sustrato ácido y que siempre esté húmedo.</li>
                                    <li>Plagas. Las gardenias son plantas que tienen algunos problemas con las plagas, sobre todo los pulgones, la araña roja y las cochinillas.</li>
                                </ul>
                            </div>
                            <div className="videoGar"><iframe width="695" height="391" src="https://www.youtube.com/embed/1Upl5mqUAzM" title="Gardenia - Jardinería" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            <br/>
                            <h3 className="subtituloGar">¿Donde poner?</h3>
                            <p className="textGar">La ventaja de esta bonita flor es que puedes cultivarla tanto en interior como exterior. Es una planta que se adapta fácilmente a terrazas, jardines o incluso a un salón luminoso. Lo único que debes tener siempre en cuenta es la luz para que crezca bien. </p>
                            <br/>
                            <br/>
                                <section class="portafolioGar">
                                    <div class="contenedor">
                                        <h2 class="tituloCla">Portafolio</h2>
                                        <div class="galeria-port">
                                            <div class="imagen-port">
                                                <img src="https://content.elmueble.com/medio/2022/11/20/gardenia-planta-flor_a82c7141_221120205636_1000x1000.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6UZ6IqJ909q7C7Hm2aDWir9vUz-Zqtu_zizHtWYrNA&s" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yyIKRxDmFa_jCZFSaFRGwg1bl4BIR62hllIam3S65A&s" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://www.ecured.cu/images/6/60/Pl2000026186.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://2.bp.blogspot.com/-qiGld_di0fg/UcQDUl2wb1I/AAAAAAAAbq4/bvxTDCHUzQ0/s1600/Gardenia+21-06-2013+7-55-47.JPG" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://verdecora.es/blog/wp-content/uploads/2021/02/gardenia-arbusto.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Gardenia_jasminoides_flower_Argentina.jpg/1200px-Gardenia_jasminoides_flower_Argentina.jpg" alt=""></img>
                                            </div>
                                            <div class="imagen-port">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XbN5MaSDwR0eSxqQeKYK6PSh_QdWQIYnRUtFOFK_kQ&s" alt=""></img>
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

export {Tercerapage}   ;