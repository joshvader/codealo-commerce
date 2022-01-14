import Navbar from "../sections/Navbar"

const Checkouted = () => {
    return (
        //Catasteristicas del equipo
        <section>
            <Navbar />
            <div>
            
                <div className="image-gallery-image">
                    <img src="https://media.istockphoto.com/vectors/tick-icon-vector-symbol-checkmark-isolated-on-white-background-icon-vector-id1152863138?k=20&m=1152863138&s=612x612&w=0&h=-PSL5jYX0nw6MNXRaCSxEOsvIaVJs9HMUyASnN7O1ys=" />

                    <div id="technical-specifications-container" className="content-card"><div class="row"><div class="col-12 col-md-6 col-xl-4">
                        <h3>Características</h3>
                        <dl>
                            <dt>Procesador</dt> <dd><a href="/notebook_processors?id=1420887" class="text-primary">AMD Ryzen 5 5600H (6 núcleos /
                                12 hilos / 3300 MHz - 4200 MHz)</a></dd>
                            <dt>RAM</dt> <dd>8 GB DDR4 (3200 MHz)</dd>
                            <dt>Pantalla</dt> <dd>LED 15.6" (1920x1080)  / 144 Hz</dd>
                            <dt>Batería</dt> <dd>3 celdas (53500 mWh)</dd>
                            <dt>Almacenamiento</dt> <dd>
                                <ul>
                                    <li>SSD 512GB</li>
                                </ul>
                            </dd>
                            <dt>
                                Tarjetas de video</dt> <dd>
                                <ul>
                                    <li><a href="/notebook_video_cards?id=764087" class="text-primary">AMD Radeon RX Vega 6 (Integrada)</a></li>
                                    <li><a href="/notebook_video_cards?id=1072723" class="text-primary">AMD Radeon RX 5500M (4 GB)</a></li>
                                </ul>
                            </dd>
                            <dt>Puertos</dt> <dd>
                                <ul>
                                    <li>1x HDMI 1.4</li>
                                    <li>1x RJ45 (10 / 100 / 1000 Mbps)</li>
                                    <li>2x SuperSpeed USB 5Gbps Type-A (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1)</li>
                                    <li>1x SuperSpeed USB 5Gbps Type-C (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1)</li>
                                    <li>1x USB 2.0</li>
                                </ul>
                            </dd>
                        </dl>
                    </div></div></div>
                </div>

            </div>
        </section>
    )
}

export default Checkouted
