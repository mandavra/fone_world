import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blog = blogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[350px] md:h-[89vh] bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center px-4">{blog.title}</h1>
          <div className="flex items-center space-x-2 text-white text-lg">
            <span className="hover:underline cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="text-red-500 text-2xl">•</span>
            <span className="hover:underline cursor-pointer" onClick={() => navigate('/blog')}>Blog</span>
            <span className="text-red-500 text-2xl">•</span>
            <span className="font-semibold">Article</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Blog Image */}
            <div className="relative">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Blog Content */}
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="text-red-600 font-semibold">{blog.date}</span>
                  <span>•</span>
                  <span>Admin@fww</span>
                  <span>•</span>
                  <span>No Comments</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {blog.summary}
                </p>
                
                {blog.id === 1 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Running out of storage space on your iPhone can be incredibly frustrating. When that dreaded "Storage Almost Full" notification appears, it can slow down your device and prevent you from taking new photos or downloading apps. Fortunately, there are several effective ways to free up space automatically, especially with old messages that accumulate over time.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Messages can take up significant storage space, especially if you receive a lot of photos, videos, and GIFs. By setting up automatic deletion of old messages, you can keep your iPhone running smoothly without manually managing your message history.
                    </p>
                  </>
                )}
                
                {blog.id === 2 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tablet screens are particularly vulnerable to cracks due to their larger surface area and frequent handling. Whether it's an iPad, Samsung Galaxy Tab, or any other tablet, a cracked screen can significantly impact usability and potentially cause further damage to internal components.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      At Dr.ex Haywards Heath, we specialize in fast tablet screen repairs. Our experienced technicians can replace cracked screens quickly and efficiently, often completing repairs within the same day. We use high-quality replacement parts and provide warranties on all our work.
                    </p>
                  </>
                )}
                
                {blog.id === 3 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Battery life is one of the most important factors in smartphone performance. A longer-lasting battery means you can use your device throughout the day without constantly worrying about finding a charger. There are several proven strategies to extend your battery life significantly.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Simple changes like reducing screen brightness, closing unused apps, and enabling battery optimization features can make a substantial difference. Additionally, avoiding extreme temperatures and not letting your battery drain completely can help maintain long-term battery health.
                    </p>
                  </>
                )}
                
                {blog.id === 4 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Smartphones have become essential tools in our daily lives, serving as communication devices, cameras, navigation systems, and entertainment centers. To get the most out of your smartphone, it's important to understand and utilize the various features and settings available.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      From optimizing battery life to managing storage space, there are numerous tips and tricks that can enhance your smartphone experience. Learning these techniques can help you use your device more efficiently and avoid common problems that many users encounter.
                    </p>
                  </>
                )}
                
                {blog.id === 5 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A malfunctioning phone speaker can be incredibly frustrating, especially when you need to make calls or listen to audio. The issue can manifest in various ways: complete silence, crackling sounds, muffled audio, or intermittent functionality.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common causes include dust and debris blocking the speaker grille, software issues, or hardware damage. In many cases, the problem can be resolved with simple cleaning techniques or software troubleshooting. However, if these methods don't work, professional repair may be necessary.
                    </p>
                  </>
                )}
                
                {blog.id === 6 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Losing precious photos due to a broken phone can be devastating. Whether your phone has a cracked screen, water damage, or won't turn on, your photos might still be recoverable. The key is to act quickly and use the right methods to retrieve your memories.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      There are several approaches to photo recovery, including using cloud backups, connecting to a computer, or using specialized recovery software. The success rate depends on the extent of the damage and whether the phone's storage is still intact.
                    </p>
                  </>
                )}
                
                {blog.id === 7 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Water damage is one of the most common causes of smartphone failure. Whether your iPhone fell into a pool, got caught in the rain, or was accidentally dropped in the sink, quick action can often save your device from permanent damage.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The first 24 hours are crucial when dealing with water damage. Immediate steps include turning off the device, removing it from water, and avoiding common mistakes like using a hairdryer or putting it in rice. Professional repair services can often restore water-damaged phones if action is taken quickly.
                    </p>
                  </>
                )}
                
                {blog.id === 8 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Smartphones are complex devices that can develop various issues over time. Recognizing the warning signs of problems can help you address issues before they become more serious and expensive to fix. Some problems require immediate attention to prevent further damage.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common warning signs include rapid battery drain, overheating, unresponsive touchscreen, frequent crashes, and unusual noises. These symptoms often indicate underlying hardware or software issues that should be addressed by a professional repair service.
                    </p>
                  </>
                )}
                
                {blog.id === 9 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      When choosing between iPhone and Samsung for repair considerations, there are several factors to evaluate. Both brands have their advantages and disadvantages when it comes to repairability, cost, and availability of parts.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      iPhones generally have more standardized parts and repair procedures, but repairs can be more expensive due to Apple's pricing structure. Samsung devices often have more modular designs, making certain repairs easier and more cost-effective.
                    </p>
                  </>
                )}
                
                {blog.id === 10 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Backing up your data before any repair is crucial to prevent data loss. Many people understand the importance of backing up computers, but smartphones often contain equally valuable information including photos, contacts, messages, and app data.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      There are multiple backup methods available, including cloud services, computer backups, and external storage. Each method has its advantages, and using multiple backup methods provides the best protection against data loss during repairs.
                    </p>
                  </>
                )}
                
                {blog.id === 11 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Battery life is a constant concern for smartphone users. With devices being used for everything from work to entertainment, extending battery life has become increasingly important. There are numerous strategies and settings that can significantly improve your device's battery performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Simple adjustments like reducing screen brightness, managing background apps, and optimizing charging habits can make a substantial difference. Understanding your device's battery usage patterns and implementing these tips can help you get through the day without constantly searching for a charger.
                    </p>
                  </>
                )}
                
                {blog.id === 12 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The screen protector market has grown significantly with numerous brands and options available. The main choice is between tempered glass and plastic protectors, each with distinct advantages and disadvantages for different use cases and preferences.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tempered glass protectors offer better clarity and feel more like the original screen, while plastic protectors are more flexible and easier to install. The choice depends on factors like device type, usage patterns, and personal preference for feel and protection level.
                    </p>
                  </>
                )}
                
                {blog.id === 13 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Poor mobile signal reception can be incredibly frustrating, especially when you need to make important calls or access the internet. There are several factors that can affect signal strength, and understanding these can help you improve your connection quality.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common causes include distance from cell towers, physical obstructions, weather conditions, and device issues. Some problems can be resolved with simple troubleshooting, while others may require professional diagnosis and repair of your device's antenna or other components.
                    </p>
                  </>
                )}
                
                {blog.id === 14 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Samsung users often experience charging issues that can significantly impact daily device usage. Slow charging and rapid battery discharge are common problems that can usually be resolved with proper diagnosis and repair techniques.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      These issues can stem from various causes including faulty charging ports, damaged cables, software problems, or battery degradation. Professional diagnosis can identify the root cause and provide appropriate solutions to restore normal charging performance.
                    </p>
                  </>
                )}
                
                {blog.id === 15 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Samsung battery issues can manifest in various ways, making it important to recognize the warning signs. Understanding when your battery needs replacement can prevent unexpected shutdowns and ensure reliable device performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common indicators include rapid battery drain, unexpected shutdowns, difficulty charging, and battery swelling. These symptoms often indicate that the battery has reached the end of its useful life and should be replaced by a qualified technician.
                    </p>
                  </>
                )}
                
                {blog.id === 16 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Smartphone problems are inevitable with regular use, but many common issues have straightforward solutions. Understanding these problems and their fixes can save time and money while keeping your device functioning optimally.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      From software glitches to hardware malfunctions, most smartphone problems fall into predictable categories. Learning to identify and address these issues can help you maintain your device's performance and avoid unnecessary repairs.
                    </p>
                  </>
                )}
                
                {blog.id === 17 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The power button is essential for turning your phone on and off, locking the screen, and accessing various functions. When it stops working, it can make your device nearly unusable, but there are several solutions available depending on the cause of the problem.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common causes include physical damage, dust accumulation, software issues, and general wear and tear. Many power button problems can be resolved with simple cleaning or software troubleshooting, while others may require professional repair or replacement.
                    </p>
                  </>
                )}
                
                {blog.id === 18 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mobile camera issues can be particularly frustrating since cameras are one of the most used features on smartphones. A faulty camera can manifest in various ways, from complete black screens to blurry images or app crashes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      These problems can stem from software issues, hardware damage, or app conflicts. Many camera problems can be resolved with simple troubleshooting steps, while hardware issues may require professional repair to restore full camera functionality.
                    </p>
                  </>
                )}
                
                {blog.id === 19 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Screen repair costs in the UK can vary significantly depending on the device model, damage extent, and repair provider. Understanding these costs can help you make informed decisions about whether to repair or replace your device.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Premium devices like the latest iPhones and Samsung Galaxy models typically cost more to repair due to expensive parts and complex repair procedures. However, many repair shops offer competitive pricing and quality guarantees that can make repair a cost-effective option.
                    </p>
                  </>
                )}
                
                {blog.id === 20 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Deciding between repairing or replacing your phone is a common dilemma that many users face. The decision depends on various factors including repair costs, device age, performance, and personal preferences.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Generally, if repair costs exceed 50% of the device's current value, replacement might be more economical. However, factors like data preservation, environmental concerns, and sentimental value can also influence this decision significantly.
                    </p>
                  </>
                )}
                
                {blog.id === 21 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Clearing cache on your smartphone is an effective way to improve performance and free up storage space. Cache files accumulate over time and can slow down your device, making regular cache clearing an important maintenance task.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Different methods are available depending on your device type and operating system. While some cache clearing can be done through device settings, more thorough cleaning may require specialized apps or professional assistance to ensure optimal results.
                    </p>
                  </>
                )}
                
                {blog.id === 22 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Laptop repair needs can be identified through various warning signs that indicate underlying problems. Recognizing these signs early can prevent more serious damage and costly repairs down the line.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common indicators include slow performance, overheating, strange noises, frequent crashes, and hardware malfunctions. Professional diagnosis can identify the root causes and provide appropriate solutions to restore your laptop's functionality.
                    </p>
                  </>
                )}
                
                {blog.id === 23 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Wi-Fi connectivity issues can be incredibly frustrating, especially in our hyper-connected world where reliable internet access is essential for work, communication, and entertainment. These problems can have various causes and solutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common Wi-Fi problems include weak signals, intermittent connections, slow speeds, and complete disconnections. Many issues can be resolved through troubleshooting steps, while hardware problems may require professional repair to restore reliable connectivity.
                    </p>
                  </>
                )}
                
                {blog.id === 24 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tablet touchscreen problems can make your device nearly unusable, especially since tablets rely heavily on touch interaction for navigation and app usage. These issues can stem from various causes and require different solutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Common problems include unresponsive areas, ghost touches, calibration issues, and complete touch failure. While some issues can be resolved with simple troubleshooting, hardware problems often require professional repair to restore full touchscreen functionality.
                    </p>
                  </>
                )}
                
                {blog.id === 25 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      iPhones, while generally reliable, can develop various common problems over time. Understanding these issues and their solutions can help you maintain your device's performance and address problems before they become more serious.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The most common iPhone problems include battery issues, charging problems, software glitches, and hardware malfunctions. Many of these issues can be resolved through troubleshooting or professional repair services, ensuring your iPhone continues to function optimally.
                    </p>
                  </>
                )}
              </div>
              
              {/* Back Button */}
              <div className="mt-8 pt-6 border-t">
                <button 
                  onClick={() => navigate('/blog')}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  ← Back to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetail;
