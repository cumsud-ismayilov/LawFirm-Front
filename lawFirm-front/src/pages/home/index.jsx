import HomeSlider from "./homeSlider/index";
import About from "../about/index"
import Attorney from "../attorney/index"
import Blog from "../blog/index"
import Testimonials from "../testimonials/index"

function index() {
  return (
    <>
      <HomeSlider />
      <About/>
      <section id="practice" className="h-screen">
        Practice
      </section>
      <Testimonials/>
      <Attorney/>
      <Blog/>
      <section id="contact" className="h-screen">
        Contact
      </section>
    </>
  );
}

export default index;
