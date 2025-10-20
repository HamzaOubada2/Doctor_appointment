const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
          In an Emergency? Need Help Now?
        </h3>
        <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Our team is available 24/7 to assist you. Call us immediately for medical
          assistance wherever you need it most.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-blue-100 transition duration-300">
          Make an Appointment
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
