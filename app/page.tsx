"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/beranda");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      <motion.div
        key="entrance"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -20 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Selamat Datang 
          </h1>
          <p className="text-gray-500">Di SIPRES Tutorial UPI</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
