import Slider from "react-slick";
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      image: "/img/hero-carousel-1.jpg",
      title: "Easy Online Appointments",
      text: "Book your appointment quickly and conveniently with top doctors at your preferred time.",
    },
    {
      image: "/img/hero-carousel-2.jpg",
      title: "Compassionate Care for All",
      text: "We treat you like family, providing personalized healthcare.",
    },
    {
      image: "/img/hero-carousel-3.jpg",
      title: "Innovative Medical Solutions",
      text: "Cutting-edge technology for better diagnosis and treatment.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Text content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#46daea] mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                {slide.text}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
