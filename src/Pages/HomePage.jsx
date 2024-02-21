
import "./HomePage.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language.context";

function HomePage() {
  const  {lang} = useContext(LanguageContext)
  
  return (
    <>
      {lang === "eng" && (
        <>
          <div className="header">
            <img src="/logo.png" alt="logo img" />
            <p>
              Congratulations on your engagement! Now, let's turn your dream
              wedding into a reality with <i>Allure</i>, your dedicated partner
              in creating magical and stress-free celebrations.
              <br />
              <img src="divider.png" alt="divider" style={{ width: "50%" }} />
            </p>
          </div>

          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <a href="#carousel__slide4" className="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide3"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide4" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide4"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  Go to first slide
                </a>
              </li>
            </ol>
          </section>

          <div>
            <div className="page-header">
              <h1 id="timeline">Our Services</h1>
            </div>

            <ul className="timeline">
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Weddings</h4>{" "}
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                  <hr />
                  <button>
                    <a href="/weddings">See more</a>
                  </button>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Team building</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                    <p>
                      Suco de cevadiss, é um leite divinis, qui tem lupuliz,
                      matis, aguis e fermentis. Interagi no mé, cursus quis,
                      vehicula ac nisi. Aenean vel dui dui. Nullam leo erat,
                      aliquet quis tempus a, posuere ut mi. Ut scelerisque neque
                      et turpis posuere pulvinar pellentesque nibh ullamcorper.
                      Pharetra in mattis molestie, volutpat elementum justo.
                      Aenean ut ante turpis. Pellentesque laoreet mé vel lectus
                      scelerisque interdum cursus velit auctor. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Etiam ac
                      mauris lectus, non scelerisque augue. Aenean justo massa.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Graduations</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Workshops</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Other events</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
      {lang === "cro" && (
        <>
          <div className="header">
            <img src="/logo.png" alt="logo img" />
            <p>
              Čestitamo Vam na zarukama! Sada dopustite nama, <i>Allure</i>{" "}
              timu, da Vam organizira savršeno vjenčanje.
              <br />
              <img src="divider.png" alt="divider" style={{ width: "50%" }} />
            </p>
          </div>

          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <a href="#carousel__slide4" className="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide3"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide4" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide4"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  Go to first slide
                </a>
              </li>
            </ol>
          </section>

          <div>
            <div className="page-header">
              <h1 id="timeline">Naše usluge</h1>
            </div>

            <ul className="timeline">
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Vjenčanja</h4>{" "}
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                  <hr />
                  <button>
                    <a href="/weddings">Više</a>
                  </button>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Team building</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                    <p>
                      Suco de cevadiss, é um leite divinis, qui tem lupuliz,
                      matis, aguis e fermentis. Interagi no mé, cursus quis,
                      vehicula ac nisi. Aenean vel dui dui. Nullam leo erat,
                      aliquet quis tempus a, posuere ut mi. Ut scelerisque neque
                      et turpis posuere pulvinar pellentesque nibh ullamcorper.
                      Pharetra in mattis molestie, volutpat elementum justo.
                      Aenean ut ante turpis. Pellentesque laoreet mé vel lectus
                      scelerisque interdum cursus velit auctor. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Etiam ac
                      mauris lectus, non scelerisque augue. Aenean justo massa.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Maturalne</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Radionice</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Ostalo</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
      {lang === "ger" && (
        <>
          <div className="header">
            <img src="/logo.png" alt="logo img" />
            <p>
              Glückwunsch zur Hochzeit! Lassen Sie uns, dem <i>Allure</i> team,
              Ihre perfekte Hochzeit organisieren!
              <br />
              <img src="divider.png" alt="divider" style={{ width: "50%" }} />
            </p>
          </div>

          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <a href="#carousel__slide4" className="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide3"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide4" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide4"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  Go to first slide
                </a>
              </li>
            </ol>
          </section>

          <div>
            <div className="page-header">
              <h1 id="timeline">Unsere Dienstleistungen</h1>
            </div>

            <ul className="timeline">
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Hochzeiten</h4>{" "}
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                  <hr />
                  <button>
                    <a href="/weddings">Mehr</a>
                  </button>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Team building</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                    <p>
                      Suco de cevadiss, é um leite divinis, qui tem lupuliz,
                      matis, aguis e fermentis. Interagi no mé, cursus quis,
                      vehicula ac nisi. Aenean vel dui dui. Nullam leo erat,
                      aliquet quis tempus a, posuere ut mi. Ut scelerisque neque
                      et turpis posuere pulvinar pellentesque nibh ullamcorper.
                      Pharetra in mattis molestie, volutpat elementum justo.
                      Aenean ut ante turpis. Pellentesque laoreet mé vel lectus
                      scelerisque interdum cursus velit auctor. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Etiam ac
                      mauris lectus, non scelerisque augue. Aenean justo massa.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Abschlussfeiern</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Workshops</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Weiteres</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
