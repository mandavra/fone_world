import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4001, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {/* Smart Phone Repair Service Item */}
        <div className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop')` }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex items-center h-full">
            <div className="w-full md:w-3/4 lg:w-1/2 px-6 sm:px-10 md:pl-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight pt-20">
                Smart Phone Repair Service
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 font-light max-w-prose">
                Get It Fixed at Turbo Speed!
              </p>
              <a href="/contact-us#contact-form" className="inline-block bg-teal-700 border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-teal-600 transition-colors">
             Get a Quote
              </a>
            </div>
          </div>

          {/* URL at bottom */}
          {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[10px] sm:text-xs md:text-sm opacity-80 px-2 text-center">
            https://foneworld-hove.co.uk/smart-phone-repair
          </div> */}
        </div>

        {/* Laptop Repair Service Item */}
        <div className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=1024x1024&w=is&k=20&c=SRQy9lxXhn2mHAthxIRBht3HLCRc6os5lfrOgSj3TuA=')` }}

            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex items-center h-full">
            <div className="w-full md:w-3/4 lg:w-1/2 px-6 sm:px-10 md:pl-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight pt-20">
                Laptop Repair Service
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 font-light max-w-prose">
                Get It Fixed at Turbo Speed!
              </p>
              <a href="/contact-us#contact-form" className="inline-block bg-teal-700 border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-teal-600 transition-colors">
             Get a Quote
              </a>
            </div>
          </div>

          {/* URL at bottom */}
          {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[10px] sm:text-xs md:text-sm opacity-80 px-2 text-center">
            https://foneworld-hove.co.uk/laptop-repair
          </div> */}
        </div>

        {/* Tablet Repair Service Item */}
        <div className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664299431263-e5183814706b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV0JTIwcmVwYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500')` }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex items-center h-full">
            <div className="w-full md:w-3/4 lg:w-1/2 px-6 sm:px-10 md:pl-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight pt-20">
                Tablet Repair Service
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 font-light max-w-prose">
                Get It Fixed at Turbo Speed!
              </p>
              <a href="/contact-us#contact-form" className="inline-block bg-teal-700 border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-teal-600 transition-colors">
             Get a Quote
              </a>
            </div>
          </div>

          {/* URL at bottom */}
          {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[10px] sm:text-xs md:text-sm opacity-80 px-2 text-center">
            https://foneworld-hove.co.uk/tablet-repair
          </div> */}
        </div>

        {/* Smartwatch Repair Service Item */}
        <div className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://media.istockphoto.com/id/1183923464/photo/repairman-fixing-smartwatch.webp?s=2048x2048&w=is&k=20&c=5uh-0Fypqh17LVXpfQCZ6kExNPFvVJsRTPYsdokOMXE=')` }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex items-center h-full">
            <div className="w-full md:w-3/4 lg:w-1/2 px-6 sm:px-10 md:pl-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight pt-20">
                Smartwatch Repair Service
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 font-light max-w-prose">
                Get It Fixed at Turbo Speed!
              </p>
              <a href="/contact-us#contact-form" className="inline-block bg-teal-700 border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold hover:bg-teal-600 transition-colors">
             Get a Quote
              </a>
            </div>
          </div>

          {/* URL at bottom */}
          {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[10px] sm:text-xs md:text-sm opacity-80 px-2 text-center">
            https://foneworld-hove.co.uk/smartwatch-repair
          </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
