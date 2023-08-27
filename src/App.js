import './App.css';
import TypeWriterEffect from "react-typewriter-effect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{margin: 0}}>Hello! I'm Tristan Chay!</h1>
        <TypeWriterEffect
                  textStyle={{
                    fontSize: "32px",
                    color: "#9BA4B5",
                  }}
                  cursorColor="#E1E3FF"
                  text={"i'm a mobile developer :)"}
                  typeSpeed={50}
                />     
      </header>
    </div>
  );
}

export default App;
