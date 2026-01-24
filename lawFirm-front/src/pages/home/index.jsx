import HomeSlider from "./homeSlider/index";

function index() {
  return (
    <>
      <div id="home" className="h-screen">
        <HomeSlider />
      </div>
      <section id="about" className="h-screen">
        About
      </section>
      <section id="practice" className="h-screen">
        Practice
      </section>
      <section id="testimonials" className="h-screen">
        Testimonials
      </section>
      <section id="attorney" className="h-screen">
        Attorney
      </section>
      <section id="blog" className="h-screen">
        Blog
      </section>
      <section id="contact" className="h-screen">
        Contact
      </section>
    </>
  );
}

export default index;
