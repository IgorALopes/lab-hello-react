import Button from "./components/button"
import Nav from "./components/nav"
import Section from "./components/section"
import "./style.css";

function App() {
  return (
    <>
      <header>
      <Nav/>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
      <Button/>
      </header>
      <Section/>
    </>
  );
}

export default App;
