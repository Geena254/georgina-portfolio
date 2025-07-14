import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificates = [
  {
    title: 'Full Stack Web Development',
    organization: 'ALX Africa',
    date: '2023-2024',
    image: '/certificates/17-short-specializations-certificate-georgina-kimani (1).png',
    description: 'Completed the full stack software engineering certification',
    link: '#'
  },
  {
    title: 'Software Engineering Job Simulation',
    organization: 'Forage and JP Morgan Chase & Co',
    date: '2025',
    image: '/certificates/jp-morgan-cert.jpg',
    description: 'Completed the Software Engineering Job Simulation certification',
    link: '#'
  },
  {
    title: 'AI For Developers',
    organization: 'ALX Africa',
    date: '2025',
    image: '/certificates/138-ai-for-developers-i-certificate-georgina-kimani.png',
    description: 'Completed the AI for developers certification',
    link: '#'
  },
  {
    title: 'ALX AiSK',
    organization: 'ALX Africa',
    date: '2025',
    image: '/certificates/113-alx-ai-starter-kit-certificate-georgina-kimani.png',
    description: 'Completed the AI Starter Kit certification',
    link: '#'
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      setSelectedCert(null);
      setModalOpen(false);
    }
  };

  return (
    <section className="py-5 bg-black relative" id="certificates">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Certifications
          </span>
          <span className="ml-2 text-white">🎓</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black rounded-lg border border-purple-500/10 hover:border-purple-500/20 transition-all duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.organization}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <p className="text-gray-300 mb-4">{cert.description}</p>
                <button
                  onClick={() => {
                    setSelectedCert(cert.image);
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition-all duration-200"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    {modalOpen && selectedCert && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center modal-overlay"
        onClick={handleOutsideClick}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-black rounded-lg p-6"
        >
          <div className="w-full h-[80vh] max-w-[90vw] max-h-[80vh]">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    )}
    </section>
  );
};

export default Certificates;
