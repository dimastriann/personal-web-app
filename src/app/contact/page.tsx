'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import appData from '../../data/my_data.json';
import ScrollReveal from '../../components/motion/ScrollReveal';
import {
  staggerContainer,
  staggerItem,
} from '../../components/motion/variants';

type FormState = { name: string; email: string; subject: string; message: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const { contacts } = appData;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: 'Portfolio Contact Form',
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className={inputClass}
              />

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-300 p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 dark:bg-red-900/30 dark:text-red-300 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 text-white bg-[#004D98] font-semibold py-2 rounded hover:bg-blue-500 transition dark:bg-gray-950 hover:dark:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
