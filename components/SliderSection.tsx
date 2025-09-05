"use client";

import Link from "next/link";

export default function SliderSection() {
  return (
    <section className="slider_section" data-aos="fade-up">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Hilary Industrie
                      <br />
                      Technologie et Commerce
                    </h1>
                    <p>
                      FOURNITURE, INSTALLATION, MAINTENANCE D&apos;EQUIPEMENTS DE PESAGE
                    </p>
                    <div className="btn-box">
                      <Link href="/secteur-logistique" className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition">
                        Lire Plus
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img
                      src="/images/production industr.png"
                      alt=""
                      className="rounded-circle img-fluid"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Hilary Industrie
                      <br />
                      Technologie et Commerce
                    </h1>
                    <p>
                      PRESTATIONS DE SERVICES INFORMATIQUE BUREAUTIQUE ET
                      CONSOMMABLES
                    </p>
                    <div className="btn-box">
                      <Link href="/secteur-informatique" className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition">
                        Lire Plus
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img
                      src="/images/prestation_service.png"
                      alt=""
                      className="rounded-circle img-fluid"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Hilary Industrie
                      <br />
                      Technologie et Commerce
                    </h1>
                    <p>COMMERCE GÉNÉRAL</p>
                    <div className="btn-box">
                      <Link href="/secteur-informatique" className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition">
                        Lire Plus
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img
                      src="/images/commerce.png"
                      alt=""
                      className="rounded-circle img-fluid"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
  );
}