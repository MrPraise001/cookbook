"use client";
import React, { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // Auto-download the PDF after payment
    const link = document.createElement("a");
    link.href = "/Keto-Vegan-Secrets.pdf"; // Place your ebook in /public
    link.download = "Keto-Vegan-Secrets.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream font-body">
      <div className="bg-white rounded-3xl shadow-soft p-12 flex flex-col items-center">
        <h1 className="font-heading text-3xl text-sage font-bold mb-4">Payment Successful!</h1>
        <p className="text-sage mb-4">Thank you for your purchase. Your Keto-Vegan Secrets ebook is downloading now.</p>
        <a
          href="/Keto-Vegan-Secrets.pdf"
          download
          className="mt-4 px-8 py-4 rounded-2xl bg-terracotta text-cream font-heading text-xl font-semibold shadow-soft transition hover:scale-105 focus:outline-none"
        >
          Download Again
        </a>
      </div>
    </div>
  );
}
