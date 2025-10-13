import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

// Simple hook to trigger animations when elements enter the viewport
const useInView = (options = { threshold: 0.15 }) => {
  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(false)
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

const SMARTWATCH_REPAIR = () => {
  const faqHeaderRef = React.useRef(null)
  const [faqHeaderVisible, setFaqHeaderVisible] = React.useState(false)

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
      <section className="relative flex items-center justify-center h-[350px] md:h-[89vh] bg-center bg-cover">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-[1] w-full px-6 md:px-10 lg:px-20 text-center">
          <h1 className="text-white font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl">
            Smartwatch Repair
          </h1>
          <div className="mt-6 flex items-center justify-center text-white/90 text-lg md:text-xl">
            <span>Home</span>
            <span className="mx-3 inline-block h-2 w-2 rounded-full bg-red-500" />
            <span>Watch Repair</span>
          </div>
        </div>
      </section>






      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Smart Watch Repair in Hove & Brighton</h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Looking for reliable smart watch repair in Hove or Brighton? At Fone World Hove, we provide fast, professional, and affordable solutions to get your smartwatch back in top working condition. Whether your device has a cracked screen, battery issue, or connectivity fault, our experienced technicians are here to help.</p>

            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </button>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/09/Smart_Watch_Repair_in_Hove.png" alt="Laptop" className="max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}

      {/* Full Range Section Start */}
 <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
        <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/09/Professional_Smart_Watch_Repair_Services-removebg-preview-1-1.png" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional Smart Watch Repair Services  </h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Smartwatches have become an essential part of daily life, tracking fitness, receiving notifications, and keeping you connected on the go. When something goes wrong, it can be frustrating. That’s why our professional smart watch repair in Hove covers a wide range of issues, including:</p>
             <ul>
              <li>Screen repairs and replacements</li>
              <li>Battery replacement and charging issues</li>
              <li>Water damage repair</li>
              <li>Software troubleshooting</li>
              <li>Strap and hardware replacements</li>

             </ul>
             <p>
             No matter the model or brand, our team is equipped with the right tools and expertise to restore your smartwatch quickly and efficiently.</p>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Fone World Hove for Smart Watch Repair?</h2><br></br>
            <div className="text-lg space-y-4 mb-6">
            <ul>
              <li>
              Skilled technicians with years of repair experience</li>
              <li>Quick turnaround times to minimize downtime</li>
              <li>Use of genuine and high-quality replacement parts</li>
              <li>Competitive and transparent pricing</li>
              <li>Friendly customer support and trusted service</li>

             </ul>
             <p>
             
Our goal is to make sure you can continue using your smartwatch without interruptions, whether it’s for work, fitness, or staying connected.</p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </button>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/09/Why_Choose_Fone_World_Hove_for_Smart_Watch_Repair__1___1_-removebg-preview.png" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>
      {/* Info Section End */}
      
      {/* Info Section Start */}
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
        <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/09/Why_Choose_Fone_World_Hove_for_Smart_Watch_Repair__2_-removebg-preview.png" alt="Laptop" className="w-full max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Brighton & Hove Smart Watch Repair Shop </h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Located conveniently in Hove, we proudly serve both Hove and Brighton residents. Customers trust us as their go-to Brighton smart watch repair shop thanks to our consistent quality and professional approach. From minor fixes to complex repairs, you can rely on us for dependable results.</p>
              <p>If you’re also in need of a  <a href="home">phone repair service in Hove</a></p>
              
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </button>
          </AnimatedBlock>
          {/* Right Column */}
          
        </div>
      </section>
      {/* Info Section End */}

      
      <section className="w-full bg-white py-20 px-2 md:px-4 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 pl-20">
          {/* Left Column */}
          <AnimatedBlock direction="left" delayMs={100} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Your Smart Watch Repaired Today</h2>
            <div className="text-lg space-y-4 mb-6">
              <p>Don’t let a broken smartwatch slow you down. Visit Fone World Hove for trusted smart watch repair in Brighton and Hove. Our expert technicians are ready to provide quick, effective, and reliable repairs at a fair price.</p>

            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-medium rounded-full px-10 py-4 transition-all duration-300 shadow-lg">
                Contact us
              </button>
          </AnimatedBlock>
          {/* Right Column */}
          <AnimatedBlock direction="right" delayMs={200} className="flex-1 flex justify-center p-0">
            <img src="https://foneworld-hove.co.uk/wp-content/uploads/2025/09/Get_Your_Smart_Watch_Repaired_Today__1_-removebg-preview.png" alt="Laptop" className="max-w-md object-contain drop-shadow-2xl" />
          </AnimatedBlock>
        </div>
      </section>

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
export default SMARTWATCH_REPAIR

// Minimal animated wrapper used above
const AnimatedBlock = ({ children, className = '', direction = 'up', delayMs = 0 }) => {
  const [ref, visible] = useInView({ threshold: 0.15 })
  const translateMap = {
    up: 'translate-y-6',
    down: '-translate-y-6',
    left: 'translate-x-6',
    right: '-translate-x-6',
  }
  const hiddenTransform = translateMap[direction] || 'translate-y-6'
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTransform}`} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

// Minimal FAQ used above
const FAQ = () => {
  const items = [
    { q: 'Can you fix a water‑damaged smartwatch?', a: 'Yes. They offer water‑damage diagnostics and take prompt action to dry, clean, and replace parts as needed to revive your device.' },
    { q: 'Are the parts used genuine quality?', a: 'Fone World Hove uses high‑quality OEM or equivalent components to ensure lasting repairs and reliable operation' },
    { q: 'Can you recover data from a malfunctioning smartwatch?', a: 'Yes, we offer diagnostics and will help attempt data recovery from smartwatches suffering from software or hardware issues' },
    { q: 'What types of smartwatch repairs does Fone World Hove perform?', a: 'They offer a complete range of services including diagnostics, battery replacement, water‑damage assessment, charge-port fixes, and LCD/glass replacements for leading brands such as Apple, Samsung, and Huawei' },
    { q: 'How long does a smartwatch repair take?', a: 'Most repairs, from battery swaps to screen replacements are performed quickly, often with same‑day service available depending on parts and workload' },

  ]
  return (
    <div className="divide-y divide-gray-200 bg-white rounded-xl shadow">
      {items.map((item, idx) => (
        <details key={idx} className="p-6 group">
          <summary className="cursor-pointer list-none font-semibold text-lg flex items-center justify-between">
            {item.q}
            <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-gray-600">{item.a}</p>
        </details>
      ))}
    </div>
  )
}