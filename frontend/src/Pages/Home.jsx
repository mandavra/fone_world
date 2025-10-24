import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE_URL || (window.location.hostname.includes('vercel.app') ? 'https://foneworld-backend.vercel.app' : 'http://localhost:4001');
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactModel, setContactModel] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 90, easing: "ease-out-quart" });
  }, []);
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");
    if (isSubmitting) return;
    if (!contactName || !contactEmail || !contactMessage) {
      setSubmitError("Please fill in your name, email and message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);
    if (!emailOk) {
      setSubmitError("Please enter a valid email address.");
      return;
    }
    try {
      setIsSubmitting(true);
      const resp = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          message: contactMessage,
          model: contactModel
        })
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || !data.ok) {
        const serverMsg = data && data.error ? data.error : `Status ${resp.status}`;
        setSubmitError(`Failed to send. ${serverMsg}`);
        return;
      }
      setSubmitSuccess('Message sent successfully. We will get back to you shortly.');
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactModel("");
      setContactMessage("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setSubmitError(`Something went wrong. ${msg}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <main className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <section data-aos="fade-up" data-aos-delay="50" data-aos-duration="900" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
          <Carousel />
        </section>
     
        <section className="py-10 sm:py-16 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Mobile Repair Specialist in 

                
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                DR.EX is the #1 repair shop in Haywards Heath. We specialize in
                tech repair services for smartphones to laptops, major brands,
                easy online booking, and a customer-first approach.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-gray-50" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Who We Are
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 animate-slide-in-left" data-aos="fade-right" data-aos-delay="150" data-aos-duration="900">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Dr.ex Haywards Heath</strong> are trusted specialists in
                  mobile, tablet, laptop, and smartwatch repairs, serving Haywards Heath
                  and Haywards Heath. With over six years of experience, our skilled
                  technicians are dedicated to swift, reliable, often same-day
                  device restoration.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We handle everything from cracked screens and battery
                  replacements to water damage and software issues. Using only
                  high-quality parts, we ensure lasting results that keep your
                  devices running smoothly.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Specializing in fast, reliable repairs for phones, tablets,
                  laptops, and smartwatches. From screen replacements to battery
                  and panel issues, we cover it all under one roof.
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
            {/* Section Heading */}
            <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                Comprehensive Tech Repair Services
              </h2>
            </div>

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
                  Phone Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stressed you need a new phone or device because yours is
                  damaged? Not to worry, our technicians are here to help. If
                  you're looking for trusted phone repair in Haywards Heath, Fone
                  World Haywards Heath has you covered with expert solutions.
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
                  Tablet Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We repair phones and tablets here at Dr.ex Haywards Heathas
                  quickly as possible. If your tablet is faulty, don't hesitate
                  to get in touch today. Our team handles everything from
                  software issues to screen replacements, including reliable
                  Apple iPad repairs.
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
                  Laptop Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Have a damaged laptop? Need it repaired or refurbished? At
                  Dr.ex Haywards Heath, we fix laptops promptly and professionally.
                  Whether you're a student, gamer, or working professional,
                  we're more than just a phone shop.
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
                  Smartwatch Repair
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Damaged smartwatches deserve expert attention. At Dr.ex Haywards Heath
                  , we offer repair and refurbishment services using
                  high-quality parts. If it's an Apple Watch or Samsung Galaxy
                  Watch, we treat every device with the same care as our mobile
                  phone repair.
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
                Repairs Services we offer?
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
                From screen repairs to battery replacements, our team of skilled
                technicians can find the right solution for your device
                problems.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1: Broken Screen */}
      <div className="animate-slide-in-up" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src="https://media.istockphoto.com/id/623204582/photo/broken-mobile-phone-screen-scattered-shards.webp?s=2048x2048&w=is&k=20&c=h6w4dbpr9DjwErh-Scai99QC4Pnlb54zVCl7BCg0kx0="
              alt="Broken screen"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">Broken screen</h3>
          </div>
        </div>
      </div>

      {/* Card 2: Water Damage */}
      <div className="animate-slide-in-down" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src="https://media.istockphoto.com/id/950690084/photo/white-broken-smartphone-mock-up-fall-in-water-3d-rendering.webp?s=2048x2048&w=is&k=20&c=wzgD6s98DQ23A1dy6LZkOK94GySScPJE-W0m4jpQrx8="
              alt="Water damage"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">Water damage</h3>
          </div>
        </div>
      </div>

      {/* Card 3: Speaker Issues */}
      <div className="animate-slide-in-down" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src= "https://sprtech.com.my/wp-content/uploads/2022/08/maxresdefault-5-400x400.jpg"
              alt="Speaker issues"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">Speaker issues</h3>
          </div>
        </div>
      </div>

      {/* Card 4: Signal Problems */}
      <div className="animate-slide-in-up" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2025/07/Signal-or-reception-problems-1.png"
              alt="Signal or reception problems"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">
              Signal or reception problems
            </h3>
          </div>
        </div>
      </div>

      {/* Card 5: Broken Buttons */}
      <div className="animate-slide-in-down" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2025/07/Broken-buttons-or-keypad-1.png"
              alt="Broken buttons or keypad"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">
              Broken buttons or keypad
            </h3>
          </div>
        </div>
      </div>

      {/* Card 6: Battery Issues */}
      <div className="animate-slide-in-up" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden transition-transform duration-500 will-change-transform hover:-translate-y-1">
            <img
              src="https://media.istockphoto.com/id/2183687699/photo/phone-battery-with-low-charge-cellphone-with-no-power-energy-drain-empty-load-and-dead.webp?s=612x612&w=is&k=20&c=-j1o_LxJcHWhLn6sVki53M8JukxSwhVMUEDHsYrQAFg="
              alt="Damaged or dead battery"
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-red-600">
              Damaged or dead battery
            </h3>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

        </section>

        {/* Phone Fix Opportunity Section */}
        <section className="py-20 bg-white" data-aos="fade-up">
          <div className=" mx-auto px-10 sm:px-10 lg:px-[150px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="animate-slide-in-left">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                  Allow Dr.ex Haywards Heaththe Opportunity to Fix Your Phone
                </h2>

                {/* Introductory Paragraph */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our technicians are on hand to provide fast and affordable
                  service. Experiencing issues? Don't hesitate, get in touch or
                  visit our store. We handle a wide range of repairs, including:
                </p>

                {/* Services List */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Headphone jack replacement
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Malfunctioning buttons
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Charging port repairs
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Faulty cameras
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Battery replacements
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Broken screen replacements
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Volume control issues
                    </span>
                  </div>
                </div>

                {/* Call to Action Button */}
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => navigate('/contact-us#contact-form')}
                >
                  Fix My Device
                </button>
              </div>

              {/* Right Column - Phone Comparison */}
              <div className="animate-slide-in-right">
                <div className="relative">
                  {/* Phone Comparison Container */}
                  <div className="relative flex justify-center items-center h-96">
                    {/* Broken Phone (Left) */}
                    <div className="relative z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                      <div className="relative w-32 h-64 bg-gray-800 rounded-2xl shadow-2xl">
                        {/* Screen */}
                        <div className="absolute inset-2 bg-black rounded-xl overflow-hidden">
                          {/* Cracked Screen Effect */}
                          <div className="absolute inset-0">
                            {/* Main impact point */}
                            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-white opacity-90 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                            {/* Radiating cracks */}
                            <div className="absolute top-1/3 left-1/2 w-0.5 h-1/3 bg-white opacity-70 transform -translate-x-1/2"></div>
                            <div className="absolute top-1/3 left-1/2 w-0.5 h-1/4 bg-white opacity-60 transform -translate-x-1/2 -translate-y-1/4 rotate-45 origin-top"></div>
                            <div className="absolute top-1/3 left-1/2 w-0.5 h-1/4 bg-white opacity-60 transform -translate-x-1/2 -translate-y-1/4 -rotate-45 origin-top"></div>
                            <div className="absolute top-1/3 left-1/2 w-1/3 h-0.5 bg-white opacity-60 transform -translate-x-1/2"></div>
                            {/* Additional cracks */}
                            <div className="absolute top-1/4 left-1/4 w-0.5 h-1/2 bg-white opacity-40 transform rotate-30"></div>
                            <div className="absolute top-1/2 right-1/4 w-0.5 h-1/3 bg-white opacity-50 transform -rotate-20"></div>
                          </div>
                        </div>
                        {/* Home Button */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Fixed Phone (Right) */}
                    <div className="relative z-20 transform rotate-12 hover:rotate-0 transition-transform duration-500 ml-4">
                      <div className="relative w-32 h-64 bg-gray-800 rounded-2xl shadow-2xl">
                        {/* Screen with Starry Night */}
                        <div className="absolute inset-2 bg-gradient-to-b from-purple-900 via-blue-900 to-black rounded-xl overflow-hidden">
                          {/* Mountain silhouette */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gray-800 opacity-80 transform translate-y-2"></div>
                          {/* Stars */}
                          <div className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                          <div className="absolute top-16 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="absolute top-20 right-8 w-1 h-1 bg-white rounded-full"></div>
                          <div className="absolute top-24 left-12 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                          <div className="absolute top-28 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          {/* Moon */}
                          <div className="absolute top-6 right-6 w-4 h-4 bg-yellow-200 rounded-full opacity-80"></div>
                        </div>
                        {/* Home Button */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Descriptive Text */}
                  <div className="mt-8 text-center animate-fade-in-up">
                    <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                      If you're dealing with a cracked screen or a faulty
                      battery, we offer dependable iPhone repair in Haywards Heath and
                      support for other major brands including Samsung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Banner Section */}
        <section className="relative min-h-screen bg-gray-900 overflow-hidden" data-aos="fade-up">
          {/* Background with Repair Station */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Repair Tools Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-10 w-16 h-8 bg-blue-500 rounded-full transform rotate-12 animate-float"></div>
              <div className="absolute top-32 right-16 w-12 h-6 bg-blue-400 rounded-full transform -rotate-45 animate-pulse"></div>
              <div className="absolute top-40 left-20 w-8 h-12 bg-blue-600 rounded-full transform rotate-30 animate-bounce"></div>
              <div className="absolute top-24 right-8 w-6 h-10 bg-blue-500 rounded-full transform -rotate-12 animate-ping"></div>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Main Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
                Damaged Phone? Don't Despair – We Repair.
              </h2>

              {/* Descriptive Paragraph */}
              <p
                className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Struggling with your phone's performance? Hardware damage or
                software glitches? Let our team help. We specialise in
                everything from Apple iPhone repairs to general phone fix
                services in Haywards Heath.
              </p>

              {/* Call to Action Button */}
              <Link to="/contact-us#contact-form" className="block w-full sm:w-auto">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-5 sm:px-10 py-3 sm:py-5 rounded-lg text-lg sm:text-2xl font-semibold transition-all duration-300 shadow-none hover:shadow-none transform hover:-translate-y-2 animate-counter-up mb-9 "
                  style={{ animationDelay: "0.4s" }}
                >
                  Send Request
                </button>
              </Link>
            </div>
          </div>

          {/* Repair Tools Visual Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Repair Tools */}
            <div className="absolute top-16 left-8 animate-slide-in-left">
              {/* Blue Prying Tools */}
              <div className="relative">
                <div className="w-12 h-6 bg-blue-500 rounded-full transform rotate-12 shadow-lg"></div>
                <div className="absolute -top-2 left-2 w-8 h-4 bg-blue-400 rounded-full transform rotate-45 animate-float"></div>
                <div className="absolute top-1 right-1 w-6 h-3 bg-blue-600 rounded-full transform -rotate-30 animate-pulse"></div>
              </div>
            </div>

            <div className="absolute top-24 right-12 animate-slide-in-right">
              {/* Silver Tweezers */}
              <div className="relative">
                <div className="w-1 h-8 bg-gray-300 rounded-full transform rotate-45 shadow-lg"></div>
                <div className="absolute top-1 left-1 w-0.5 h-6 bg-gray-200 rounded-full transform rotate-45"></div>
                <div className="absolute top-0 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div className="absolute top-32 left-16 animate-slide-in-left">
              {/* Screwdriver */}
              <div className="relative">
                <div className="w-8 h-2 bg-gray-600 rounded-full shadow-lg"></div>
                <div className="absolute -left-1 top-0.5 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="absolute -left-2 top-0.5 w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div className="absolute top-40 right-20 animate-slide-in-right">
              {/* Flat Metal Tool */}
              <div className="w-6 h-1 bg-gray-400 rounded-full shadow-lg transform rotate-12 animate-bounce"></div>
            </div>

        


            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white opacity-20 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-white opacity-25 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-white opacity-40 rounded-full animate-ping"></div>
          </div>
        </section>
        {/* Appointment Section (inlined) */}
        <section className="py-20 bg-white" data-aos="fade-up">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left: Copy */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up">
                  Book Your Appointment for Repairing
                </h2>
                <p className="text-gray-700 text-lg animate-fade-in-up">
                  Book your repair appointment now for fast and reliable
                  service. Get expert help at your convenience!
                </p>

                <div className="space-y-5">
                  {[
                    "Get fast and reliable repair services for your phone, tablet, or laptop.",
                    "Book your appointment online and skip the wait, we’ll be ready when you arrive.",
                    "Most repairs are completed the same day by our expert technicians.",
                    "We handle everything from screen replacements to water damage repairs.",
                    "Trusted by hundreds of customers in Haywards Heath for quick and quality service.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 animate-fade-in-up"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3 w-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form card */}
              <div className="animate-slide-in-right">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8">
                  <h3 className="mb-6 text-center text-3xl font-bold text-black">
                    Get In Touch
                  </h3>

                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="sr-only">Name</span>
                        <input
                          name="name"
                          placeholder="Name"
                          value={contactName}
                          onChange={e => setContactName(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                        />
                      </label>
                      <label className="block">
                        <span className="sr-only">Email</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={contactEmail}
                          onChange={e => setContactEmail(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        <span className="sr-only">Number</span>
                        <input
                          name="phone"
                          placeholder="Number"
                          value={contactPhone}
                          onChange={e => setContactPhone(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        <span className="sr-only">Make & Model</span>
                        <input
                          name="model"
                          placeholder="Make & Model"
                          value={contactModel}
                          onChange={e => setContactModel(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                        />
                      </label>
                    </div>
                    <label className="mt-4 block">
                      <span className="sr-only">Describe the fault</span>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Please describe the fault"
                        value={contactMessage}
                        onChange={e => setContactMessage(e.target.value)}
                        className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                      />
                    </label>
                    {submitError && (
                      <div className="mt-2 text-red-600 text-center font-semibold">{submitError}</div>
                    )}
                    {submitSuccess && (
                      <div className="mt-2 text-green-600 text-center font-semibold">{submitSuccess}</div>
                    )}
                    <div className="mt-6 flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-50"
                      >
                        <span className="mr-2">{isSubmitting ? "Sending..." : "Send Message"}</span>
                        <svg
                          className="h-5 w-5 transform transition group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
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
