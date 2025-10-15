import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogData = [
  // PAGE 1
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "How to Free Up iPhone Space by Auto-Deleting Old Messages",
    date: "December 15, 2024",
    summary: "We've all been there, your iPhone sends you that dreaded",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Fixing Cracked Tablet Screens: What We Repair Fast",
    date: "December 12, 2024",
    summary: "We've all been there; one accidental drop and suddenly your",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Top Tech Tips for A Longer-Lasting Battery",
    date: "December 8, 2024",
    summary: "In today's digital world, our smartphones are indispensable. From messaging",
    link: "#"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    title: "Top Mobile Tips Every Smartphone User Should Know",
    date: "December 5, 2024",
    summary: "Smartphones have become essential to daily life, from waking us",
    link: "#"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=400&q=80",
    title: "Phone speaker not working? Here's the real fix.",
    date: "November 28, 2024",
    summary: "A muffled, crackling, or completely silent phone speaker can be",
    link: "#"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "How to Recover Photos from Your Broken Phone?",
    date: "November 22, 2024",
    summary: "Smartphones are essential to our daily lives, often doubling as",
    link: "#"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
    title: "Fixing a Wet iPhone: Tips to Save Your Device Fast",
    date: "November 18, 2024",
    summary: "Smartphones go everywhere with us: on hikes, to the beach,",
    link: "#"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    title: "Top 4 Signs Your Smartphone Needs Immediate Repair",
    date: "November 15, 2024",
    summary: "Smartphones are an important part of our daily lives, helping",
    link: "#"
  },
  // PAGE 2
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "iPhone vs. Samsung: Which Is Easier and Cheaper to Repair?",
    date: "November 10, 2024",
    summary: "Although it's your mobile device when it breaks, be it",
    link: "#"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    title: "How to Back Up Your Data Before a Repair",
    date: "November 5, 2024",
    summary: "You likely know the importance of backing up your computer,",
    link: "#"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Extending Your Device's Battery Life: Tips and Tricks",
    date: "October 28, 2024",
    summary: "We've all been there. If you forgot to put your",
    link: "#"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=400&q=80",
    title: "Choosing the Right Screen Protector: Tempered Glass vs. Plastic",
    date: "October 22, 2024",
    summary: "With the influx of new smartphone accessory brands, the discussion",
    link: "#"
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "What are the Causes for Poor Mobile Signal Reception?",
    date: "October 18, 2024",
    summary: "In today's interconnected world, having a strong and dependable mobile",
    link: "#"
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Samsung: Slow Phone Charging & Rapid Discharge Fix",
    date: "October 12, 2024",
    summary: "Struggling with slow charging or rapid battery drain on your",
    link: "#"
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
    title: "How Do I Know If My Samsung Battery Needs To Be Replaced?",
    date: "October 8, 2024",
    summary: "Samsung users, we totally empathise with you! Experiencing sudden shutdowns",
    link: "#"
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    title: "5 Common Phone Problems and Their Fixes",
    date: "October 3, 2024",
    summary: "If you have a smartphone, you may be familiar with",
    link: "#"
  },
  // PAGE 3
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    title: "Top Fixes When Your Phone's Power Button Stops Working",
    date: "September 28, 2024",
    summary: "The power button is one of the most important features",
    link: "#"
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "What Should I Do If My Mobile Camera Doesn't Work?",
    date: "September 22, 2024",
    summary: "A faulty mobile camera can reveal itself in several ways,",
    link: "#"
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "How Much Does a Cracked Smartphone Screen Repair Cost in the UK in 2025?",
    date: "September 18, 2024",
    summary: "Cracking your smartphone screen can be both frustrating and costly,",
    link: "#"
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    title: "Should I repair or replace my phone?",
    date: "September 12, 2024",
    summary: "Thinking about whether to repair or replace your phone often",
    link: "#"
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "How to Clear the Cache On a Smartphone: Expert Guide",
    date: "September 8, 2024",
    summary: "Clearing the cache on your smartphone is an effective way",
    link: "#"
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=400&q=80",
    title: "10 Signs You Need a Professional Laptop Repair Now",
    date: "September 3, 2024",
    summary: "Your laptop is your digital companion, regardless of whether you",
    link: "#"
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Resolve Laptop Wi-Fi Issues: Expert Repair Advice",
    date: "August 28, 2024",
    summary: "In today's hyper-connected world, a dodgy Wi-Fi connection on your",
    link: "#"
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
    title: "Is Your Tablet Touchscreen Unresponsive Today?",
    date: "August 22, 2024",
    summary: "There's nothing more annoying than picking up your tablet to",
    link: "#"
  },
  // PAGE 4
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Common iPhone Problems",
    date: "August 15, 2024",
    summary: "What is the most common problem for iPhones? The most",
    link: "#"
  }
];

const BLOG = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const blogsPerPage = 8;
  const totalPages = 4;
  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogData.slice(startIdx, startIdx + blogsPerPage);

  const handleLearnMoreClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <>
      <Header />
      {/* Hero Section Start */}
      <section
        className="relative flex items-center justify-center h-[350px] md:h-[89vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">blog</h1>
          <div className="flex items-center space-x-2 text-white text-lg">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="text-red-500 text-2xl">•</span>
            <span className="font-semibold">blog</span>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Latest Blogs Section Start */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentBlogs.map((blog, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
                <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{blog.title}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-1">{blog.date}</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">{blog.summary}</p>
                  <button 
                    onClick={() => handleLearnMoreClick(blog.id)} 
                    className="text-red-600 font-semibold hover:underline mt-auto text-left"
                  >
                    Learn More »
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2 text-lg">
            {[1,2,3,4].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded font-bold border ${currentPage === page ? 'text-blue-600 border-blue-600' : 'text-gray-700 hover:text-blue-600 border-transparent'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
    </div>
      </section>
      {/* Latest Blogs Section End */}

      <Footer />
    </>
  );
};

export default BLOG; 
