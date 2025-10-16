import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const LAPTOP_REPAIR = () => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Laptop Repair</h1>
          <div className="flex items-center space-x-2 text-lg md:text-2xl">
            <span>Home</span>
            <span className="text-red-500 text-2xl">•</span>
            <span>Laptop Repair</span>
          </div>
        </div>
      </section>
    
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Laptop Repair Services at Dr.ex Haywards Heath</h2>
            <p className="text-lg mb-6">
              Damaged laptops can cause major disruption, but expert help is available at Dr.ex Haywards Heath. Known among trusted laptop repair shops in Haywards Heath, our team delivers fast, reliable repair solutions for all makes and models. We repair common issues such as <a href="#" className="text-sky-500 underline">broken screens</a>, unresponsive keyboards, and faulty batteries using top-quality parts.
            </p>
            <p className="text-lg mb-10">
              Our services are available to customers across Haywards Heath and those looking for a reputable Brighton laptop shop. Technicians at our store provide transparent diagnostics and explain the repair process clearly. If you need a quick fix or a full refurbishment, Dr.ex Haywards Heathensures your laptop gets back in working condition with minimal downtime.
            </p>
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2021/05/laptop.png" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}

      {/* Full Range Section Start */}
      <section className="w-full bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 md:items-center md:gap-10">
          {/* Image Left */}
          <AnimatedBlock direction="left" delayMs={100} className="hidden md:block md:col-span-5">
            <img
              src="https://foneworld-hove.co.uk/wp-content/uploads/2025/05/young-female-inventor-creating-her-workshop_23-2149067228.jpg"
              alt="Technician working in workshop"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          </AnimatedBlock>
          {/* Content Right */}
          <AnimatedBlock direction="right" delayMs={200} className="md:col-span-7 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Full Range of Repairs with High-Quality Parts</h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10">Our comprehensive repair services cover every key component of your device.</p>

            <ul className="space-y-6">
              <li className="flex items-start animate-slideInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <span className="mt-1 mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.415l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">Technicians perform laptop LCD replacement for cracked or flickering displays, restoring clear visuals and touchscreen function.</p>
              </li>
              <li className="flex items-start animate-slideInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <span className="mt-1 mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.415l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">We handle worn or damaged keyboards through precise laptop keyboard repair using compatible replacement units.</p>
              </li>
              <li className="flex items-start animate-slideInUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <span className="mt-1 mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.415l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">Our team resolves all power issues with expert laptop battery replacement, bringing life back to laptops that won’t hold a charge.</p>
              </li>
              <li className="flex items-start animate-slideInUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <span className="mt-1 mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.415l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">Customers benefit from thorough diagnostics and fast turnarounds for every service.</p>
              </li>
              <li className="flex items-start animate-slideInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                <span className="mt-1 mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.415 0l-3-3a1 1 0 011.415-1.415l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">Our repairs are designed to last, giving you a cost‑effective solution without needing a new device.</p>
              </li>
            </ul>

            <div className="flex justify-center mt-12">
              <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
            </div>
          </AnimatedBlock>
        </div>
      </section>
      {/* Full Range Section End */}

      
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Trusted Experts Serving Haywards Heath and Brighton</h2>
            <p className="text-lg mb-6">
            Our experienced staff, clear communication, and affordable pricing make us one of the most recommended laptop repair shops in Haywards Heath. Every repair is completed in-store by trained technicians, eliminating delays and avoiding outsourcing. We work on a wide range of brands, including Apple MacBook, Acer, Asus, Lenovo, Dell, HP, and Samsung Chromebook, ensuring expert care no matter your device. As a reliable Brighton laptop shop, we also provide personalized advice based on your laptop’s condition and usage needs. Customers appreciate the fast service, expert guidance, and honest recommendations we provide daily. Repairs are handled with precision, giving you confidence that your laptop is in safe hands.            </p>
            
            <Link to="/contact-us#contact-form" className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </Link>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2021/05/laptop-1.jpg" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}
      
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
        <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2021/05/laptop-1.jpg" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Visit Dr.ex Haywards Heathfor Expert Laptop Repairs</h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Efficient service, expert staff, and high-quality parts make Dr.ex Haywards Heathyour go-to destination for all laptop issues. If you’re dealing with screen problems, keyboard faults, or battery failures, our technicians have the right tools and experience.</p>
              <p>Walk-ins are welcome, or you can contact us to book a diagnostic check. Located centrally, our store serves customers across Haywards Heath and nearby Brighton. Find out why we’re trusted by students, professionals, and families alike.</p>
              <p>Bring your device in today and discover why Dr.ex Haywards Heathstands out among local laptop repair shops in Haywards Heath. Fast fixes are just around the corner!</p>
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
        a: 'Located at 48 George St, Haywards Heath   RH16 2AA, Dr.ex Haywards Heath welcomes walk‑ins and scheduled diagnostic appointments. They serve customers across Haywards Heath and Brighton with convenient local access.'
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

export default LAPTOP_REPAIR
