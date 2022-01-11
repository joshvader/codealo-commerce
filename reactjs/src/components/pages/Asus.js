

import Navbar from "../sections/Navbar"

const Asus = () => {
	return (

		//Catasteristicas del equipo
		<section>
			<Navbar />
			<div>
				<div className="col-12">
					<h1 className="mb-4 mb-4 my-5">ASUS TUF Dash F15 FX516PC-HN021T [90NR05U1-M00580]</h1>
				</div>
				<div className="image-gallery-image">
					<img src="https://publicapi.solotodo.com/products/119108/picture/?width=1000&amp;height=300" />

					<div id="technical-specifications-container" className="content-card"><div class="row"><div class="col-12 col-md-6 col-xl-4">
						<h3>Características</h3>
						<dl>
							<dt>Procesador</dt> <dd><a href="/notebook_processors?id=1358905" class="text-primary">Intel Core i7-11370H (4 núcleos /
								8 hilos / 3300 MHz - 4800 MHz)</a></dd>
							<dt>RAM</dt> <dd>8 GB DDR4 (3200 MHz)</dd>
							<dt>Pantalla</dt> <dd>LED 15.6" (1920x1080)  / 144 Hz</dd>
							<dt>Batería</dt> <dd>4 celdas (76000 mWh)</dd>
							<dt>Almacenamiento</dt> <dd>
								<ul>
									<li>SSD 512GB</li>
								</ul>
							</dd>
							<dt>
								Tarjetas de video</dt> <dd>
								<ul>
									<li><a href="/notebook_video_cards?id=1259053" class="text-primary">Intel Iris Xe Graphics G7 96EUs (Integrada)</a></li>
									<li><a href="/notebook_video_cards?id=1410962" class="text-primary">NVIDIA GeForce RTX 3050 (4 GB)</a></li>
								</ul>
							</dd>
							<dt>Puertos</dt> <dd>
								<ul>
									<li>1x HDMI 2.0</li>
									<li>1x RJ45 (10 / 100 / 1000 Mbps)</li>
									<li>3x SuperSpeed USB 5Gbps Type-A (USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1)</li>
									<li>1x Thunderbolt 4 (con señal HDMI / DisplayPort)</li>
								</ul>
							</dd>
						</dl>
					</div></div></div>
				</div>

			</div>
		</section>
	)
}

export default Asus
