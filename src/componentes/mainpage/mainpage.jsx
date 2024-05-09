import {Link} from "react-router-dom"
import './mainpage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

const Mainpage =() => {
    return(

    <div>
        <Navbar />
        <div className = "containerrmp">
            <div className="contentmp">
                <h1 className="titulo">Bienvenido a Luju</h1>
                <br/>
                    <div className="contentprin">
                        <p className="text">Bienvenido a Luju, tu destino floral para expresar emociones con elegancia y frescura. En Luju, nos enorgullece ofrecerte una experiencia floral excepcional, donde cada pétalo cuenta una historia única.</p>
                        <p className="text">Sumérgete en nuestro exquisito catálogo de arreglos florales, cuidadosamente diseñado para cada ocasión especial. Desde cautivadoras rosas rojas que simbolizan el amor apasionado hasta delicados ramos de lirios que transmiten pureza y serenidad, en Luju encontrarás la combinación perfecta de belleza y significado.</p>
                        <p className="text">En Luju, no solo te ofrecemos flores, sino una experiencia de regalo completa. Personaliza tu pedido con tarjetas y mensajes conmovedores, y confía en nuestro equipo dedicado para asegurarte de que cada entrega sea puntual y perfecta.</p>
                        <img className="imgmain" src="https://www.namesnack.com/images/namesnack-flower-business-names-5700x3716-20200915.jpeg?crop=21:16,smart&width=420&dpr=2" width={20} height={15}></img>
                        <p className="textfrase">Descubre la magia de Luju y deja que tus emociones florezcan.</p>
                        <p className="text">Esta será tu pagina favoritaaaa, compra flores y ayuda al medio ambiente. 🐝 🌺</p>
                        <p className="text">Comienza conociendo un poco de las flores y platas que mas te gusten, escoge y da clic en la que desees.</p>
                    </div>
                <br />
                <br />
                
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Mainpage   ;