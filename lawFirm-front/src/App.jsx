import AnimatedCursor from "react-animated-cursor";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import Home from "./pages/home";

function App() {
  return (
    <>
    <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="201, 153, 92"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'button',
          "input[type=\"text\"]",
          "input[type=\"email\"]",
          "input[type=\"number\"]",
          "input[type=\"submit\"]",
          "label[for]"
        ]}
      />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
