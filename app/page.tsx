"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { motion, easeInOut } from "framer-motion";

function StickyHeader() {
  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < lastScroll && current > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center bg-white/90 shadow-soft px-6 py-3 max-w-4xl mx-auto rounded-b-2xl mt-2">
        <span className="font-heading text-sage text-lg font-bold">
          Keto-Vegan Secrets
        </span>
        <button
          className="px-4 py-2 rounded-xl bg-terracotta text-cream font-heading font-semibold animate-pulse-slow text-base border-2 border-[#295c3a] shadow-[0_0_0_4px_rgba(41,92,58,0.12)]"
          onClick={() => window.open("https://flutterwave.com/pay/0jk7dyty6hrz", "_blank")}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: easeInOut } },
};

export default function Home() {
  function handleFlutterwaveCheckout() {
    window.open("https://flutterwave.com/pay/0jk7dyty6hrz", "_blank");
  }

  return (
    <>
      <StickyHeader />
      {/* Herbal background: soft green gradient, subtle leaves overlay */}
      <div className="min-h-screen flex flex-col items-center justify-center font-body relative overflow-x-hidden bg-gradient-to-br from-[#e6f4ea] via-[#c8e6c9] to-[#b2dfdb]">
        {/* Decorative herbs/leaves SVG background */}
        <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-30 z-0" aria-hidden="true" focusable="false" style={{mixBlendMode:'multiply'}}>
          <defs>
            <pattern id="herbs" patternUnits="userSpaceOnUse" width="320" height="320">
              <g>
                <path d="M60 160 Q80 120 120 140 T180 120 Q200 160 240 140" stroke="#7bb274" strokeWidth="2" fill="none"/>
                <ellipse cx="100" cy="130" rx="8" ry="18" fill="#a3c585"/>
                <ellipse cx="220" cy="130" rx="8" ry="18" fill="#a3c585"/>
                <path d="M160 200 Q170 180 200 200 T260 180" stroke="#7bb274" strokeWidth="2" fill="none"/>
                <ellipse cx="180" cy="190" rx="7" ry="15" fill="#b7d7a8"/>
                <ellipse cx="240" cy="190" rx="7" ry="15" fill="#b7d7a8"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#herbs)" />
        </svg>
        {/* Hero Section */}
        <motion.main
          className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-12 bg-[#b7d7a8]/90 rounded-3xl shadow-soft mt-12 mb-8 relative z-10 border border-[#7bb274] text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          {/* Hero Text */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage leading-tight mb-2">
              Burn Fat, Stay Plant-Based:{" "}
              <br className="hidden md:block" />
              <span className="text-terracotta">
                The Ultimate Keto-Vegan Roadmap.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sage max-w-lg mb-4">
              Tired of meat-heavy keto? Struggling with carb overload on vegan?
              Discover the science-backed, plant-based way to burn fat and thrive.
            </p>
            <button
              className="mt-2 px-8 py-4 rounded-2xl bg-terracotta text-cream font-heading text-xl font-semibold shadow-soft transition hover:scale-105 focus:outline-none animate-pulse-slow border-2 border-[#295c3a] shadow-[0_0_0_4px_rgba(41,92,58,0.12)]"
              onClick={() => window.open("https://flutterwave.com/pay/0jk7dyty6hrz", "_blank")}
            >
              Get Instant Access
            </button>
          </div>
          {/* Stylized 3D Ebook Cover */}
          <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
            <div className="w-56 h-80 flex items-center justify-center relative overflow-visible">
              <img
                src="/ChatGPT Image Apr 1, 2026, 04_33_03 PM.png"
                alt="ChatGPT Generated Image"
                className="w-48 h-72 object-contain rotate-[-8deg] hover:rotate-0 transition-transform duration-500"
                loading="eager"
              />
              {/* Decorative shine overlay */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <svg width="100%" height="100%" viewBox="0 0 224 320" fill="none" className="absolute left-0 top-0 w-full h-full">
                  <defs>
                    <linearGradient id="shine" x1="0" y1="0" x2="224" y2="320" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" stopOpacity="0.25" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="224" height="320" fill="url(#shine)" />
                </svg>
              </div>
            </div>
          </div>
        </motion.main>
        {/* About the Book Section (Horizontal, condensed) */}
        <motion.section
          className="w-full max-w-4xl flex flex-col items-center my-16 bg-[#c8e6c9]/90 rounded-3xl shadow-lg border border-[#7bb274] backdrop-blur-md px-4 py-12 relative overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
        >
          {/* Decorative SVG leaves top left */}
          <svg className="absolute top-0 left-0 w-32 h-20 opacity-20 -z-1" viewBox="0 0 128 80" fill="none"><path d="M10 70 Q40 10 120 40" stroke="#7bb274" strokeWidth="6" fill="none"/><ellipse cx="30" cy="30" rx="10" ry="20" fill="#a3c585"/></svg>
          <h2 className="font-heading text-3xl md:text-4xl text-[#1a2e1a] font-bold mb-6 text-center drop-shadow-sm tracking-tight">
            <span className="inline-block border-b-4 border-terracotta pb-1">Keto Vegan Recipes – Festive & Guilt-Free! 🌱</span>
          </h2>
          <div className="flex flex-col w-full items-center">
            {/* Single book image on green background */}
            <div className="flex justify-center mb-6 w-full bg-[#b7d7a8] rounded-2xl py-6">
              <img
                src="/ChatGPT Image Apr 1, 2026, 04_24_40 PM.png"
                alt="Inside Keto Vegan Recipes Cookbook"
                className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg object-contain bg-transparent"
                loading="lazy"
              />
            </div>
            {/* Points in boxes below */}
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-stretch">
              <div className="flex-1 bg-white/90 rounded-2xl shadow-soft border border-[#b7d7a8] flex flex-col items-center justify-center px-6 py-6 min-w-[180px]">
                <span className="font-heading text-lg text-terracotta font-semibold mb-2">100+ Pages</span>
                <span className="text-sage text-center text-base">Easy, low-carb vegan recipes for the holidays</span>
              </div>
              <div className="flex-1 bg-white/90 rounded-2xl shadow-soft border border-[#b7d7a8] flex flex-col items-center justify-center px-6 py-6 min-w-[180px]">
                <span className="font-heading text-lg text-terracotta font-semibold mb-2">Festive & Delicious</span>
                <span className="text-sage text-center text-base">Stunning mains, desserts, and snacks</span>
              </div>
              <div className="flex-1 bg-white/90 rounded-2xl shadow-soft border border-[#b7d7a8] flex flex-col items-center justify-center px-6 py-6 min-w-[180px]">
                <span className="font-heading text-lg text-terracotta font-semibold mb-2">Simple & Healthy</span>
                <span className="text-sage text-center text-base">Tips for lighter, flavor-packed Christmas meals</span>
              </div>
            </div>
          </div>
        </motion.section>
        {/* What's Inside Section - Slideshow */}
        <motion.section
          className="w-full max-w-2xl flex flex-col items-center my-20 bg-[#c8e6c9]/90 rounded-3xl shadow-lg border border-[#7bb274] backdrop-blur-md px-4 py-12 relative overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-[#1a2e1a] font-bold mb-8 text-center drop-shadow-sm tracking-tight">
            <span className="inline-block border-b-4 border-terracotta pb-1">What’s Inside?</span>
          </h2>
          <Slideshow />
        </motion.section>
        {/* Benefits Grid Section */}
        <motion.section
          className="w-full max-w-4xl flex flex-col items-center my-20 bg-[#c8e6c9]/80 rounded-2xl shadow-soft border border-[#7bb274] backdrop-blur-sm text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-2xl md:text-3xl text-sage mb-6 font-semibold">
            Why You'll Love It
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center bg-cream rounded-2xl shadow-soft p-6">
              <span className="text-4xl mb-2">⏱️</span>
              <span className="font-heading text-lg text-sage font-semibold mb-1">
                15-Minute Meals
              </span>
              <span className="text-sage text-center">
                Quick, delicious recipes for busy lives.
              </span>
            </div>
            <div className="flex flex-col items-center bg-cream rounded-2xl shadow-soft p-6">
              <span className="text-4xl mb-2">🌱</span>
              <span className="font-heading text-lg text-sage font-semibold mb-1">
                No Soy
              </span>
              <span className="text-sage text-center">
                Allergy-friendly, clean plant-based eating.
              </span>
            </div>
            <div className="flex flex-col items-center bg-cream rounded-2xl shadow-soft p-6">
              <span className="text-4xl mb-2">⚖️</span>
              <span className="font-heading text-lg text-sage font-semibold mb-1">
                Macro-Balanced
              </span>
              <span className="text-sage text-center">
                Perfected ratios for fat loss and energy.
              </span>
            </div>
          </div>
        </motion.section>
        {/* About the Author Section */}
        <motion.section
          className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 my-20 bg-[#b7d7a8]/90 rounded-2xl shadow-soft p-8 border border-[#7bb274] text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="w-32 h-32 flex items-center justify-center overflow-visible">
            <img
              src="/ChatGPT Image Apr 1, 2026, 04_33_03 PM.png"
              alt="ChatGPT Generated Image"
              className="w-28 h-28 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-heading text-xl text-sage font-semibold mb-2">
              About the Author
            </h3>
            <p className="text-sage mb-2">
              Hi, I’m [Your Name], a certified plant-based nutritionist and
              passionate foodie. My mission is to help you thrive on a keto-vegan
              lifestyle—no deprivation, no confusion, just real results.
            </p>
            <p className="text-sage text-sm">
              I created this guide to make plant-based fat loss simple, delicious,
              and sustainable for everyone.
            </p>
          </div>
        </motion.section>
        {/* FAQ Section */}
        <motion.section
          className="w-full max-w-3xl mx-auto my-20 bg-[#c8e6c9]/80 rounded-2xl shadow-soft border border-[#7bb274] backdrop-blur-sm text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-2xl md:text-3xl text-sage mb-6 font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </motion.section>
        {/* Closer (Pricing) Section */}
        <motion.section
          className="w-full max-w-md mx-auto my-24 bg-[#b7d7a8]/90 rounded-3xl shadow-soft border border-[#7bb274] text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="p-8 flex flex-col items-center">
            <img
              src="/ChatGPT Image Apr 1, 2026, 04_33_03 PM.png"
              alt="ChatGPT Generated Image"
              className="w-32 h-44 object-contain mb-4"
              loading="lazy"
            />
            <h2 className="font-heading text-2xl text-sage font-semibold mb-2">
              Get the Keto-Vegan Secrets Ebook
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg text-sage line-through">$72</span>
              <span className="text-3xl font-heading text-terracotta font-bold">
                $56.99{" "}
                <span className="text-base font-normal text-sage">
                  Launch Price
                </span>
              </span>
            </div>
            <button
              className="mt-2 px-8 py-4 rounded-2xl bg-terracotta text-cream font-heading text-xl font-semibold shadow-soft transition hover:scale-105 focus:outline-none animate-pulse-slow border-2 border-[#295c3a] shadow-[0_0_0_4px_rgba(41,92,58,0.12)]"
              onClick={() => window.open("https://flutterwave.com/pay/0jk7dyty6hrz", "_blank")}
            >
              Buy Now
            </button>
          </div>
        </motion.section>
        {/* Macro Calculator Section */}
        <motion.section
          className="w-full max-w-md mx-auto my-24 bg-[#c8e6c9]/80 rounded-2xl shadow-soft border border-[#7bb274] p-8 flex flex-col items-center text-[#1a2e1a]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-xl text-sage font-semibold mb-4">
            Preview Your Keto-Vegan Macros
          </h2>
          <MacroCalculator />
        </motion.section>
      </div>
      <Script src="https://checkout.flutterwave.com/v3.js" strategy="afterInteractive" />
    </>
  );
}

function FlipCard({
  frontText,
  backText,
  color,
}: {
  frontText: string;
  backText: string;
  color: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`relative w-64 h-40 perspective cursor-pointer`}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") setFlipped((f) => !f);
      }}
      aria-label={frontText}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute w-full h-full flex items-center justify-center rounded-2xl shadow-soft bg-${color} text-white font-heading text-xl font-semibold`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </div>
        <div
          className={`absolute w-full h-full flex items-center justify-center rounded-2xl shadow-soft bg-cream text-sage font-heading text-lg font-medium rotate-y-180`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {backText}
        </div>
      </div>
    </div>
  );
}

// Note: Add rotate-y-180 and perspective utilities to Tailwind config if not present.
// Note: Add custom pulse animation to Tailwind config for animate-pulse-slow.


// Slideshow images (update with your actual public paths)
const slideshowImages = [
  "/Gemini_Generated_Image_4amuol4amuol4amu.png",
  "/Gemini_Generated_Image_as7am6as7am6as7a.png",
  "/Gemini_Generated_Image_yrh2bbyrh2bbyrh2.png",
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const delay = 3500;

  const next = () => setIndex((i) => (i + 1) % slideshowImages.length);
  const prev = () => setIndex((i) => (i - 1 + slideshowImages.length) % slideshowImages.length);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-white border-[12px] border-[#295c3a] box-border relative p-0 m-0">
        <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl" style={{boxShadow:'0 0 0 0 #295c3a'}} />
        <img
          src={slideshowImages[index]}
          alt={`What's inside slide ${index + 1}`}
          className="w-full h-full object-cover transition-all duration-700 z-0"
          loading="lazy"
        />
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-[#1a2e1a]/40 pointer-events-none rounded-2xl z-20" />
      </div>
      <div className="flex gap-4 mt-4 items-center">
        <button
          className="rounded-full bg-sage text-white w-10 h-10 flex items-center justify-center text-xl font-bold shadow-soft hover:bg-terracotta transition"
          onClick={prev}
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <div className="flex gap-2">
          {slideshowImages.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-3 h-3 rounded-full ${i === index ? 'bg-terracotta' : 'bg-sage/40'} transition`}
            />
          ))}
        </div>
        <button
          className="rounded-full bg-sage text-white w-10 h-10 flex items-center justify-center text-xl font-bold shadow-soft hover:bg-terracotta transition"
          onClick={next}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

// FAQ data and accordion component
const faqData = [
  {
    q: "Is this ebook suitable for beginners?",
    a: "Absolutely! The guide is designed for all levels, with step-by-step instructions and simple recipes.",
  },
  {
    q: "Do I need special ingredients?",
    a: "Nope! All recipes use easy-to-find, affordable ingredients.",
  },
  {
    q: "Is there a meal plan included?",
    a: "Yes, you’ll get a full 14-day meal plan and shopping list.",
  },
  {
    q: "Can I use this if I have allergies?",
    a: "Most recipes are soy-free, gluten-free, and nut-optional. Always check the ingredient notes.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, i) => (
        <div
          key={i}
          className="border border-sage rounded-xl bg-cream overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 font-heading text-sage text-lg focus:outline-none flex justify-between items-center"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <span className="ml-2 text-terracotta">
              {open === i ? "-" : "+"}
            </span>
          </button>
          <div
            className={`transition-all duration-300 px-6 ${
              open === i ? "max-h-40 py-2" : "max-h-0 py-0"
            } overflow-hidden text-sage`}
            aria-hidden={open !== i}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}

function MacroCalculator() {
  const [weight, setWeight] = React.useState(70);
  const [age, setAge] = React.useState(30);
  const [height, setHeight] = React.useState(170);
  const [gender, setGender] = React.useState("female");
  type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very";
  const [activity, setActivity] = React.useState<ActivityLevel>("moderate");
  const [goal, setGoal] = React.useState("fat-loss");

  // Calculate BMR (Mifflin-St Jeor Equation)
  const bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  // Activity multiplier
  const activityMap = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very: 1.9,
  };
  const tdee = Math.round(bmr * activityMap[activity]);

  // Goal adjustment
  let calories = tdee;
  if (goal === "fat-loss") calories = Math.round(tdee * 0.8);
  if (goal === "maintenance") calories = tdee;
  if (goal === "muscle-gain") calories = Math.round(tdee * 1.1);

  // Keto-vegan macro split (by goal)
  let macroSplit = { fat: 65, protein: 25, carbs: 10 };
  if (goal === "maintenance") macroSplit = { fat: 60, protein: 25, carbs: 15 };
  if (goal === "muscle-gain") macroSplit = { fat: 55, protein: 30, carbs: 15 };

  // Macro grams
  const fatGrams = Math.round((calories * (macroSplit.fat / 100)) / 9);
  const proteinGrams = Math.round((calories * (macroSplit.protein / 100)) / 4);
  const carbGrams = Math.round((calories * (macroSplit.carbs / 100)) / 4);

  return (
    <form className="flex flex-col gap-6 w-full max-w-md mx-auto bg-white/80 rounded-2xl shadow-soft p-6 border border-[#b7d7a8]" onSubmit={e => e.preventDefault()}>
      <h3 className="font-heading text-2xl text-center text-sage font-bold mb-2">Personalized Macro Calculator</h3>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-1 text-sage font-heading">
          Weight (kg)
          <input
            type="number"
            min={35}
            max={200}
            value={weight}
            onChange={e => setWeight(Number(e.target.value))}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sage font-heading">
          Height (cm)
          <input
            type="number"
            min={120}
            max={220}
            value={height}
            onChange={e => setHeight(Number(e.target.value))}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sage font-heading">
          Age
          <input
            type="number"
            min={14}
            max={90}
            value={age}
            onChange={e => setAge(Number(e.target.value))}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sage font-heading">
          Gender
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sage font-heading col-span-2">
          Activity Level
          <select
            value={activity}
            onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <option value="sedentary">Sedentary (little/no exercise)</option>
            <option value="light">Light (1-3 days/week)</option>
            <option value="moderate">Moderate (3-5 days/week)</option>
            <option value="active">Active (6-7 days/week)</option>
            <option value="very">Very Active (physical job, intense training)</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sage font-heading col-span-2">
          Goal
          <select
            value={goal}
            onChange={e => setGoal(e.target.value)}
            className="rounded-xl border border-sage px-4 py-2 bg-white text-sage focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <option value="fat-loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="muscle-gain">Muscle Gain</option>
          </select>
        </label>
      </div>
      <div className="mt-4 bg-[#e6f4ea] rounded-xl p-6 shadow-soft text-sage text-center border border-[#b7d7a8]">
        <span className="font-heading font-semibold text-lg block mb-2">Your Daily Targets</span>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-2 text-base">
          <span>
            <b>Calories:</b> {calories} kcal
          </span>
          <span>
            <b>Fat:</b> {fatGrams}g ({macroSplit.fat}%)
          </span>
          <span>
            <b>Protein:</b> {proteinGrams}g ({macroSplit.protein}%)
          </span>
          <span>
            <b>Carbs:</b> {carbGrams}g ({macroSplit.carbs}%)
          </span>
        </div>
        <div className="mt-2 text-xs text-sage/70">*Based on Mifflin-St Jeor BMR, activity, and keto-vegan macro guidelines.</div>
      </div>
    </form>
  );
}
