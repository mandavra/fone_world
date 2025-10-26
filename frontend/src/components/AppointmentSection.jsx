import React from "react";

const CheckItem = ({ children }) => (
  <div className="flex items-start gap-3 animate-fade-in-up">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const Input = ({ label, type = "text", placeholder }) => (
  <label className="block">
    <span className="sr-only">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
    />
  </label>
);

const AppointmentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight animate-fade-in-up">
              Book Your Appointment for Repairing
            </h2>
            <p className="text-gray-700 text-lg animate-fade-in-up">
              Book your repair appointment now for fast and reliable service.
              Get expert help at your convenience!
            </p>

            <div className="space-y-5">
              <CheckItem>
                Get fast and reliable repair services for your phone, tablet, or
                laptop.
              </CheckItem>
              <CheckItem>
                Book your appointment online and skip the wait, we’ll be ready
                when you arrive.
              </CheckItem>
              <CheckItem>
                Most repairs are completed the same day by our expert
                technicians.
              </CheckItem>
              <CheckItem>
                We handle everything from screen replacements to water damage
                repairs.
              </CheckItem>
              <CheckItem>
                Trusted by hundreds of customers in Hove for quick and quality
                service.
              </CheckItem>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="animate-slide-in-right">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8">
              <h3 className="mb-6 text-center text-3xl font-bold text-black">
                Get In Touch
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Name" placeholder="Name" />
                <Input label="Email" type="email" placeholder="Email" />
              </div>

              <div className="mt-4">
                <Input label="Number" placeholder="Number" />
              </div>

              <div className="mt-4">
                <Input label="Make & Model" placeholder="Make & Model" />
              </div>

              <label className="mt-4 block">
                <span className="sr-only">Describe the fault</span>
                <textarea
                  rows={6}
                  placeholder="Please describe the fault"
                  className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-red-500/20 transition focus:border-red-500 focus:ring"
                />
              </label>

              {/* Fake captcha placeholder for UI parity */}
              <div className="mt-6 rounded-lg border border-gray-300 p-3">
                <div className="h-16 w-full bg-gray-50 text-gray-500 flex items-center justify-center rounded">
                  reCAPTCHA placeholder
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                >
                  <span className="mr-2">Send Message</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
