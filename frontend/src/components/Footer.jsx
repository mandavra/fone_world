import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2b2e33] text-gray-300 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand + About */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold tracking-wider text-white">
                DR.
              </span>
              <svg
                className="h-7 w-7 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="2" width="12" height="20" rx="3" />
              </svg>
              <span className="text-2xl font-extrabold tracking-wider text-white">
                EX
              </span>
            </div>
            <p className="leading-relaxed">
              DR.EX was founded by an experienced team of technicians who know how
              to get any modern PC or gadget working the right way. With over 6
              years of expertise, you can always trust us.
            </p>

            <div>
              <p className="mb-3 font-semibold text-white">SOCIAL LINKS</p>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.08 22 12.06z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.23 5.924a5.6 5.6 0 01-1.607.441 2.807 2.807 0 001.232-1.548 5.62 5.62 0 01-1.78.68A2.802 2.802 0 0015.43 7.23a7.96 7.96 0 01-5.78-2.93 2.802 2.802 0 00.868 3.743 2.788 2.788 0 01-1.269-.35v.036a2.803 2.803 0 002.247 2.748 2.81 2.81 0 01-1.266.048 2.804 2.804 0 002.617 1.946A5.618 5.618 0 016 14.557a7.93 7.93 0 004.29 1.257c5.148 0 7.966-4.264 7.966-7.96 0-.121-.003-.243-.01-.363a5.68 5.68 0 001.384-1.567z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/447919933386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 transition"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe & Explore/Services/Contact */}
          <div className="animate-fade-in-up lg:col-span-2 flex flex-col gap-8">
            <div>
              <p className="mb-4 text-xl font-semibold text-white">
                SUBSCRIBE &amp; STAY UPDATED
              </p>
              <form className="flex flex-col sm:flex-row items-center gap-4" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = form.querySelector('input[name="subscribeEmail"]').value;
                try {
                  const resp = await fetch('http://localhost:4001/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  });
                  const data = await resp.json().catch(() => ({}));
                  if (!resp.ok || !data.ok) {
                    alert(`Subscribe failed. ${data && data.error ? data.error : `Status ${resp.status}`}`);
                    return;
                  }
                  alert('Thanks! You are subscribed.');
                  form.reset();
                } catch (err) {
                  alert('Something went wrong while subscribing.');
                }
              }}>
                <div className="flex w-full items-center rounded-full bg-[#3a3e44] px-4 shadow-inner">
                  <input
                    type="email"
                    name="subscribeEmail"
                    placeholder="E-Mail"
                    className="w-full bg-transparent px-2 py-3 text-gray-200 outline-none ring-0 placeholder:text-gray-400"
                    required
                  />
                </div>
                <button type="submit" className="rounded-full bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition w-full sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
              {/* Explore */}
              <div className="animate-fade-in-up">
                <p className="mb-4 text-xl font-semibold text-white">
                  EXPLORE
                </p>
                <ul className="space-y-3">
                  {["Home", "About Us","Privacy Policy", "Terms and Conditions"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      <span className="text-red-600">›</span>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services */}
              <div className="animate-fade-in-up">
                <p className="mb-4 text-xl font-semibold text-white">
                  SERVICES
                </p>
                <ul className="space-y-3">
                  {["Smartphone Repair", "Tablet Repair", "Laptop Repair", "Smartwatch Repair", "Unlock Mobile Phone"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      <span className="text-red-600">›</span>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact */}
              <div className="animate-fade-in-up">
                <p className="mb-4 text-xl font-semibold text-white">
                  CONTACT US
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-red-600">📞</span>
                  <a href="tel:01444616060">01444616060</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600">🟢</span>
                  <a href="tel:44+7919933386">44+7919933386</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600">✉️</span>
                  <a href="mailto:drex.haywards@gmail.com">
                      drex.haywards@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-600">📍</span>
                    <span>17 South Road, Haywards Heath
RH64LE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center py-6 text-sm text-gray-400 gap-2">
            <span>DR.EX © 2025 | All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
