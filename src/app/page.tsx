'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, staggerItem } from '../components/motion/variants';

const roles = [
  'Odoo Developer',
  'Software Engineer',
  'Rust Developer',
  'Full Stack Developer',
  'AI Enthusiast',
];

export default function HomePage() {
  const tags = [
    { label: 'Odoo ERP', cls: 'bg-blue-100 text-blue-800' },
    { label: 'Python', cls: 'bg-green-100 text-green-800' },
    { label: 'Backend', cls: 'bg-purple-100 text-purple-800' },
    { label: 'Frontend', cls: 'bg-pink-100 text-pink-800' },
    { label: 'Full Stack', cls: 'bg-yellow-100 text-yellow-800' },
    { label: 'ReactJS', cls: 'bg-green-200 text-yellow-800' },
    { label: 'OWL (Odoo)', cls: 'bg-blue-200 text-yellow-800' },
    { label: 'SQL', cls: 'bg-cyan-100 text-yellow-800' },
    { label: 'REST API', cls: 'bg-teal-100 text-yellow-800' },
  ];

  const leftLogos = [
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'NodeJS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    },
  ];

  const rightLogos = [
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Rust',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    },
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
  ];

  // Typing effect state
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, charIndex + 1);
          setDisplayText(next);
          if (charIndex + 1 === current.length) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, 1800);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          const next = current.slice(0, charIndex - 1);
          setDisplayText(next);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      isDeleting ? 50 : 90,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, isPaused]);

  return (
    <section className="relative md:mt-16">
      {/* Floating left logos */}
      <motion.div
        className="absolute left-5 top-1/4 flex flex-col gap-6 max-lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {leftLogos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="w-14 h-14 hover:opacity-100 transition-opacity duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* Floating right logos */}
      <motion.div
        className="absolute right-5 top-1/4 flex flex-col gap-6 max-lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {rightLogos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="w-14 h-14 hover:opacity-100 transition-opacity duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.0 + i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          className="rounded-md shadow-2xl bg-white md:w-[60%] p-10 relative z-10 dark:bg-gray-800"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="uppercase text-center mb-4">
            <motion.h2 variants={staggerItem} className="text-2xl">
              Hi There
            </motion.h2>
            <motion.h1 variants={staggerItem} className="text-5xl">
              I am
            </motion.h1>
            <motion.h1 variants={staggerItem} className="text-4xl font-bold">
              Dimas Trian Nugraha
            </motion.h1>
            <motion.div
              variants={staggerItem}
              className="text-2xl text-gray-600 dark:text-gray-50 min-h-10 flex items-center justify-center gap-0.5"
            >
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-current animate-pulse" />
            </motion.div>
          </div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col xl:grid xl:grid-cols-2 items-center"
          >
            <div className="text-left space-y-4">
              <p className="text-black dark:text-white text-justify">
                I specialize in building high-performance web applications with
                modern JavaScript and Python frameworks, especially in Odoo ERP.
                I enjoy solving complex problems, designing user-friendly
                interfaces, and delivering efficient, scalable software
                solutions.
              </p>
              <p className="text-gray-700 text-justify dark:text-white">
                With a strong foundation in full-stack development and a passion
                for clean code, I strive to create software that not only works
                but excels in performance and maintainability.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className={`rounded-full px-3 py-1 text-sm font-medium shadow-sm ${t.cls}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="programmer"
                className="w-72 h-72 object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
