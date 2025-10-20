const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image Section */}
        <div className="relative group order-1 md:order-none">
          <img
            src="/img/about.jpg"
            alt="Hospital building or staff"
            className="rounded-lg shadow-lg w-full h-auto transform group-hover:scale-105 transition duration-500"
          />
          {/* Decorative blue overlay corners */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-[#46daea]/20 rounded-lg -z-10"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#46daea]/10 rounded-lg -z-10"></div>
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#46daea] mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are dedicated to providing high-quality healthcare services that
            combine compassion, innovation, and medical excellence. Our goal is
            to ensure that every patient receives personalized care tailored to
            their unique needs, supported by advanced technology and an
            experienced medical team. From preventive care to specialized
            treatments, we strive to make healthcare accessible, efficient, and
            centered around you.
          </p>

          <ul className="text-gray-700 space-y-3 mb-8">
            <li>✅ Modern facilities with cutting-edge equipment</li>
            <li>✅ 24/7 emergency and support services</li>
            <li>✅ Certified and experienced medical professionals</li>
          </ul>

          <button className="bg-[#46daea] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#34c3d3] transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
