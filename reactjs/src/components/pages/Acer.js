

import Navbar from "../sections/Navbar"

const Acer = () => {
	return (

		//Catasteristicas del equipo
		<section>
			<Navbar />
			<div>
				<div className="col-12">
					<h1 className="mb-4 mb-4 my-5">Acer Aspire Nitro 5 AN515-55-53E5</h1>
				</div>
				<div className="image-gallery-image">
					<img src="https://publicapi.solotodo.com/products/123783/picture/?width=1000&amp;height=250" />

					<div id="technical-specifications-container" className="content-card"><div class="row"><div class="col-12 col-md-6 col-xl-4">
						<h3>Características</h3>
						<dl>
							<dt>Procesador</dt> <dd><a href="/notebook_processors?id=1203412" class="text-primary">Intel Core i5-10300H (4 núcleos /
								8 hilos / 2500 MHz - 4500 MHz)</a></dd>
							<dt>RAM</dt> <dd>8 GB DDR4 (2933 MHz)</dd>
							<dt>Pantalla</dt> <dd>LED 15.6" (1920x1080)  / 144 Hz</dd>
							<dt>Batería</dt> <dd>No hay información disponible</dd>
							<dt>Almacenamiento</dt> <dd>
								<ul>
									<li>SSD 256GB</li>
								</ul>
							</dd>
							<dt>
								Tarjetas de video</dt> <dd>
								<ul>
									<li><a href="/notebook_video_cards?id=735971" class="text-primary">Intel UHD Graphics 630 (Integrada)</a></li>
									<li><a href="/notebook_video_cards?id=1410962" class="text-primary">NVIDIA GeForce RTX 3050 (4 GB)</a></li>
								</ul>
							</dd>
							<dt>Puertos</dt> <dd>
								<ul>
									<li>1x HDMI</li>
									<li>1x RJ45 (10 / 100 / 1000 Mbps)</li>
									<li>1x SuperSpeed USB 10Gbps Type-A (USB 3.1 / USB 3.1 Gen 2 / USB 3.2 Gen 2)</li>
									<li>1x SuperSpeed USB 10Gbps Type-C (USB 3.1 / USB 3.1 Gen 2 / USB 3.2 Gen 2)</li>
									<li>2x SuperSpeed USB 5Gbps Type-A (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1)</li>
								</ul>
							</dd>
						</dl>
					</div></div></div>
				</div>

			</div>
		</section>
	)
}

export default Acer
