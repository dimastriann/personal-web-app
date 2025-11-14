'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Bug, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div
      id="not-found"
      className="relative min-h-screen overflow-hidden bg-linear-to-b dark:bg-neutral-900 text-neutral-100"
    >
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-sm text-neutral-400"
        >
          <Compass className="h-4 w-4" />
          <span>Oops… you’ve wandered off the map</span>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-7xl font-extrabold leading-none tracking-tight md:text-8xl"
              >
                404
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-3 text-lg text-neutral-300"
              >
                The page you’re looking for doesn’t exist or was moved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/15"
                >
                  <Home className="h-4 w-4" />
                  Go home
                </Link>
                <Link
                  href="mailto:dimastrian00@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium hover:bg-white/10"
                >
                  <Bug className="h-4 w-4" />
                  Report issue
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 md:order-2"
            >
              <div className="relative mx-auto aspect-4/3 w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20" />
                <div className="absolute inset-0 rounded-3xl border border-white/10" />
                <div className="absolute inset-4 grid grid-cols-6 grid-rows-6 gap-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.25, scaleY: 0.7 }}
                      animate={{
                        opacity: [0.25, 1, 0.25],
                        scaleY: [0.7, 1.05, 0.7],
                      }}
                      transition={{
                        duration: 2 + (i % 5) * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: (i % 6) * 0.05,
                      }}
                      className="rounded-md bg-white/20"
                    />
                  ))}
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-xl" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
