import "../styles/AboutPage.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language.context";

function AboutPage() {
  const {lang} = useContext(LanguageContext)

  return (
    <>
      {lang === "eng" && (
        <>
          <div className="about">
<section>
<h2>About us</h2>

            <p>
              Welcome to <i>Allure</i>, where dreams become reality and love
              takes center stage. As passionate creators of unforgettable
              moments, we are dedicated to crafting your perfect wedding day,
              ensuring that every detail reflects your unique love story.
            </p>
            <p>
              <i>Allure</i> is not just a wedding planning service; we are your
              partners in turning your vision into a seamless and breathtaking
              reality. With a team of experienced and creative professionals, we
              are committed to making your special day truly exceptional.
            </p>
            <p>
              Our Approach: At <i>Allure</i>, we understand that every couple is
              unique, and so is their love story. Our approach is personalized
              and tailored to reflect your individual style, personality, and
              dreams. From the first consultation to the last dance, we work
              closely with you to create an experience that captures the essence
              of your love.
            </p>
            <p>
              Our comprehensive range of services covers every aspect of wedding
              planning, ensuring a stress-free and enjoyable journey for you and
              your partner. Whether you dream of a grand celebration or an
              intimate gathering, we have the expertise to bring your vision to
              life.
            </p>
            <p>
              Let us embark on this journey together, turning your wedding
              dreams into a beautiful reality. Contact us today to schedule a
              consultation and begin the enchanting adventure of planning your
              perfect day with <i>Allure</i>.
            </p>
</section>
      </div>    

<div>
            <div className="page-header">
              <h2 id="timeline">Why choose us?</h2>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-badge">
                  <img src="A.png" alt="logo" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                  <h4 className="timeline-title">Experience</h4>{" "}
                  </div>
                  <hr />
                  <div className="timeline-body">
                    <p>
                  With years of experience in the industry, we bring a wealth of
                  knowledge and expertise to each wedding we plan.
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
                  <h4 className="timeline-title">Attention to Detail</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                  We believe that it's the little details that make a wedding
                  truly memorable. Our team is meticulous in ensuring that every
                  element is perfect.
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
                  <h4 className="timeline-title">Personalized Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                  Your love story is unique, and your wedding should be too. We
                  take the time to understand your vision and tailor our
                  services to meet your individual needs.
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
                  <h4 className="timeline-title">Stress-Free Planning</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                  Planning a wedding can be overwhelming, but with <i>Allure</i>
                  , you can relax knowing that every detail is in capable hands.
                  </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

<hr/>
          <div className="team">
            <h2>Our Team</h2>
            <div className="row">
              <div className="column">
                <div className="card">
                  <img src="/girl.jpg" alt="profile" />
                  <div className="container">
                    <h4>Carmen Aji</h4>
                    <p className="title">Co-Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img src="/guy.jpg" alt="profile" />
                  <div className="container">
                    <h4>Luka Čanković</h4>
                    <p className="title">Co-Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {lang === "cro" && (
        <>
          <div className="about">
            <img className="divider" src="/divider.png" alt="divider" />

            <p>
            Dobrodošli u <i>Allure</i>, gdje snovi postaju stvarnost, a ljubav zauzima središnje mjesto. Kao strastveni kreatori nezaboravnih trenutaka, posvećeni smo osmišljavanju vašeg savršenog dana vjenčanja, osiguravajući da svaki detalj odražava vašu jedinstvenu ljubavnu priču.
            </p>
            <p>
            <i>Allure</i> nije samo usluga planiranja vjenčanja; mi smo vaši partneri u pretvaranju vaše vizije u besprijekornu stvarnost koja oduzima dah. S timom iskusnih i kreativnih profesionalaca, predani smo tome da vaš poseban dan učinimo uistinu iznimnim.
            </p>
            <p>
            Naš pristup: U <i>Allure</i> razumijemo da je svaki par jedinstven, kao i njihova ljubavna priča. Naš pristup je personaliziran i skrojen kako bi odražavao vaš individualni stil, osobnost i snove. Od prve konzultacije do posljednjeg plesa, blisko surađujemo s vama kako bismo stvorili iskustvo koje će obuhvatiti bit vaše ljubavi.
            </p>
            <p>
            Naš sveobuhvatan raspon usluga pokriva svaki aspekt planiranja vjenčanja, osiguravajući putovanje bez stresa i ugodno za vas i vašeg partnera. Bez obzira sanjate li o velikoj proslavi ili intimnom okupljanju, mi imamo stručnost da vašu viziju oživimo.
            </p>
            <p>
            Dopustite nam da zajedno krenemo na ovo putovanje, pretvarajući vaše snove o vjenčanju u prekrasnu stvarnost. Kontaktirajte nas danas kako biste zakazali konzultacije i započeli očaravajuću avanturu planiranja savršenog dana s <i>Allure</i>.
            </p>
            <img className="divider" src="/divider.png" alt="divider" />

            <h3>Zašto odabrati nas:</h3>
            <ul>
              <li>
                <b>{"-->"} Iskustvo:</b>
                <div>
                S godinama iskustva u industriji, donosimo bogatstvo
                   znanja i stručnosti za svako vjenčanje koje planiramo.
                </div>
              </li>

              <li>
                <b>{"-->"} Perfekcionizam: </b>
                <div>
                Vjerujemo da su mali detalji ti koji čine vjenčanje
                   doista nezaboravnim. Naš tim je pedantan u osiguravanju da je svaki
                   element savršen.
                </div>
              </li>

              <li>
                <b>{"-->"} Personalizirane usluge:</b>
                <div>
                Vaša ljubavna priča je jedinstvena, a takvo bi trebalo biti i vaše vjenčanje. 
                Mi odvajamo vrijeme kako bismo razumjeli Vašu viziju i pružili usluge koje zadovoljavaju vaše individualne potrebe.
                </div>
              </li>

              <li>
                <b>{"-->"} Planiranje bez stresa:</b>
                <div>
                Planiranje vjenčanja može biti naporno, ali uz <i>Allure</i>
                   , možete se opustiti znajući da je svaki detalj u sposobnim rukama.
                      
                </div>
              </li>
            </ul>
          </div>
          <div className="team">
            <h1>Naš tim</h1>
            <div className="row">
              <div className="column">
                <div className="card">
                  <img src="/girl.jpg" alt="profile" />
                  <div className="container">
                    <h2>Carmen Aji</h2>
                    <p className="title">Suosnivačica</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img src="/guy.jpg" alt="profile" />
                  <div className="container">
                    <h2>Luka Čanković</h2>
                    <p className="title">Suosnivač</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {lang === "ger" && (
        <>
          <div className="about">
            <img className="divider" src="/divider.png" alt="divider" />

            <p>
            Willkommen bei <i>Allure</i>, wo Träume Wirklichkeit werden und die Liebe im Mittelpunkt steht. Als leidenschaftliche Schöpfer unvergesslicher Momente widmen wir uns der Gestaltung Ihres perfekten Hochzeitstags und stellen sicher, dass jedes Detail Ihre einzigartige Liebesgeschichte widerspiegelt.
            </p>
            <p>
            <i>Allure</i> ist nicht nur ein Hochzeitsplanungsdienst; Wir sind Ihr Partner bei der Umsetzung Ihrer Vision in eine nahtlose und atemberaubende Realität. Mit einem Team aus erfahrenen und kreativen Fachleuten setzen wir uns dafür ein, dass Ihr besonderer Tag wirklich außergewöhnlich wird.
            </p>
            <p>
            Unser Ansatz: Bei <i>Allure</i> verstehen wir, dass jedes Paar einzigartig ist, ebenso wie seine Liebesgeschichte. Unser Ansatz ist individuell und auf Ihren individuellen Stil, Ihre Persönlichkeit und Ihre Träume zugeschnitten. Von der ersten Beratung bis zum letzten Tanz arbeiten wir eng mit Ihnen zusammen, um ein Erlebnis zu schaffen, das die Essenz Ihrer Liebe einfängt.
            </p>
            <p>
            Unser umfassendes Leistungsspektrum deckt alle Aspekte der Hochzeitsplanung ab und sorgt für eine stressfreie und angenehme Reise für Sie und Ihren Partner. Ganz gleich, ob Sie von einer großen Feier oder einem Treffen im kleinen Kreis träumen, wir verfügen über das Fachwissen, um Ihre Vision zum Leben zu erwecken.
            </p>
            <p>
            Lassen Sie uns gemeinsam auf diese Reise gehen und Ihre Hochzeitsträume in eine wunderschöne Realität verwandeln. Kontaktieren Sie uns noch heute, um einen Beratungstermin zu vereinbaren und das bezaubernde Abenteuer zu beginnen, Ihren perfekten Tag mit <i>Allure</i> zu planen.
            </p>
            <img className="divider" src="/divider.png" alt="divider" />

            <h3>Wieso uns wählen?:</h3>
            <ul>
              <li>
                <b>{"-->"} Erfahrung:</b>
                <div>
                Mit jahrelanger Erfahrung in der Branche bringen wir eine Fülle von Wissen und Fachwissen in jede von uns geplante Hochzeit ein.
                </div>
              </li>

              <li>
                <b>{"-->"} Perfektionismus:</b>
                <div>
                Wir glauben, dass es die kleinen Details sind, die eine Hochzeit wirklich unvergesslich machen. Unser Team achtet sorgfältig darauf, dass jedes Element perfekt ist.
                </div>
              </li>

              <li>
                <b>{"-->"} Personalisierte Dienstleistungen:</b>
                <div>
                Ihre Liebesgeschichte ist einzigartig und Ihre Hochzeit sollte es auch sein. Wir nehmen uns die Zeit, Ihre Vision zu verstehen und unsere Dienstleistungen auf Ihre individuellen Bedürfnisse abzustimmen.
                </div>
              </li>

              <li>
                <b>{"-->"} Plannen ohne Stress:</b>
                <div>
                Die Planung einer Hochzeit kann überwältigend sein, aber bei <i>Allure</i> können Sie sich entspannen und wissen, dass jedes Detail in kompetenten Händen liegt.
                </div>
              </li>
            </ul>
          </div>
          <div className="team">
            <h1>Unser Team</h1>
            <div className="row">
              <div className="column">
                <div className="card">
                  <img src="/girl.jpg" alt="profile" />
                  <div className="container">
                    <h2>Carmen Aji</h2>
                    <p className="title">Mitbegründerin</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img src="/guy.jpg" alt="profile" />
                  <div className="container">
                    <h2>Luka Čanković</h2>
                    <p className="title">Mitbegründer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <a href="https://www.linkedin.com/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutPage;
