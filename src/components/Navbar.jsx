import "../styles/Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language.context";


function Navbar() {
  const {lang, handleContentType} = useContext(LanguageContext)

  return (
    <nav className="nav">
      <div className="navbar">
      <div className="flags">
              {lang === "eng" && <button onClick={() => handleContentType("cro")}>
                <img src="/eng.png" alt="english flag" />
              </button>}
              {lang === "cro" &&  <button onClick={() => handleContentType("ger")}>
                <img src="/cro.png" alt="croatian flag" />
              </button>}
              {lang === "ger" &&  <button onClick={() => handleContentType("eng")}>
                <img src="/ger.png" alt="german flag" />
              </button>}
        <a href="/" className="home">
          <div>Home</div>
        </a>
            </div>  

        <section>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              {lang === "eng" && <a href="/contact">
                <div>Contact</div>
              </a>}
              {lang === "ger" && <a href="/contact">
                <div>Kontakt</div>
              </a>}
              {lang === "cro" && <a href="/contact">
                <div>Kontakt</div>
              </a>}
              
            </li>

            <li>
              {lang === "eng" &&
              <a href="/about">
                <div>About us</div>
              </a>
              }
              {lang === "cro" &&
              <a href="/about">
                <div>O nama</div>
              </a>
              }
              {lang === "ger" &&
              <a href="/about">
                <div>Über uns</div>
              </a>
              }
            </li>
            <li>
              <a href="https://www.facebook.com">
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 310 310"
                xmlSpace="preserve"
                >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="XMLID_834_">
                    {" "}
                    <path
                      id="XMLID_835_"
                      d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                      ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              </a>
            </li>
            <li className="insta">
              <a href="https://www.instagram.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                >
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
                </a>
            </li>
</ul>
      
</section>
            </div>    
    </nav>
  );
}
export default Navbar;
