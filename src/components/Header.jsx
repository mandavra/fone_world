import React, { useState } from "react";
import LogoImage from "../assets/IMG_6658.PNG";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src={LogoImage}
                alt="DR.EX Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black font-semibold uppercase text-sm relative pb-1 border-b-2 border-red-600"
            >
              HOME
            </Link>
            {/* Only Smartphone Repair has a nested dropdown */}
            <div className="relative group">
              <div className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer">
                <span>SERVICES</span>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute left-0 top-full min-w-[200px] bg-white shadow-lg rounded border transition-opacity duration-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 flex flex-col p-3 border-t-4 border-transparent">
                <div className="relative group/nested">
                  <Link
                    to="/smartphone-repair"
                    className="text-red-600 font-bold uppercase text-sm flex items-center space-x-1 transition-colors cursor-pointer pr-6 "
                  >
                    Smartphone Repair
                    <svg
                      className="w-3 h-3 ml-1 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 min-w-[180px] bg-white shadow-lg rounded border transition-opacity duration-200 opacity-0 pointer-events-none group-hover/nested:opacity-100 group-hover/nested:pointer-events-auto z-50 flex flex-col p-3 border-t-4 border-transparent whitespace-nowrap">
                    <Link
                      to="/iphone-repair-service"
                      className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      iPhone Repair Service
                    </Link>
                    <Link
                      to="/sarnsung-mobile-repair-service"
                      className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      Sarnsung Mobile Repair Service
                    </Link>
                  </div>
                </div>
                <Link
                  to="/laptop-repair"
                  className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
                >
                  LAPTOP REPAIR
                </Link>
                <Link
                  to="/tablet-repair"
                  className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Tablet Repair
                </Link>
                <Link
                  to="/smartwatch-repair"
                  className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Smartwatch Repair
                </Link>
              </div>
            </div>
            {/* All other links are direct links */}
            <Link
              to="/blog"
              className="text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors"
            >
              BLOG
            </Link>
            <Link
              to="/unlocking-phone"
              className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
            >
              UNLOCKING PHONE
            </Link>
            <Link
              to="/buy-sell"
              className="text-black font-semibold uppercase text-sm flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer"
            >
              BUY & SELL
            </Link>
            <Link
              to="/contact-us"
              className="text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Contact Information */}
          <div className="hidden lg:flex flex-col space-y-1 text-right">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-black font-medium text-sm">
                01444616060
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="text-black font-medium text-sm">
                + 7919933386
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-black hover:text-red-600 focus:outline-none focus:text-red-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">HOME</Link>
            <div className="relative">
              <details>
                <summary className="py-2 px-2 text-black font-semibold uppercase text-sm flex items-center justify-between cursor-pointer hover:text-red-600 transition-colors">
                  <span>SERVICES</span>
                  <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="flex flex-col pl-4">
                  <Link to="/smartphone-repair" className="py-2 px-2 text-red-600 font-bold uppercase text-sm transition-colors">Smartphone Repair</Link>
                  <Link to="/iphone-repair-service" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">iPhone Repair Service</Link>
                  <Link to="/sarnsung-mobile-repair-service" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">Sarnsung Mobile Repair Service</Link>
                  <Link to="/laptop-repair" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">Laptop Repair</Link>
                  <Link to="/tablet-repair" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">Tablet Repair</Link>
                  <Link to="/smartwatch-repair" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">Smartwatch Repair</Link>
                </div>
              </details>
            </div>
            <Link to="/blog" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">BLOG</Link>
            <Link to="/unlocking-phone" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">UNLOCKING PHONE</Link>
            <Link to="/buy-sell" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">BUY & SELL</Link>
            <Link to="/contact-us" className="py-2 px-2 text-black font-semibold uppercase text-sm hover:text-red-600 transition-colors">CONTACT US</Link>
            <div className="flex flex-col space-y-1 pt-4 border-t border-gray-200">
              <span className="text-black font-medium text-sm flex items-center"><svg className="w-4 h-4 text-red-600 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>01444616060</span>
              <span className="text-black font-medium text-sm flex items-center"><svg className="w-4 h-4 text-red-600 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /> </svg>+ 7919933386</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
