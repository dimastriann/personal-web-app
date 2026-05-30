'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import appData from '../../data/my_data.json';
import ScrollReveal from '../../components/motion/ScrollReveal';
import {
  staggerContainer,
  staggerItem,
} from '../../components/motion/variants';

export default function ContactPage() {
  const { contacts } = appData;

  const inputClass =
    'p-3 rounded bg-white/10 placeholder:text-gray-400 border dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#004D98]/50 focus:border-[#004D98] transition';

  return (
    <>
      <section className="min-h-screen px-6 pb-16 pt-4 text-center md:mt-16">
        <ScrollReveal>
          <h1 className="m-4 text-3xl">Get In Touch With Me</h1>
        </ScrollReveal>

        {/* Contact Info */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="p-2">
              <motion.a
                href={contacts.telegram.value}
                target="_blank"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-3 flex items-center gap-2 justify-center bg-white rounded-xl shadow-2xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 hover:dark:bg-gray-700 transition-colors"
              >
                <img
                  src="/img/telegram.png"
                  alt="Telegram"
                  className="w-5 h-5"
                />
                <span title={contacts.telegram.label}>Dimas Trian</span>
              </motion.a>
            </motion.div>

            <motion.div variants={staggerItem} className="p-2">
              <motion.a
                href={contacts.email.value}
                target="_blank"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-3 flex items-center gap-2 justify-center bg-white rounded-xl shadow-2xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 hover:dark:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span title={contacts.email.label}>{contacts.email.value}</span>
              </motion.a>
            </motion.div>

            <motion.div variants={staggerItem} className="p-2">
              <motion.a
                href={contacts.linkedin.value}
                target="_blank"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-3 flex items-center gap-2 justify-center bg-white rounded-xl shadow-2xl hover:bg-blue-400 hover:text-white dark:bg-gray-800 hover:dark:bg-gray-700 transition-colors"
              >
                <img
                  src="/img/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                <span title={contacts.linkedin.label}>Dimas Trian Nugraha</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={0.2}>
          <div className="shadow-2xl max-w-2xl mx-auto p-4 rounded-2xl dark:bg-gray-800">
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={inputClass}
              />
              <input type="text" placeholder="Subject" className={inputClass} />
              <textarea
                rows={4}
                placeholder="Your Message"
                className={inputClass}
              />
              <button
                type="submit"
                disabled={true}
                className="mt-4 text-white bg-[#004D98] font-semibold py-2 rounded hover:bg-blue-500 transition dark:bg-gray-950 hover:dark:bg-gray-900 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
