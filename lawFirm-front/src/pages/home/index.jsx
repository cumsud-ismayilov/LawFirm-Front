import HomeSlider from "./homeSlider/index";
import About from "../about/index"
import Attorney from "../attorney/index"
import Blog from "../blog/index"

function index() {
  return (
    <>
      <HomeSlider />
      <About/>
      <section id="practice" className="h-screen">
        Practice
      </section>
      <section id="testimonials" className="h-screen">
        Testimonials
      </section>
      <Attorney/>
      <Blog/>
      <section id="contact" className="h-screen">
        Contact
      </section>
    </>
  );
}

export default index;
