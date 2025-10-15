import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SMARTPHONE_REPAIR = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[350px] md:h-[89vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://foneworld-hove.co.uk/wp-content/uploads/2021/07/computer-and-phone-repairment-service-KE3B2PM-1.jpg')",
        }}
        data-aos="fade-up"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 text-center drop-shadow-lg transition-all duration-500">
            Repairs
          </h1>
          <div className="flex items-center space-x-2 text-lg md:text-2xl text-white font-medium">
            <span className="hover:text-red-500 transition-colors cursor-pointer">Home</span>
            <span className="text-red-500 text-2xl mx-1">●</span>
            <span className="text-white/90">Repairs</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Phone Repair */}
          <div data-aos="fade-right">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2021/07/phone-repair.png"
              alt="Phone Repair"
              className="mx-auto mb-4 h-48 object-contain transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-3xl font-extrabold text-red-600 mb-4 transition-colors duration-300 hover:text-black">Phone Repair</h3>
            <p className="text-lg text-gray-900">
              Stressed you need a new phone or device because yours is damaged. Not to worry our technicians are here to help
            </p>
          </div>
          {/* Tablet Repair */}
          <div data-aos="fade-up">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2021/07/tablet.png"
              alt="Tablet Repair"
              className="mx-auto mb-4 h-48 object-contain transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-3xl font-extrabold text-red-600 mb-4 transition-colors duration-300 hover:text-black">Tablet Repair</h3>
            <p className="text-lg text-gray-900">
              We repair phones and tablets here at Dr.ex Haywards Heathas quickly as possible. If the tablet is faulty don’t hesitate to get in touch today.
            </p>
          </div>
          {/* Laptop Repair */}
          <div data-aos="fade-down">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2021/07/laptop.png"
              alt="Laptop Repair"
              className="mx-auto mb-4 h-48 object-contain transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-3xl font-extrabold text-red-600 mb-4 transition-colors duration-300 hover:text-black">Laptop Repair</h3>
            <p className="text-lg text-gray-900">
              Have a damaged laptop, you need it to be repaired or refurbished here at Dr.ex Haywards Heathwe are here to fix it as soon as possible
            </p>
          </div>
          {/* Smartwatch Repair */}
          <div data-aos="fade-left">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2021/07/watch.png"
              alt="Smartwatch Repair"
              className="mx-auto mb-4 h-48 object-contain transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-3xl font-extrabold text-red-600 mb-4 transition-colors duration-300 hover:text-black">Smartwatch Repair</h3>
            <p className="text-lg text-gray-900">
              Damaged smart watches need to be repaired. Here at Dr.ex Haywards Heathwe offer you a repair or refurbished service for your smart watch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default SMARTPHONE_REPAIR