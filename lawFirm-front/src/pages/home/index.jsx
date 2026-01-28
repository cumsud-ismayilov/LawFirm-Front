import HomeSlider from "./homeSlider/index";
import About from "../about/index"
import Attorney from "../attorney/index"
import Blog from "../blog/index"
import Testimonials from "../testimonials/index"
import ContactUs from "../contactUs/index"
import Practice from "../practiceAreas/index"

function index() {
  return (
    <>
      <HomeSlider />
      <About/>
      <Practice/>
      <Testimonials/>
      <Attorney/>
      <Blog/>
      <ContactUs/>
    </>
  );
}

export default index;
