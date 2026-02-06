"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const router = useRouter();
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const [dropdownPinned, setDropdownPinned] = useState(false); // new: pin state

  // const [dropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  // const [dropdownPinnedDesktop, setDropdownPinnedDesktop] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsTop(currentScroll < 80);

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        // klik di luar -> reset
        setDropdownPinned(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);



  return (
  <nav
    className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 md:px-8 py-1.5 md:py-2 z-50 text-white transition-all duration-500 select-none ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    } ${
      isTop
        ? "bg-transparent"
        : "shadow-md backdrop-blur-none"
    }`}
    style={{
      background: isTop
        ? "transparent"
        : "linear-gradient(90deg, #7B1113)",
    }}
  >
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="relative w-[85px] h-[85px] flex-shrink-0 -my-1">
        <Image
          src="/icon.png"
          alt="Turmet Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="font-bold text-lg md:text-xl leading-tight">
        Tutorial PAI-SPAI UPI
      </div>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 font-medium relative text-sm">
      <li className="hover:text-red-300 cursor-pointer"> <Link href="/beranda">Beranda</Link> </li>

      {/* Pekanan */}
      <li
        className="relative cursor-pointer flex items-center gap-1"
        onMouseEnter={() => {
          setDropdownOpen(true);
        }}
        onMouseLeave={() => {
          if (!dropdownPinned) setDropdownOpen(false);         // hanya sembunyikan kalau tidak dipin
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            // jika belum dipin -> pin (buka dan tahan). kalau sudah dipin -> navigasi.
            if (!dropdownPinned) {
              setDropdownOpen(true);
              setDropdownPinned(true);
            }
          }}
          className="flex items-center gap-1 hover:text-red-300 focus:outline-none"
        >
          Pekanan <ChevronDown size={14} />
        </button>

        {dropdownOpen && (
          <ul
            className="absolute top-full left-0 mt-2 w-44 text-white rounded-lg shadow-lg py-2 z-20"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(180deg, #7B1113 0%, #B71C1C 80%)",
            }}
          >
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
              <Link href="/tutorial-pai">Tutorial PAI</Link>
            </li>
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
              <Link href="/tutorial-spai">Tutorial SPAI</Link>
            </li>
          </ul>
        )}
      </li>

          
      <li className="hover:text-red-300 cursor-pointer">Media Sosial</li>
      {/* <li className="hover:text-red-300 cursor-pointer">Tentang Kami</li> */}
      {/* <li> <Link href="/tentang-kami">Tentang Kami</Link> </li> */}
      <li>
        <Link href="/about_page" className="hover:text-red-300 cursor-pointer">
          Tentang Kami
        </Link>
      </li>
      <li className="hover:text-red-300 cursor-pointer">FAQ</li>
    </ul>

    {/* Mobile Menu Button */}
    <div
      className="md:hidden cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={26} /> : <Menu size={26} />}
    </div>

    {/* MOBILE DROPDOWN */}
    {menuOpen && (
      <div
        className="absolute top-full left-0 w-full text-white flex flex-col md:hidden border-t border-white/20"
        style={{
          background: "linear-gradient(90deg, #7B1113 0%, #B71C1C 80%)",
        }}
      >
        <ul className="w-full list-none font-medium divide-y divide-white/20 text-left">

          {/* Beranda */}
          <li className="py-3 px-5 hover:text-red-300 cursor-pointer">
            <Link href="/beranda" onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>
          </li>

          {/* Pekanan (Dropdown) */}
          <li
            className="py-3 px-5 flex justify-between items-center hover:text-red-300 cursor-pointer select-none"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpenMobile(!dropdownOpenMobile);
            }}
          >
            <span>Pekanan</span>
            <span className="text-lg font-bold">{dropdownOpenMobile ? "-" : "+"}</span>
          </li>

          {/* Submenu */}
          {dropdownOpenMobile && (
            <ul className="divide-y divide-white/10 text-sm animate-fadeIn">
              <li className="py-2 px-8 hover:text-red-200 cursor-pointer">
                <Link href="tutorial-pai" onClick={() => setMenuOpen(false)}>
                  Tutorial PAI
                </Link>
              </li>
              <li className="py-2 px-8 hover:text-red-200 cursor-pointer">
                <Link href="tutorial-spai" onClick={() => setMenuOpen(false)}>
                  Tutorial SPAI
                </Link>
              </li>
            </ul>
          )}

          {/*  Media Sosial */}
          <li className="py-3 px-5 hover:text-red-300 cursor-pointer">
            Media Sosial
          </li>

          {/* Tentang Kami */}
          <li className="py-3 px-5 hover:text-red-300 cursor-pointer">
            <Link href="/about_page" onClick={() => setMenuOpen(false)}>
              Tentang Kami
            </Link>
          </li>

          {/* FAQ */}
          <li className="py-3 px-5 hover:text-red-300 cursor-pointer">
            FAQ
          </li>
        </ul>
      </div>
    )}
  </nav>
  );
}