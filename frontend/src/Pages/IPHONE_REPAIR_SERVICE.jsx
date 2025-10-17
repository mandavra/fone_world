import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const IPHONE_REPAIR_SERVICE = () => {
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
      <section className="relative overflow-hidden text-white bg-black" data-aos="fade-right">
        {/* radial red glow background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/90 via-red-900/40 to-black" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col-reverse items-center gap-12 py-20 md:flex-row md:justify-between md:py-28 lg:py-36">
            {/* Left: title + breadcrumb */}
            <div className="w-full max-w-3xl">
              <div className="mb-6 flex items-center text-lg text-gray-300/90">
                <span className="hover:text-white transition-colors cursor-default">Home</span>
                <span className="mx-3 inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="text-white/95">iPhone Repair Service</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                iPhone Repair Service
              </h1>
            </div>

            {/* Right: phone image */}
            <div className="w-full md:w-auto md:shrink-0">
              <img
                className="mx-auto block w-64 sm:w-72 md:w-80 lg:w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                src="https://media.istockphoto.com/id/2192574727/photo/an-iphone-a-smartphone-with-broken-glass-on-the-back-has-been-run-over-by-many-cars-on-the.webp?s=2048x2048&w=is&k=20&c=4eK78nPiOAiPOpOgjv_YiN2EF5UqvGmdEriDr_iDGkE="
                alt="Broken iPhone back glass"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* subtle bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
      </section>

      {/* Info section */}
      <section className="bg-white" data-aos="fade-left">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
            {/* Left column: copy */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Fast, Reliable, and Affordable iPhone Repairs
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Get trusted iPhone repair in Haywards Heath from certified technicians at Dr.ex Haywards Heath
                . It doesn’t matter if you are dealing with cracked screens,
                battery replacements, charging issues, or glass repairs; we offer fast,
                reliable, and professional service for all iPhone models at competitive
                prices.  
              </p>

              <h3 className="mt-10 text-2xl font-extrabold tracking-tight text-gray-900">
                Why Choose Us for Apple iPhone Repair?
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Our Haywards Heath-based technicians deliver quick, precise iPhone repairs using
                premium-quality parts for long-lasting performance. With years of
                experience, we’ve built a reputation for fast turnarounds, transparent
                pricing, and reliable service. No matter if it’s a screen, battery, or
                glass issue, we aim to restore your device efficiently, making us a top
                choice for iPhone repair in Haywards Heath.
              </p>

              <div className="mt-10">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Right column: image */}
            <div>
              <img
                className="w-full rounded-xl border border-gray-200 shadow-lg"
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
                alt="Technician holding smartphone with tools on desk"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-red-600 text-white" data-aos="zoom-in">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {/* Item 1 */}
            <div className="flex items-start gap-5">
              {/* magnifier icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <p className="text-2xl font-semibold leading-snug">Free diagnostic check</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5">
              {/* pin/award icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 2a6 6 0 016 6c0 4.5-6 12-6 12S6 12.5 6 8a6 6 0 016-6z" />
                <circle cx="12" cy="8" r="2.5" />
              </svg>
              <p className="text-2xl font-semibold leading-snug">
                Same-day screen
                <br className="hidden sm:block" />
                replacement
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5">
              {/* parts/gear icon on board */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M12 9a2 2 0 100 4 2 2 0 000-4zm0-3v2m0 8v2m3.5-7l1.5 1.5M7 10.5L8.5 12" />
              </svg>
              <p className="text-2xl font-semibold leading-snug">
                Genuine-grade parts
                <br className="hidden sm:block" />
                only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section title: Our Most Popular iPhone Repair Services */}
      <section className="bg-white" data-aos="fade-right">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center sm:px-8 md:py-14 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Most Popular <span className="text-red-600">iPhone Repair Services</span>
          </h2>
        </div>
      </section>

      {/* Popular services cards */}
      <section className="bg-gray-50" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Screen
                <br />
                Repair
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We provide the best iPhone screen repair in Haywards Heath with
                top-quality replacement glass and fast service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Battery
                <br />
                Replacement
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                iPhone battery repair in Haywards Heath features high-quality batteries
                professionally installed in less than an hour.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Glass Repair
                <br />
                Service
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                No more cracked screens; our iPhone glass repair in Haywards Heath is fast,
                reliable, and easy on your budget.
              </p>
            </div>
          </div>
          {/* Second row */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-3">
            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Water
                <br />
                Damage Recovery
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We carefully clean and restore water-damaged devices with proven
                techniques.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Charging
                <br />
                Port Fix
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Non-responsive charging? We repair or replace ports to restore full
                function.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <h3 className="text-2xl font-extrabold leading-snug text-red-600 sm:text-3xl">
                iPhone Button
                <br />
                Repairs
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We fix power, volume, and home buttons with precise component
                replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: View all services */}
      <section className="bg-white" data-aos="fade-right">
        <div className="mx-auto max-w-7xl px-6 pb-16 text-center sm:px-8 md:pb-20 lg:pb-24">
          <Link
            to="/smartphone-repair"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-10 py-5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* What Makes Our Service Stand Out */}
      <section className="relative overflow-hidden text-white" data-aos="fade-left">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-[#7a0000] to-[#ff0000]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 sm:px-8 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-3 lg:gap-14">
            {/* Left: Heading + copy */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl">What Makes Our Service Stand Out</h3>
              <p className="mt-6 text-lg leading-8 text-white/90">
                We offer expert iPhone repairs in Haywards Heath and Brighton, backed by years of
                hands-on experience.
              </p>
            </div>

            {/* Middle: checklist */}
            <div className="space-y-6 md:col-span-1 md:border-l md:border-white/30 md:pl-8">
              {['Instant repair quotes','Friendly customer support','No fix, no fee','Walk-in or book online'].map((text) => (
                <div key={text} className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-lg leading-8">{text}</p>
                </div>
              ))}
            </div>

            {/* Right: image inside red circle */}
            <div className="md:col-span-1">
              <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
                <div className="absolute inset-0 rounded-full bg-red-700/80" />
                <img
                  className="relative z-[1] h-full w-full rounded-full object-cover"
                  src="https://foneworld-hove.co.uk/wp-content/uploads/2025/06/trusted-girl-r.webp"
                  alt="Happy customer holding phone"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>  <br></br><br></br><br></br>

      {/* Stats strip */}
      <section className="bg-red-600 text-white " data-aos="zoom-in-up">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-14 text-center md:grid-cols-3 md:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-6 h-28 w-28" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M8.5 10.5a1.5 1.5 0 113 0M12.5 10.5a1.5 1.5 0 103 0M8 14s1.5 2 4 2 4-2 4-2" />
              </svg>
              <div className="text-4xl font-extrabold sm:text-5xl">15,000+</div>
              <div className="mt-2 text-xl">Happy Customers</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-6 h-28 w-28" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="3" width="16" height="18" rx="3" />
                <path d="M10 8h4M12 13l3-3m-3 3L9 10m3 3v3" />
              </svg>
              <div className="text-4xl font-extrabold sm:text-5xl">20,000+</div>
              <div className="mt-2 text-xl">Devices Repaired</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-6 h-28 w-28" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path d="M5.5 20L7 16l-3-2 3-2-1.5-4M18.5 20L17 16l3-2-3-2 1.5-4" />
              </svg>
              <div className="text-4xl font-extrabold sm:text-5xl">10+</div>
              <div className="mt-2 text-xl">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert screen and battery repairs section */}
      <section className="bg-white" data-aos="flip-left">
        <div className="mx-auto max-w-7xl grid items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20 lg:gap-24 lg:py-24">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Expert Screen and Battery Repairs You Can Trust
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-700">
              We’re known for our expert Apple iPhone screen repair in Brighton. No
              matter if you’re dealing with a cracked screen, faulty display, or a
              battery that drains too quickly, our team offers the best iPhone
              <a href="#" className="text-red-600 underline decoration-red-600/50 underline-offset-4 hover:text-red-700 ml-2">screen repair service</a>
              in Brighton with fast turnaround times. We work on all models, from older
              iPhones to the latest releases, using premium-quality replacement parts
              for long-lasting performance.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our repairs are handled with expert precision and attention to detail, so
              you don’t have to worry about repeat issues. If you’re searching for
              durable and efficient iPhone screen repair in Haywards Heath, we’re the trusted
              local team you can count on.
            </p>
            <div className="mt-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div>
            <img
              className="w-full rounded-xl border border-gray-200 shadow-lg"
              src="https://media.istockphoto.com/id/1333080956/photo/repair-of-electronic-devices-soldering-of-parts-multimeter.webp?s=2048x2048&w=is&k=20&c=DzOy5xzIBHYTNquC_jOOQQQjZ9tgEkDYh4ohmcy5aeQ="
              alt="Technician repairing iPhone on workstation"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why choose us - three features */}
      <section className="bg-red-600 text-white" data-aos="fade-up-right">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
            {/* Item 1 */}
            <div className="mx-auto max-w-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mx-auto mb-6 h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="7" r="3.5" />
                <path d="M4 20a8 8 0 0116 0" />
              </svg>
              <h3 className="text-3xl font-extrabold sm:text-4xl">iPhone Repairs in Haywards Heath</h3>
              <p className="mt-4 text-lg leading-8">
                Get fast, reliable local iPhone repairs in Haywards Heath from technicians you can
                trust for quality service and genuine parts.
              </p>
            </div>

            {/* Item 2 */}
            <div className="mx-auto max-w-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mx-auto mb-6 h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="7" r="3.5" />
                <path d="M4 20a8 8 0 0116 0" />
              </svg>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Certified Technicians</h3>
              <p className="mt-4 text-lg leading-8">
                Our skilled technicians are fully certified and trained to handle all
                iPhone repairs, with a service warranty for peace of mind.
              </p>
            </div>

            {/* Item 3 */}
            <div className="mx-auto max-w-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mx-auto mb-6 h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="7" r="3.5" />
                <path d="M4 20a8 8 0 0116 0" />
              </svg>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Transparent Pricing</h3>
              <p className="mt-4 text-lg leading-8">
                We provide clear, upfront pricing, so you know the full cost before we
                start—no hidden charges or unexpected fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Service section */}
      <section className="bg-white" data-aos="fade-down">
        <div className="mx-auto max-w-7xl grid items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20 lg:gap-24 lg:py-24">
          {/* Image */}
          <div>
            <img
              className="w-full rounded-2xl border border-gray-200 shadow-lg"
              src="https://media.istockphoto.com/id/1125323600/photo/technician-repairing-broken-smartphone-on-desk.webp?s=2048x2048&w=is&k=20&c=y33VTTcuX220dkIvsoPhLGI-8SeRm9uniOXDJ4JWshg="
              alt="Technician with gloves holding smartphone during repair"
              loading="lazy"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Secure Service
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-700">
              Your privacy matters. During repairs, we never access personal files and
              follow strict handling procedures to protect your data. Every device is
              managed with care, so you can feel confident that your information remains
              secure throughout the repair process.
            </p>
            <div className="mt-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by iPhone users CTA band */}
      <section className="relative overflow-hidden bg-[#ff0000] text-white" data-aos="zoom-in">
        <div className="mx-auto max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 md:grid md:grid-cols-3 md:py-16 lg:py-20">
          {/* Left decorative image */}
          <div className="hidden md:block">
            <img
              className="w-full max-w-sm rounded-xl opacity-95"
              src= "https://media.istockphoto.com/id/1536801548/vector/modern-laptop-mockup-front-view-and-smartphone-mockup-high-quality-isolated-on-white.webp?s=2048x2048&w=is&k=20&c=Et24uBf2LQ7CueBzYpOc3-XQWkLVSllG_jnrH77nDlg="
              alt="Devices on a desk"
              loading="lazy"
            />
          </div>

          {/* Center heading */}
          <div className="col-span-1 text-center md:col-span-1">
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
              Trusted by iPhone Users Across
              <br />
                Haywards Heath
            </h2>
          </div>

          {/* Right button */}
          <div className="mt-8 flex justify-center md:mt-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-red-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16" data-aos="fade-up-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 flex flex-col h-full">
              <span className="absolute right-8 top-8 text-red-600 text-5xl font-bold select-none">”</span>
              <p className="mt-4 text-lg italic text-gray-800">Screen repaired in 30 minutes! Broke my iPhone and Dr.ex Haywards Heath fixed it the same day. Super friendly staff.</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-semibold text-gray-900">David</span>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 flex flex-col h-full">
              <span className="absolute right-8 top-8 text-red-600 text-5xl font-bold select-none">”</span>
              <p className="mt-4 text-lg italic text-gray-800">My iPhone battery wouldn’t last half a day. They replaced it quickly and now it’s like new. Highly recommend!</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-semibold text-gray-900">Liza</span>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 flex flex-col h-full">
              <span className="absolute right-8 top-8 text-red-600 text-5xl font-bold select-none">”</span>
              <p className="mt-4 text-lg italic text-gray-800">They broke down the issue in simple terms and gave me options. Honest and professional service.</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-semibold text-gray-900">Andrew</span>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read More Reviews Button Section */}
      <section className="relative flex justify-center items-center py-8" data-aos="flip-right">
        <div className="absolute top-0 left-0 w-full h-2 shadow-md" style={{boxShadow: '0 -8px 16px -8px #e5e7eb'}}></div>
        <button onClick={() => window.open('https://www.google.com/maps/place/DR.EX+-+Mobile,+iPad,+Macbook,+Tablet+%26+More+Tech+Repair+Services/@50.9958421,-0.1009489,17z/data=!4m18!1m9!3m8!1s0x48758ca379d35081:0x78f1210f4f677afc!2sDR.EX+-+Mobile,+iPad,+Macbook,+Tablet+%26+More+Tech+Repair+Services!8m2!3d50.9958421!4d-0.1009489!9m1!1b1!16s%2Fg%2F1q64f73x7!3m7!1s0x48758ca379d35081:0x78f1210f4f677afc!8m2!3d50.9958421!4d-0.1009489!9m1!1b1!16s%2Fg%2F1q64f73x7?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
          className="bg-[#ff0000] text-white text-2xl font-medium rounded-full px-16 py-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 z-10"
        >
          Read More Reviews
        </button>
      </section>

      {/* Easy Contact & Book Online Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 my-12 px-2" data-aos="fade-left">
        {/* Easy Contact Options Card */}
        <div className="flex-1 bg-[#ff0000] rounded-3xl flex flex-col md:flex-row items-center p-6 md:p-12 shadow-lg">
          {/* Left: iPhone with no battery icon */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative w-40 h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border-4 border-black bg-black"></div>
              <svg viewBox="0 0 80 120" className="relative z-10 w-24 h-36" fill="none">
                <rect x="10" y="20" width="60" height="80" rx="8" fill="#fff"/>
                <rect x="30" y="10" width="20" height="10" rx="3" fill="#fff"/>
                <rect x="25" y="40" width="30" height="40" rx="2" fill="none" stroke="#000" strokeWidth="4"/>
                <line x1="28" y1="43" x2="52" y2="77" stroke="#000" strokeWidth="4"/>
              </svg>
            </div>
          </div>
          {/* Right: Text and button */}
          <div className="flex-1 md:pl-12 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-6">Easy Contact Options</h2>
                <p className="text-white text-lg mb-10">Visit our Haywards Heath location or contact us online; booking your iPhone repair service has never been more convenient.</p>
            <a href="/contact-us" className="inline-block bg-black text-white text-xl rounded-full px-12 py-5 shadow-md hover:bg-gray-900 transition-colors transition-all duration-300">Contact us</a>
          </div>
        </div>
        {/* Book Online Card */}
        <div className="flex-1 bg-[#ff0000] rounded-3xl flex flex-col md:flex-row items-center p-6 md:p-12 shadow-lg">
          {/* Left: iPhone with cracked screen image */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1706972612595-aa53b400ee80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
              alt="Cracked iPhone screen"
              className="w-40 h-72 object-cover rounded-2xl border-4 border-black bg-black"
              loading="lazy"
            />
          </div>
          {/* Right: Text and button */}
          <div className="flex-1 md:pl-12 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-6">Book Online</h2>
            <p className="text-white text-lg mb-10">Choose your ideal repair time online, and we’ll take care of everything else for a quick and hassle-free experience.</p>
            <a href="/contact-us" className="inline-block bg-black text-white text-xl rounded-full px-12 py-5 shadow-md hover:bg-gray-900 transition-colors transition-all duration-300">Contact us</a>
          </div>
        </div>
      </section>

      {/* FAQ Section (Interactive) */}
      {(() => {
        const faqs = [
          {
            q: 'Do you use genuine Apple parts?',
            a: "We use premium-grade parts that match Apple’s quality standards.",
          },
          {
            q: 'How long does iPhone screen repair take?',
            a: "Typical screen repairs are done within 30 to 60 minutes.",
          },
          {
            q: 'Is my data safe during repair?',
            a: "Yes, we never access personal files or data.",
          },
          {
            q: 'Do you offer a warranty?',
            a: "Yes, all repairs come with a limited warranty.",
          },
        ];
        const [openIdx, setOpenIdx] = React.useState(null);
        return (
          <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md max-w-full md:max-w-6xl mx-auto">
                  <button
                    className="w-full flex items-center justify-between text-left px-8 py-7 text-xl md:text-2xl font-semibold text-gray-900 focus:outline-none transition-all duration-300"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  >
                    <span>{`${idx + 1}. ${faq.q}`}</span>
                    {openIdx === idx ? (
                      <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    ) : (
                      <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    )}
                  </button>
                  {openIdx === idx && (
                    <div className="px-8 pb-7 text-lg text-gray-800 animate-fade-in transition-all duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      <Footer />
    </>
  )
}

export default IPHONE_REPAIR_SERVICE