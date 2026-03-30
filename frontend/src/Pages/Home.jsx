import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import CONTACT_US from "./CONTACT_US";

const scrollToContactForm = () => {
  const el = document.getElementById("contact-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 90, easing: "ease-out-quart" });
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <main className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <section data-aos="fade-up" data-aos-delay="50" data-aos-duration="900" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
          <Carousel onGetQuote={scrollToContactForm} />
        </section>
        <section className="py-10 sm:py-16 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                DR.EX – Walk-In Phone & Device Repairs in Haywards Heath
                
                
              </h1>
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black mb-6 leading-tight">Same-Day In-Store Repairs by Local Specialists</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Welcome to DR.EX, a trusted local repair shop in Haywards Heath. We provide professional in-store
              repair services for smartphones, tablets, laptops, and smartwatches. Visit our shop for fast, reliable
              service from experienced technicians.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-black font-bold max-w-4xl mx-auto leading-relaxed mt-4">Walk-ins are welcome or book your repair appointment online.</p>
            </div>
          </div>
        </section>
        
        <CONTACT_US />     

        {/* Who We Are Section */}
        <section className="py-20 bg-gray-50" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Repair Services
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 animate-slide-in-left" data-aos="fade-right" data-aos-delay="150" data-aos-duration="900">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer in-store repair services for a wide range of devices and faults, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Screen replacements</li>
                <li>Battery replacements</li>
                <li>Charging port repairs</li>
                <li>Camera repairs</li>
                <li>Button and speaker repairs</li>
                <li>Water damage repairs</li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed">
                   All repairs are carried out at our physical shop using high-quality parts.
                </p>
              </div>

              {/* Image Content */}
              <div className="animate-slide-in-right" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="900">
                <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://media.istockphoto.com/id/2163013393/photo/master-fixing-screen-on-digital-tablet.webp?s=2048x2048&w=is&k=20&c=57hB5XHgKKvszTfATdhcNyFQTNSTqu2aQ7RgidBpvNA="
                      alt="Who We Are"
                      className="w-full h-full object-cover transition-transform duration-700 will-change-transform hover:scale-[1.03]"
                    />
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>

                 
                </div>
              </div>
            </div>
          </div>
          
        </section>

        {/* Comprehensive Tech Repair Services Section */}
        <section className="bg-white " data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone Repair */}
              <div
                className="text-center animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
                data-aos="flip-left" data-aos-delay="100" data-aos-duration="700"
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative w-24 h-32 bg-gradient-to-b from-blue-600 to-blue-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-xl">
                    {/* Phone Screen */}
                      <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Phone Repair"
                        className="w-full h-full object-cover"
                      />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Smartphone Repairs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                   We provide walk-in smartphone repairs for major brands including Apple iPhone and Samsung devices.
                   Whether your phone has a cracked screen or a faulty battery, our technicians can repair it quickly, often
                   on the same day. 
                </p>
              </div>

              {/* Tablet Repair */}
              <div
                className="text-center animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
                data-aos="flip-left" data-aos-delay="200" data-aos-duration="700"
              >
                <div className="mb-6 flex justify-center">
                  {/* <div className="relative w-28 h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-lg overflow-hidden"> */}
                    {/* Tablet Screen */}
                    <img className="w-32 h-32 object-cover transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-xl"
                      src="https://media.istockphoto.com/id/2163013393/photo/master-fixing-screen-on-digital-tablet.webp?s=2048x2048&w=is&k=20&c=57hB5XHgKKvszTfATdhcNyFQTNSTqu2aQ7RgidBpvNA="
                      alt="Tablet Repair"
                    />
                  </div>
                {/* </div> */}
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Tablet Repairs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                   Visit our Haywards Heath shop for tablet repairs, including screen replacements and battery services.
                   We repair a range of models including Apple iPads.
                </p>
              </div>

              {/* Laptop Repair */}
              <div
                className="text-center animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
                data-aos="flip-left" data-aos-delay="300" data-aos-duration="700"
              >
                <div className="mb-6 flex justify-center">
                  <img className="w-32 h-32 object-cover transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-xl"
                 src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                 alt="Laptop Repair"
               />
                </div> 
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Laptop Repairs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer in-store laptop repair services for common hardware faults such as damaged screens, battery
                  issues, and charging problems. Our team ensures professional and efficient repairs.
                </p>
              </div>

              {/* Smartwatch Repair */}
              <div
                className="text-center animate-slide-in-up"
                style={{ animationDelay: "0.4s" }}
                data-aos="flip-left" data-aos-delay="400" data-aos-duration="700"
              >
                <div className="mb-6 flex justify-center">
                  {/* <div className="relative w-16 h-20 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg overflow-hidden"> */}
                    {/* Watch Face */}
                    <img className="w-32 h-32 object-cover transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-xl"
                    src="https://foneworld-hove.co.uk/wp-content/uploads/2025/07/Smartwatch-Repair.png"
                    alt="Smartwatch Repair"
                  />
                    {/* Watch Strap */}
                    {/* <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg"></div> */}
                  {/* </div> */}
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">
                   Smartwatch Repairs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We repair smartwatches including Apple Watch and Samsung Galaxy Watch models. All services are
                  performed in-store by trained technicians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Klarna Payment Section */}
      

  
        {/* Repair Services Section */}
        <section className="bg-white mt-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          {/* Dark Header */}
          <div className="bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up" data-aos="fade-down" data-aos-delay="150" data-aos-duration="800">
                 Why Choose DR.EX?
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              Local repair shop in Haywards Heath Same-day repair service available on most devices, Experienced technicians, High-quality replacement parts, Walk-in service available.
              </p>
            </div>
          </div>

        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-4 items-start">
              {/* Left summary */}
              <div className="lg:col-span-1 text-center animate-fade-in-up">
                <h3 className="text-2xl font-bold tracking-wide text-black">
                  EXCELLENT
                </h3>
                <div className="mt-4 flex justify-center gap-1">
                  {Array.from({ length: 4}).map((_, i) => (
                    <svg
                      key={i}
                      className="h-8 w-8 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* <p className="mt-4 text-gray-700">
                  Based on <span className="font-semibold">1008 reviews</span>
                </p> */}
                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="text-[22px] font-bold text-[#4285F4]">
                    G
                  </span>
                  <span className="text-[22px] font-bold text-[#DB4437]">
                    o
                  </span>
                  <span className="text-[22px] font-bold text-[#F4B400]">
                    o
                  </span>
                  <span className="text-[22px] font-bold text-[#4285F4]">
                    g
                  </span>
                  <span className="text-[22px] font-bold text-[#0F9D58]">
                    l
                  </span>
                  <span className="text-[22px] font-bold text-[#DB4437]">
                    e
                  </span>
                </div>
              </div>

              {/* Review cards */}
              <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "John P",
                    date: "a month ago",
                    text: "Excellent, quick and friendly service at a great price. iPhone 13 max pro screen replacement. Done within 30 minutes of calling on my way home after breaking my phone. Perfect.",
                  },
                  {
                    name: "Jo Pasmore",
                    date: "a month ago",
                    text: "Had my phone repaired today, very satisfied with the service and he even gave me a free screen protector! Highly recommend for any repairs.",
                  },
                  {
                    name: "Alpha Guinness",
                    date: "a month ago",
                    text: "Quick, reliable, and affordable service! The staff fixed my phone fast and it’s working like new. Highly recommend this shop.",
                  },
                ].map((r, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md animate-slide-in-up"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                          {r.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-black leading-tight">
                            {r.name}
                          </p>
                          <p className="text-xs text-gray-500">{r.date}</p>
                        </div>
                      </div>
                      <span className="text-[#4285F4] font-bold">G</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-3 text-gray-700 leading-relaxed text-sm">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a href="https://www.google.com/maps/place/DR.EX+-+Mobile,+iPad,+Macbook,+Tablet+%26+More+Tech+Repair+Services/@50.9958421,-0.1009489,17z/data=!4m18!1m9!3m8!1s0x48758ca379d35081:0x78f1210f4f677afc!2sDR.EX+-+Mobile,+iPad,+Macbook,+Tablet+%26+More+Tech+Repair+Services!8m2!3d50.9958421!4d-0.1009489!9m1!1b1!16s%2Fg%2F1q64f73x7!3m7!1s0x48758ca379d35081:0x78f1210f4f677afc!8m2!3d50.9958421!4d-0.1009489!9m1!1b1!16s%2Fg%2F1q64f73x7?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <span className="rounded bg-green-700 px-4 py-2 text-xs font-semibold text-white">
                  Verified by Trustindex
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Map Section */}
      <section className=" bg-white">
        <div className="">
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-slide-in-up">
            {/* Responsive aspect container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.099031711847!2d-0.1009489!3d50.9958421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758ca379d35081%3A0x78f1210f4f677afc!2sDR.EX%20-%20Mobile%2C%20iPad%2C%20Macbook%2C%20Tablet%20%26%20More%20Tech%20Repair%20Services!5e0!3m2!1sen!2sin!4v1760530625090!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr.ex Haywards HeathLocation"
              ></iframe>
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
