"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Beranda() {
  const [tripType, setTripType] = useState("oneway");

  return (
     <main className="relative w-full min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
        {/* Navbar */}
        <Header />
    </main>
  );
}