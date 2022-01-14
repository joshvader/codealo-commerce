import "../pages/product.css"
import {useNavigate } from "react-router-dom"
const Detalle = () => {
    const navigate = useNavigate();
    return (
        
        <section>
             
            <div className="col-12">
                <h1 className="mb-2 text-center">Check de pago</h1>
            </div>
            <div className="image-gallery-image">
                <i className="fa fa-check" aria-hidden="true"></i>

            <div id="technical-specifications-container" className="content-card"><div class="row"><div class="col-12 col-md-6 col-xl-4">
                    <h3>Compra confirmada</h3>
                   <p>Tu pedido fue hecho, gracias por confiar en PCNIEL!!.</p>
                </div>

                    <div className="col-12 col-md-6 col-xl-4">
                        <h3>Te invitamos a volver a nuestra tienda</h3>
                        <button className="btn btn-success m-3" onClick={() => { navigate("/") }} >Volver a la página principal</button>                        
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                       
                       
                    </div>
            </div>
        </div>
    </div>

        
    
        </section>
        
    )
}

export default Detalle
