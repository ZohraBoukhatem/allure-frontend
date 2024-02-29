import "../styles/ContactPage.css";
import axios from "axios";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/language.context";

const API_URL = import.meta.env.VITE_API_URL;

function ContactPage() {
  const {lang} = useContext(LanguageContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {
      name,
      email,
      subject,
    };
    axios
      .post(`${API_URL}/queries`, query)
      .then((response) => {
        console.log("query sent");
        setSend(true);
      })
      .catch((error) => {
        console.log("this is the error:", error);
      });
  };

  return (
    <>
      {lang === "eng" && !send && (
        <div className="contact">
          <h2>Contact us</h2>
<hr/>
          <div className="info">
            <p>Email: example@gmail.com</p>
            <p>Tel: +4912311944875</p>
            <p>Address: Franje Čandeka 52f</p>
          </div>
<hr/>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Your name.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Your email.."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              value={subject}
              placeholder="Write something.."
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <button 
            type="submit">Send</button>
          </form>
        </div>
      )}

      {lang === "eng" && send && (
        <div className="contact">
          <form>
            <p>Request send</p>
            <button
              onClick={() => {
                setSend(false), setSubject("");
              }}
            >
              Send another?
            </button>
          </form>
        </div>
      )}

      {lang === "cro" && !send && (
        <div className="contact">
          <h2>Kontaktirajte nas</h2>
          <div className="info">
            <p>Email: example@gmail.com</p>
            <p>Tel: +4912311944875</p>
            <p>Adresa: Franje Čandeka 52f</p>
          </div>
          <img src="/divider.png" alt="divider" />

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ime</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Vaše ime i prezime.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Vaš email.."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="subject">Predmet</label>
            <textarea
              id="subject"
              name="subject"
              value={subject}
              placeholder="Napišite nešto.."
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />

            <button type="submit">Poslati</button>
          </form>
        </div>
      )}

      {lang === "cro" && send && (
        <div className="contact">
          <form>
            <p>Zahtjev poslan</p>
            <button
              onClick={() => {
                setSend(false), setSubject("");
              }}
            >
              Poslati još jedan?
            </button>
          </form>
        </div>
      )}

      {lang === "ger" && !send && (
        <div className="contact">
          <h2>Kontakt aufnehmen</h2>
          <div className="info">
            <p>Email: example@gmail.com</p>
            <p>Tel: +4912311944875</p>
            <p>Adresse: Franje Čandeka 52f</p>
          </div>
          <img src="/divider.png" alt="divider" />

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Vor- und Nachname.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Ihre Email.."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="subject">Betreff</label>
            <textarea
              id="subject"
              name="subject"
              value={subject}
              placeholder="Hier scheiben.."
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />

            <button type="submit">Absenden</button>
          </form>
        </div>
      )}
      {lang === "ger" && send && (
        <div className="contact">
          <form>
            <p>Anfrage geschickt</p>
            <button
              onClick={() => {
                setSend(false), setSubject("");
              }}
            >
              Noch eine schicken?
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ContactPage;
