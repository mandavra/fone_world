import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
// Custom hook for intersection observer
const useInView = () => {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  React.useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return [setRef, visible]
}

const SMARTPHONE_REPAIR = () => {
  const [faqHeaderVisible, setFaqHeaderVisible] = useState(false)
  const faqHeaderRef = React.useRef(null)

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);

  // FAQ header intersection observer
  React.useEffect(() => {
    if (!faqHeaderRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFaqHeaderVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(faqHeaderRef.current)
    return () => observer.disconnect()
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

        
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Expert Smartphone Repair Services in Hove and Haywards Heath </h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Stressed that your phone or device is damaged? Don’t worry, at Dr.ex Haywards Heath, our skilled technicians are here to help. Our team can have your smartphone functioning like new again in no time. Regardless of whether you need a screen repair, battery replacement, or any other issue fixed, we’ve got you covered.
               </p>
               </div>
              <br></br>    <br></br>
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://media.istockphoto.com/id/2163013393/photo/master-fixing-screen-on-digital-tablet.webp?s=2048x2048&w=is&k=20&c=57hB5XHgKKvszTfATdhcNyFQTNSTqu2aQ7RgidBpvNA=" alt="Laptop" className="max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}

      {/* Full Range Section Start */}
 <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
        <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Expert Smartphone Repair for All Brands
            </h2>
            <br></br>    <br></br>
            <div className="text-lg space-y-4 mb-6">
              <p>
Here at Dr.ex Haywards Heath, we offer smartphone repair services for almost every brand. If you possess any of the following smartphones: an Apple, Samsung, Motorola, Google Pixel, Huawei or even a Sony, our skilled professionals are prepared to help you with any fixes required. From dependable iPhone repair services to fast and dependable Samsung mobile repair, we ensure all your needs are met custom tailored to each individual. All encompassing repairs are offered by us for any problem regarding smart phones such as issues involving the battery, cracked screens, water damage, broken buttons and many more.
              </p>
            </div>
            <br></br>    <br></br>        <br></br>    <br></br>
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          
        </div>
      </section>
      {/* Full Range Section End */}

      
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Visit Our Smartphone Repairing Shop Today! 
            </h2>
            <p className="text-lg mb-6">
            Looking for a reliable smartphone repairing shop in Hove and Haywards Heath? Look no further! Fone World Hove is here to provide top-notch repair services, from complete smartphone repair in Hove to quick fixes. Our team is dedicated to getting your device back in perfect condition.
            <br></br>      <br></br>     <br></br>
            <p>Get in touch or visit us today to experience the best in smartphone repairs!</p>
            </p>
      <br></br><br></br>
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/05/group-friends-using-smartphones_23-2148115658.jpg" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}
      
      {/* Info Section Start */}
   
      {/* Info Section End */}

      {/* FAQ Section Start */}
      <section className="w-full bg-gray-50 py-24 px-4 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={faqHeaderRef} className={`transition-all duration-700 ease-out transform ${faqHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">Frequently Asked Questions</h2>
            {/* <p className="text-center text-gray-600 mb-10">Answers to common questions about our laptop repair services.</p> */}
          </div>

          {/* Accordion */}
          <FAQ />
        </div>
      </section>
      {/* FAQ Section End */}

      
                            

      <Footer />
    </>
  )
}

// Local FAQ component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [visibleByIndex, setVisibleByIndex] = useState({})
  const itemRefs = React.useRef([])
  const faqs = [
    {
      q: 'Do you offer same day smartphone repair services?',
      a: 'Yes, we offer same-day repair services for many common issues like screen replacements, battery changes, and charging port repairs, depending on part availability and model. '
    },
    {
      q: 'Which smartphone brands do you repair?',
      a: 'We repair a wide range of brands including Apple, Samsung, Motorola, Google Pixel, Huawei, and Sony, among others.'
    },
    {
      q: 'Do you use genuine parts for repairs? ',
      a: 'Yes, we use high quality or genuine OEM parts to ensure that your device works just like it did when you first bought it.'
    },
    {
      q: 'How long does a typical smartphone repair take?',
      a: 'Most repairs are completed within 1–2 hours, but timing may vary based on the issue and device model. We’ll let you know the estimated time when you bring your phone in.'
    },
    {
      q: 'Can I get a quote before bringing in my phone?',
          a: 'Absolutely! You can contact us for a free, no obligation quote. Just let us know your phone’s make, model, and the issue you’re facing.'
    }
  ]

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            setVisibleByIndex((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }))
          }
        })
      },
      { threshold: 0.15 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx))
  }

  return (
    <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => (itemRefs.current[idx] = el)}
          data-idx={idx}
          className={`p-5 md:p-6 transition-all duration-700 ease-out transform ${
            visibleByIndex[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: `${idx * 100 + 100}ms` }}
        >
          <button
            type="button"
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/40 rounded-lg"
            aria-expanded={openIndex === idx}
          >
            <span className="text-lg md:text-xl font-semibold">{item.q}</span>
            <span className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border ${openIndex === idx ? 'bg-red-600 text-white border-red-600' : 'text-gray-600 border-gray-300'}`}>
              <svg className={`h-4 w-4 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5c.552 0 1 .448 1 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6c0-.552.448-1 1-1z" />
              </svg>
            </span>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Animated wrapper component used above
const AnimatedBlock = ({ children, direction = 'up', delayMs = 0, className = '' }) => {
  const [ref, visible] = useInView()
  const translate = direction === 'left' ? '-translate-x-6' : direction === 'right' ? 'translate-x-6' : 'translate-y-6'
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translate}`}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

export default SMARTPHONE_REPAIR