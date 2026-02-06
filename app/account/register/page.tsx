'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Mail, User, Users, BookOpen, Briefcase } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nim: '',
    nama: '',
    email: '',
    fakultas: '',
    programStudi: '',
    jenisKelamin: '',
    kategori: '',
    dosenPengampu: '',
    password: '',
    rePassword: '',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        className="w-full h-screen bg-white flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section - Form */}
        <motion.div
          className="w-full lg:w-1/2 overflow-y-auto p-8 lg:p-12 flex flex-col justify-center relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.button
            className="absolute top-6 left-6 lg:top-8 lg:left-8 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          {/* Title */}
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center lg:text-left pt-12 lg:pt-0"
            variants={itemVariants}
          >
            Daftar Akun
          </motion.h1>

          {/* NIM Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="nim"
                placeholder="NIM"
                value={formData.nim}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Nama Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="nama"
                placeholder="Nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Fakultas & Program Studi Row */}
          <motion.div className="grid grid-cols-2 gap-4 mb-6" variants={itemVariants}>
            <div className="relative">
              <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="fakultas"
                value={formData.fakultas}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600 transition appearance-none cursor-pointer"
              >
                <option value="">Fakultas</option>
                <option value="fip">FIP</option>
                <option value="fpbs">FPBS</option>
                <option value="fpmipa">FPMIPA</option>
              </select>
            </div>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="programStudi"
                value={formData.programStudi}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600 transition appearance-none cursor-pointer"
              >
                <option value="">Program Studi</option>
                <option value="pend-ips">Pend. IPS</option>
                <option value="pend-matematika">Pend. Matematika</option>
                <option value="pend-bahasa">Pend. Bahasa</option>
              </select>
            </div>
          </motion.div>

          {/* Jenis Kelamin & Kategori Row */}
          <motion.div className="grid grid-cols-2 gap-8 mb-6" variants={itemVariants}>
            {/* Jenis Kelamin */}
            <div>
              <p className="text-gray-700 font-medium mb-3">Jenis Kelamin</p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value="pria"
                    checked={formData.jenisKelamin === 'pria'}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 accent-teal-600 cursor-pointer"
                  />
                  <span className="text-gray-700">Pria</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value="wanita"
                    checked={formData.jenisKelamin === 'wanita'}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 accent-teal-600 cursor-pointer"
                  />
                  <span className="text-gray-700">Wanita</span>
                </label>
              </div>
            </div>

            {/* Kategori */}
            <div>
              <p className="text-gray-700 font-medium mb-3">Kategori</p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="kategori"
                    value="pai"
                    checked={formData.kategori === 'pai'}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 accent-teal-600 cursor-pointer"
                  />
                  <span className="text-gray-700">PAI</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="kategori"
                    value="spai"
                    checked={formData.kategori === 'spai'}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 accent-teal-600 cursor-pointer"
                  />
                  <span className="text-gray-700">SPAI</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Dosen Pengampu Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <p className="text-gray-700 font-medium mb-3">Dosen Pengampu</p>
            <div className="flex gap-4">
              <input
                type="text"
                name="dosenPengampu1"
                placeholder="Nama Dosen 1"
                className="flex-1 px-4 py-3 rounded-lg border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition"
              />
              <input
                type="text"
                name="dosenPengampu2"
                placeholder="Nama Dosen 2"
                className="flex-1 px-4 py-3 rounded-lg border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Re-Password Input */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="rePassword"
                placeholder="Re-Password"
                value={formData.rePassword}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
              />
            </div>
          </motion.div>

          {/* Register Button */}
          <motion.button
            className="w-full md:w-auto md:mx-auto block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-12 rounded-full transition shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register
          </motion.button>
        </motion.div>

        {/* Right Section - Illustration */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Gradient Background */}
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
                  id="grad2"
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
                fill="url(#grad2)"
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-2">SIPRES</h2>
              <p className="text-lg text-white italic font-light">Tutorial UPI</p>
            </motion.div>

            {/* Illustration - Female Character with hijab */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                {/* Character with hijab */}
                <svg
                  width="200"
                  height="280"
                  viewBox="0 0 200 280"
                  className="drop-shadow-lg"
                >
                  {/* Head - with hijab */}
                  <circle cx="100" cy="60" r="30" fill="#fdbcb4" />
                  {/* Hijab */}
                  <ellipse cx="100" cy="50" rx="35" ry="28" fill="#2c2c2c" />
                  {/* Eyes with glasses */}
                  <circle cx="85" cy="55" r="8" fill="#f4d35e" strokeWidth="2" stroke="#8b4513" />
                  <circle cx="115" cy="55" r="8" fill="#f4d35e" strokeWidth="2" stroke="#8b4513" />
                  <circle cx="85" cy="55" r="4" fill="#8b4513" />
                  <circle cx="115" cy="55" r="4" fill="#8b4513" />
                  {/* Bridge */}
                  <line x1="93" y1="55" x2="107" y2="55" stroke="#8b4513" strokeWidth="2" />
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
                  {/* Long Skirt */}
                  <path d="M 80 180 L 75 240 L 90 240 L 95 180 Z" fill="#4a4a4a" />
                  <path d="M 120 180 L 125 240 L 110 240 L 105 180 Z" fill="#4a4a4a" />
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

            {/* Decorative wavy shape bottom right */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0,100 Q 50,50 100,100 T 200,100 L 200,200 L 0,200 Z"
                  fill="rgba(255,255,255,0.2)"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
