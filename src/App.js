import "./App.css";
import TypeWriterEffect from "react-typewriter-effect";
import LinkedinLogo from "./icons/linkedin.png";
import GithubLogo from "./icons/github.png";
import InstagramLogo from "./icons/instagram.png";

function App() {
  const InstagramLink = (props) => (
    <a href="https://instagram.com/cheesetan_" style={{ margin: 5 }}>
      <img src={InstagramLogo} alt="Instagram" className="profileURL" />
    </a>
  );

  const LinkedinLink = (props) => (
    <a href="https://linkedin.com/in/tristanchay" style={{ margin: 5 }}>
      <img src={LinkedinLogo} alt="Linkedin" className="profileURL" />
    </a>
  );

  const GithubLink = (props) => (
    <a href="https://github.com/cheesetan" style={{ margin: 5 }}>
      <img src={GithubLogo} alt="Github" className="profileURL" />
    </a>
  );

  return (
    <div className="App">
      <header className="App-header">
        <section id="introSection">
          <div style={{ margin: 15 }}>
            <h1 style={{ margin: 0 }}>Hello! I'm Tristan Chay!</h1>
            <TypeWriterEffect
              textStyle={{
                textAlign: "center",
                fontSize: "32px",
                color: "#9BA4B5",
              }}
              cursorColor="#FFFFFF"
              text={"i'm a mobile developer :)"}
              typeSpeed={35}
            />

            <div style={{ marginTop: 15 }}>
              <InstagramLink />
              <LinkedinLink />
              <GithubLink />
            </div>
          </div>

          <div></div>
        </section>
      </header>
    </div>
  );
}

export default App;
