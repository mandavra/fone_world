import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CONTACT_US = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  
  const API_BASE = import.meta.env.VITE_API_BASE_URL || (window.location.hostname.includes('vercel.app') ? 'https://foneworld-backend.vercel.app' : 'http://localhost:4001');
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 90, easing: "ease-out-quart" });
  }, []);
  const location = useLocation();
  useEffect(() => {
    if (location && location.hash === "#contact-form") {
      const el = document.getElementById("contact-form");
      if (el) {
        // delay to ensure layout is ready
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] bg-center bg-cover" data-aos="fade-up" data-aos-delay="50" data-aos-duration="900" data-aos-anchor-placement="top-bottom">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            filter: "blur(2px) brightness(0.4)"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white" data-aos="fade-down" data-aos-delay="150" data-aos-duration="800">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact us
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span>Home</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Contact us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="py-20 bg-white" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-start gap-8">
            {/* Store Hours */}
            <a 
              href="https://www.google.com/search?q=DR.EX+-+Mobile,+iPad,+Macbook,+Tablet+%26+More+Tech+Repair+Services&stick=H4sIAAAAAAAA_-NgU1I1qDCxMDe1SE40NrdMMTY1sDC0Mqgwt0gzNDI0SDNJMzM3T0xLXsTq6BKk5xqhoKvgm5-UmZOqo5AZkJiio-CbmJyUn5-toxCSmJSTWqKgBpQvSlUISU3OUAhKLUjMLFIITi0qy0xOLQYAoNWaOG0AAAA&hl=en-GB&mat=CUGfHMXiuk3SElcBTVDHnkW_W-D_DkB6Q3Q0dPzoQZP5XtYVy2HY0Uy11sMtLdlM88FS6uwZsmLaPeSsea5HQhUbHVmyBmlMqvfxpUC43DKml38KXhjDtYuY_4zBPl5z6dQ&authuser=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out transform hover:border-red-300 min-w-[220px] max-w-[240px] cursor-pointer" 
              data-aos="flip-left" 
              data-aos-delay="100" 
              data-aos-duration="700"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3 group-hover:text-red-600 transition-colors duration-500">Store Hours</h3>
              <p className="text-sm text-gray-600 mb-1 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">Mon-Sat: 9:00 AM to 6:00 PM</p>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">Sun: 10:00 AM to 4:00 PM</p>
            </a>

            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/447883537792" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out transform hover:border-red-300 min-w-[220px] max-w-[240px] cursor-pointer" 
              data-aos="flip-left" 
              data-aos-delay="200" 
              data-aos-duration="700"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3 group-hover:text-red-600 transition-colors duration-500">+44 7883 537792</h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">We are available on Whatsapp</p>
            </a>

            {/* Phone Contact */}
            <a 
              href="tel:01444616060" 
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out transform hover:border-red-300 min-w-[220px] max-w-[240px] cursor-pointer" 
              data-aos="flip-left" 
              data-aos-delay="300" 
              data-aos-duration="700"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3 group-hover:text-red-600 transition-colors duration-500">01444616060</h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">You can call us anytime</p>
            </a>

            {/* Physical Address */}
            <a 
              href="https://maps.google.com/?q=17+South+Rd,+Haywards+Heath+RH16+4LE,+United+Kingdom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out transform hover:border-red-300 min-w-[220px] max-w-[240px] cursor-pointer" 
              data-aos="flip-left" 
              data-aos-delay="400" 
              data-aos-duration="700"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3 group-hover:text-red-600 transition-colors duration-500">17 South Rd, Haywards Heath RH16 4LE, United Kingdom</h3>
            </a>

            {/* Email Contact */}
            <a 
              href="mailto:drex.haywards@gmail.com?subject=Contact%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20contact%20you%20regarding..." 
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out transform hover:border-red-300 min-w-[320px] max-w-[240px] cursor-pointer" 
              data-aos="flip-left" 
              data-aos-delay="500" 
              data-aos-duration="700"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:drex.haywards@gmail.com?subject=Contact%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20contact%20you%20regarding...";
              }}
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3 group-hover:text-red-600 transition-colors duration-500">drex.haywards@gmail.com</h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">Feel free to email us your questions</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="150" data-aos-duration="800">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us Today</h2>
              {submitSuccess && (
                <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  {submitSuccess}
                </div>
              )}
              {submitError && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                  {submitError}
                </div>
              )}
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                setSubmitError("");
                setSubmitSuccess("");
                if (isSubmitting) return;
                const form = e.currentTarget;
                const name = form.querySelector('input[name="fullName"]').value.trim();
                const email = form.querySelector('input[name="email"]').value.trim();
                const phone = form.querySelector('input[name="phone"]').value.trim();
                const message = form.querySelector('textarea[name="msg"]').value.trim();
                // Basic validation
                if (!name || !email || !message) {
                  setSubmitError("Please fill in your name, email and message.");
                  return;
                }
                const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (!emailOk) {
                  setSubmitError("Please enter a valid email address.");
                  return;
                }
                // Optional image validation already performed on change; include if present
                try {
                  setIsSubmitting(true);
                  const isProd = API_BASE.includes('https://');
                  const approxBytesFromBase64 = (b64) => Math.floor((b64 ? b64.length : 0) * 0.75);
                  const imageBytes = selectedImage ? approxBytesFromBase64(selectedImage.data) : 0;
                  let totalBytes = imageBytes;
                  const maxTotal = isProd ? (4 * 1024 * 1024) : (25 * 1024 * 1024);

                  const imagePayload = selectedImage ? { name: selectedImage.name, type: selectedImage.type, data: selectedImage.data } : null;
                  if (isProd && totalBytes > maxTotal) {
                    setSubmitError('Attachments too large. Total max ~4MB on live. Please compress files and try again.');
                    setIsSubmitting(false);
                    return;
                  }

                  const resp = await fetch(`${API_BASE}/api/contact`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name,
                      email,
                      phone,
                      message,
                      image: imagePayload
                    })
                  });
                  const data = await resp.json().catch(() => ({}));
                  if (!resp.ok || !data.ok) {
                    const serverMsg = data && data.error ? data.error : `Status ${resp.status}`;
                    setSubmitError(`Failed to send. ${serverMsg}`);
                    return;
                  }
                  setSubmitSuccess('Message sent successfully. We will get back to you shortly.');
                  form.reset();
                  setSelectedImage(null);
                  setImagePreviewUrl("");
                  
                } catch (err) {
                  const msg = err instanceof Error ? err.message : 'Unknown error';
                  setSubmitError(`Something went wrong. ${msg}`);
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make & Model
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your make & model"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="msg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(ev) => {
                      setSubmitError("");
                      const file = ev.target.files && ev.target.files[0];
                      if (!file) {
                        setSelectedImage(null);
                        setImagePreviewUrl("");
                        return;
                      }
                      const maxBytes = 5 * 1024 * 1024; // 5MB
                      const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
                      if (!allowed.includes(file.type)) {
                        setSubmitError("Only PNG, JPG, JPEG or WEBP images are allowed.");
                        ev.target.value = "";
                        return;
                      }
                      if (file.size > maxBytes) {
                        setSubmitError("Image is too large. Max size is 5MB.");
                        ev.target.value = "";
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = () => {
                        // reader.result is a data URL: data:<mime>;base64,<data>
                        const result = reader.result || "";
                        const base64Data = typeof result === 'string' ? result.split(',')[1] : "";
                        setSelectedImage({ name: file.name, type: file.type, data: base64Data });
                        setImagePreviewUrl(typeof result === 'string' ? result : "");
                      };
                      reader.onerror = () => {
                        setSubmitError("Failed to read the selected image.");
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                  {imagePreviewUrl ? (
                    <div className="mt-3">
                      <img src={imagePreviewUrl} alt="Selected preview" className="h-28 w-28 object-cover rounded-md border" />
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg transition duration-300 font-medium ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help with all your phone repair needs. Get in touch with us through any of the following ways.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">01444616060</p>
                    <p className="text-gray-600">Whatsapp: +44 7883 537792</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">drex.haywards@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600"> 17 South Rd,</p>
                    <p className="text-gray-600"> Haywards Heath RH16 4LE,</p>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    {/* <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p> */}
                    <p className="text-gray-600">Sunday: 10:00 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
        <div className="">
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-slide-in-up transition-transform duration-700 will-change-transform hover:-translate-y-1">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
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
    </>
  );
};

export default CONTACT_US;
