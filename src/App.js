import "./css/App.css";
import "./css/Icons.css";
import TypeWriterEffect from "react-typewriter-effect";
import LinkedinLogo from "./icons/linkedin.png";
import GithubLogo from "./icons/github.png";
import InstagramLogo from "./icons/instagram.png";
import { useState, useRef, useEffect } from "react";
import Awards from "./AwardsView";
import "animate.css";

function App() {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-300px" }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.querySelectorAll("div").forEach((el) => {
  //       el.classList.add("slide-up");
  //     });
  //   }
  // }, [isIntersecting]);

  const InstagramLink = (props) => (
    <div
      class={props.class}
      style={{ display: "inline-block", flexDirection: "row" }}
    >
      <a href="https://instagram.com/cheesetan_" style={{ margin: 5 }}>
        <img src={InstagramLogo} alt="Instagram" className="profileURL" />
      </a>
    </div>
  );

  const LinkedinLink = (props) => (
    <div
      class={props.class}
      style={{ display: "inline-block", flexDirection: "row" }}
    >
      <a href="https://linkedin.com/in/tristanchay" style={{ margin: 5 }}>
        <img src={LinkedinLogo} alt="Linkedin" className="profileURL" />
      </a>
    </div>
  );

  const GithubLink = (props) => (
    <div
      class={props.class}
      style={{ display: "inline-block", flexDirection: "row" }}
    >
      <a href="https://github.com/cheesetan" style={{ margin: 5 }}>
        <img src={GithubLogo} alt="Github" className="profileURL" />
      </a>
    </div>
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
                fontSize: "3.15vmin",
                color: "#9BA4B5",
              }}
              cursorColor="#FFFFFF"
              text={"i'm a mobile developer :)"}
              typeSpeed={35}
            />

            <div style={{ marginTop: 15 }}>
              <InstagramLink class="animate__animated animate__fadeInUp" />
              <LinkedinLink class="animate__animated animate__fadeInUp animate__delay-0point25s" />
              <GithubLink class="animate__animated animate__fadeInUp animate__delay-0point5s" />
            </div>
          </div>
        </section>
      </header>

      <Awards />

      {/* <footer style={{ flexDirection: "column", paddingBottom: 10 }}>
        <p>contact me or something</p>
        <div style={{ flexDirection: "row" }}>
          <InstagramLink />
          <LinkedinLink />
          <GithubLink />
        </div>
      </footer> */}
    </div>
  );
}

export default App;
