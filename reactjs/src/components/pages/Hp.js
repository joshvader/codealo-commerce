import Navbar from "../sections/Navbar"

const Hp = () => {
    return (
        //Catasteristicas del equipo
        <section>
            <Navbar />
            <div>
                <div className="col-12">
                    <h1 className="mb-4 mb-4 my-5">HP Pavilion Gaming 16-A0004LA [190G0LA]</h1>
                </div>
                <div className="image-gallery-image">
                    <img src="https://publicapi.solotodo.com/products/90230/picture/?width=1000&amp;height=300" />

                    <div id="technical-specifications-container" className="content-card"><div class="row"><div class="col-12 col-md-6 col-xl-4">
                        <h3>Características</h3>
                        <dl>
                            <dt>Procesador</dt> <dd><a href="/notebook_processors?id=1168823" class="text-primary">Intel Core i7-10750H (6 núcleos /
                                12 hilos / 2600 MHz - 5000 MHz)</a></dd>
                            <dt>RAM</dt> <dd>12 GB DDR4 (2933 MHz)</dd>
                            <dt>Pantalla</dt> <dd>LED 16.1" (1920x1080)  / 60 Hz</dd>
                            <dt>Batería</dt> <dd>3 celdas (52500 mWh)</dd>
                            <dt>Almacenamiento</dt> <dd>
                                <ul>
                                    <li>SSD 512GB</li>
                                </ul>
                            </dd>
                            <dt>
                                Tarjetas de video</dt> <dd>
                                <ul>
                                    <li><a href="/notebook_video_cards?id=735971" class="text-primary">Intel UHD Graphics 630 (Integrada)</a></li>
                                    <li><a href="/notebook_video_cards?id=993114" class="text-primary">NVIDIA GeForce RTX 2060 Max-Q (6 GB)</a></li>
                                </ul>
                            </dd>
                            <dt>Puertos</dt> <dd>
                                <ul>
                                    <li>1x HDMI 2.0</li>
                                    <li>1x RJ45 (10 / 100 / 1000 Mbps)</li>
                                    <li>2x SuperSpeed USB 5Gbps Type-A (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1)</li>
                                    <li>1x SuperSpeed USB 5Gbps Type-C (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1) (con señal HDMI / DisplayPort)</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                        </div>
                            </div>
                </div>

            </div>
        </section>
    )
}

export default Hp
