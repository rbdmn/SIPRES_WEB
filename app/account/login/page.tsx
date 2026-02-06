'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, User, X } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden flex"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <motion.div
          className="hidden md:flex md:w-1/2 relative overflow-hidden"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Gradient Background with Curved Shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-orange-600">
            {/* Decorative curved shapes */}
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 400 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="grad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{
                      stopColor: '#f97316',
                      stopOpacity: 0.8,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: '#ec4899',
                      stopOpacity: 0.9,
                    }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 0,200 Q 100,150 150,250 T 300,400 L 400,0 Z"
                fill="url(#grad1)"
                opacity="0.6"
              />
              <path
                d="M 0,500 Q 100,450 150,550 T 300,700 L 400,800 L 0,800 Z"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-8 py-12">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">SIPRES</h1>
              <p className="text-lg text-white italic font-light">Tutorial UPI</p>
            </motion.div>

            {/* Illustration - Character with badge */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                {/* Character placeholder with styled elements */}
                <svg
                  width="200"
                  height="280"
                  viewBox="0 0 200 280"
                  className="drop-shadow-lg"
                >
                  {/* Head */}
                  <circle cx="100" cy="60" r="30" fill="#fdbcb4" />
                  {/* Eyes */}
                  <circle cx="90" cy="55" r="5" fill="#8b4513" />
                  <circle cx="110" cy="55" r="5" fill="#8b4513" />
                  {/* Smile */}
                  <path d="M 90 70 Q 100 75 110 70" stroke="#8b4513" strokeWidth="2" fill="none" />
                  {/* Body - Red jacket */}
                  <path
                    d="M 100 90 L 75 140 L 75 180 L 125 180 L 125 140 Z"
                    fill="#c41e3a"
                  />
                  {/* Arms */}
                  <rect x="60" y="100" width="15" height="50" fill="#fdbcb4" rx="7" />
                  <rect x="125" y="100" width="15" height="50" fill="#fdbcb4" rx="7" />
                  {/* Pants */}
                  <path d="M 80 180 L 75 240 L 90 240 L 95 180 Z" fill="#2c2c2c" />
                  <path d="M 120 180 L 125 240 L 110 240 L 105 180 Z" fill="#2c2c2c" />
                  {/* Shoes */}
                  <ellipse cx="82" cy="250" rx="12" ry="8" fill="#f59e0b" />
                  <ellipse cx="118" cy="250" rx="12" ry="8" fill="#f59e0b" />
                </svg>

                {/* Badge held by character */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative shapes */}
            <div className="absolute top-8 right-12 w-6 h-6 bg-yellow-300 transform rotate-45" />
            <div className="absolute bottom-20 left-8 w-4 h-4 bg-yellow-300 transform rotate-45" />
            <div className="absolute top-1/2 right-4 w-3 h-3 bg-yellow-300 transform rotate-45" />
          </div>
        </motion.div>

        {/* Right Section - Login Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Close button for mobile */}
          <motion.button
            className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6 text-red-600" />
          </motion.button>

          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left"
            variants={itemVariants}
          >
            Masuk
          </motion.h2>

          {/* NIM Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="NIM"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Remember & Forgot Password */}
          <motion.div
            className="flex items-center justify-between mb-8"
            variants={itemVariants}
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-600 accent-teal-600 cursor-pointer"
              />
              <span className="text-gray-700 font-medium">Ingat Saya</span>
            </label>
            <a
              href="#"
              className="text-teal-600 hover:text-teal-700 font-medium transition"
            >
              Lupa Password?
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 w-full"
            variants={itemVariants}
          >
            <motion.button
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
            <motion.button
              className="flex-1 border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-full transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register
            </motion.button>
          </motion.div>

          {/* Mobile illustration hint */}
          <motion.div
            className="md:hidden mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-500 text-sm">SIPRES Tutorial UPI</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
