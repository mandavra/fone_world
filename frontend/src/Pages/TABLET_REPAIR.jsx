import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Simple hook to trigger animations when elements enter the viewport
const useInView = (options = { threshold: 0.15 }) => {
  const ref = React.useRef(null)
  const [visible, setVisible] = useState(false)
  React.useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible(true)
      })
    }, options)
    io.observe(ref.current)
    return () => io.disconnect()
  }, [options])
  return [ref, visible]
}
const TABLET_REPAIR = () => {
  const faqHeaderRef = React.useRef(null)
  const [faqHeaderVisible, setFaqHeaderVisible] = useState(false)

  React.useEffect(() => {
    const el = faqHeaderRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setFaqHeaderVisible(true)
      })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <>
      <Header />
      <section
        className="relative flex items-center justify-center h-[350px] md:h-[89vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://www.kovaimobilestheservicecenter.com/assets/img/service/apple-iphone-tablet-01.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Tablet and phone repairs</h1>
          <div className="flex items-center space-x-2 text-lg md:text-2xl">
            <span>Home</span>
            <span className="text-red-500 text-2xl">•</span>
            <span>Tablet Repair</span>
          </div>
        </div>
      </section>

          
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Tablet Repair Services at Dr.ex Haywards Heath</h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Is your tablet damaged or not functioning properly? Don’t worry. At Dr.ex Haywards Heath, we provide fast and reliable tablet repair services in Haywards Heath to get your device back to its best state. Our experienced technicians can repair it all, including broken screens, battery issues, or water damage.</p>
              <p>Whether you’re in Haywards Heath or Haywards Heath, our expert team is here to help with all kinds of tablet problems. We use quality parts and trusted repair methods to ensure your device works like new again. Visit us today for quick, affordable, and hassle-free tablet repairs.</p>
            </div>
              
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
            <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGFibGV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Comprehensive Tablet Repairs for All Brands
            </h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Dr.ex Haywards Heathoffers a wide range of tablet repair services, catering to various brands and models. It doesn’t matter if you need a Samsung tablet battery or a screen replacement; our team can handle it. We provide repairs for all types of faults, including dead battery, faulty charging port, water damage, and broken tablet screen. Whatever the issue, we’ll diagnose it and provide a fast, effective solution.</p>
             
            </div>
            
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Fast and Affordable Repairs</h2><br></br>
            <p className="text-lg mb-6">
            Speed is key when it comes to tablet repair. Our technicians work quickly and efficiently to get your tablet back in working order. Many repairs can be completed on the same day, so you won’t be without your device for long. Regardless of whether you need a quick tablet screen replacement or a more complex repair, we aim to minimise your downtime.</p>
            <p>We offer competitive prices on all our tablet repairs, from Samsung tablet screen replacement to battery repairs. We aim to provide the best value for your money while delivering top-quality service.</p> <br></br><br></br>
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGFibGV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}
      
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
        <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Your Tablet Repaired Today! </h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Don’t let a damaged tablet slow you down. Visit Dr.ex Haywards Heath for expert tablet repair services in Haywards Heath and Haywards Heath. If your device needs a screen replacement, battery replacement, or any other repair, our technicians are ready to get it back to full functionality.</p>
              <p>Get in touch with Dr.ex Haywards Heathtoday for a quick, reliable, and affordable repair!</p>
              
            </div>
            
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          
        </div>
      </section>
      {/* Info Section End */}

      {/* FAQ Section Start */}
      <section className="w-full bg-gray-50 py-24 px-4 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={faqHeaderRef} className={`transition-all duration-700 ease-out transform ${faqHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-10">Answers to common questions about our laptop repair services.</p>
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
      q: 'What laptop repair services does Dr.ex Haywards Heath offer?',
      a: 'Dr.ex Haywards Heath provides a full suite of laptop repair options—including screen/LCD replacement, keyboard repair, battery replacement, charging port repair—and diagnostic services for all makes and models, using high-quality parts and aiming for fast turnaround times.'
    },
    {
      q: 'Do you repair broken or flickering laptop screens?',
      a: 'Yes, specializing in laptop LCD replacement, Dr.ex Haywards Heath fixes cracked, flickering, or touchscreen‑affected displays, ensuring restored visuals and touchscreen functionality.'
    },
    {
      q: 'Can Dr.ex Haywards Heath fix laptops that wont charge or stay powered on?',
      a: 'Absolutely. The team handles battery replacements and power issue diagnostics, bringing laptops that won’t hold a charge or fail to power on back to functional condition.'
    },
    {
      q: 'Are diagnostics included, and how long do repairs take?',
      a: 'Yes, Dr.ex Haywards Heath offers transparent in store diagnostics and strives for quick turnarounds. Many repairs are completed the same day, minimizing downtime.'
    },
    {
      q: 'Where is Dr.ex Haywards Heath located, and do they accept walk‑ins?',
          a: 'Located at 48 George St, Haywards Heath   RH16 2AA, Dr.ex Haywards Heath welcomes walk‑ins and scheduled diagnostic appointments. They serve customers across Haywards Heath and Haywards Heath with convenient local access.'
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

export default TABLET_REPAIR