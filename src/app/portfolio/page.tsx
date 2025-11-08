'use client';
// src/pages/About.tsx
import React, { useState } from 'react';
import { X, Building2, Briefcase, CalendarDays } from 'lucide-react';
import appData from '../../data/my_data.json';
import type { Certificate } from '../../types/skills';
import type { WorkExperience } from '../../types/profile';

export default function PortfolioPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<Certificate>({
    id: '',
    title: '',
    image: '',
  });
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const certificates: Certificate[] = appData.skills.certifications;
  const work_experiences: WorkExperience[] = appData.profile.work_experiences;

  const toggleTag = (t: string) =>
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  return (
    <section id="portfolio" className="portfolio section p-6 md:mt-16">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
      </div>
      {/* Experiences */}
      <div className="space-y-8 mb-12">
        {work_experiences.map((exp, idx) => (
          <div key={idx} className="border rounded-2xl shadow-sm bg-white/10">
            <div className="p-5 border-b">
              <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-2xl bg-white/10">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.companyName}
                    </h3>
                    <div className="text-sm text-neutral-600 flex flex-wrap gap-2 items-center">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {exp.role}
                      </span>
                      <span className="mx-1">•</span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" /> {exp.from} —{' '}
                        {exp.to}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              {exp.summary && (
                <div className="mb-4">
                  <SectionHeader title="Highlights" icon={Briefcase} />
                  <ul className="grid gap-2 list-disc pl-5 text-sm md:text-base">
                    {exp.summary.map((s, i) => (
                      <li key={i} className="leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scrollable projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4">
                  <SectionHeader title="Client Projects" icon={Building2} />

                  {/* Horizontal scroller */}
                  <div className="-mx-5 px-5">
                    <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:var(--color-neutral-400)_transparent]">
                      {(exp.projects ?? []).map((p, j) => (
                        <div
                          key={j}
                          className="min-w-[280px] md:min-w-[360px] snap-start shrink-0 border rounded-2xl p-4 bg-white/10 shadow-2xl"
                        >
                          <h4 className="text-base font-semibold mb-2">
                            {p.client}
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {p.highlights.map((h, k) => (
                              <li key={k} className="leading-relaxed">
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <Tag
                                key={t}
                                text={t}
                                active={activeTags.includes(t)}
                                onClick={() => toggleTag(t)}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tiny helper text */}
                  <p className="mt-2 text-xs text-neutral-500">
                    Tip: swipe/scroll sideways to see more projects →
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-xl shadow-2xl">
              <p>{cert.title}</p>
              <button
                className="mt-2 underline text-[#FDB913] cursor-pointer"
                onClick={() => {
                  setSelectedCert(cert);
                  setShowModal(true);
                }}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            React.js, Next.js
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            Node.js, Express
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            Tailwind CSS, Bootstrap
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            MySQL, PostgreSQL
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            Odoo ERP Customization
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            Git, GitHub, CI/CD
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            <div className="font-bold">Odoo Queue Screen Management</div>
            <div>
              Tech Stack: <span className="font-bold">Odoo ERP</span>
            </div>
            <div>
              Link:{' '}
              <a
                href="https://github.com/dimastriann/odoo-queue-screen"
                target="_blank"
                className="underline font-bold"
              >
                Preview
              </a>
            </div>
            <div>
              Short Descirption:{' '}
              <span className="font-bold">
                Queue Screen Display (Odoo) for Clinic, Hospital etc.
              </span>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            <div className="font-bold">Rust REST API</div>
            <div>
              Tech Stack:{' '}
              <span className="font-bold">
                Rust, Actix Web, Diesel ORM, JWT
              </span>
            </div>
            <div>
              Link:{' '}
              <a
                href="https://github.com/dimastriann/learn-rust-jwt-redis"
                target="_blank"
                className="underline font-bold"
              >
                Preview
              </a>
            </div>
            <div>
              Short Descirption:{' '}
              <span className="font-bold">
                Rust REST API with JWT Authentication + Simple Point of sale
              </span>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            <div className="font-bold">Project Management App</div>
            <div>
              Tech Stack:{' '}
              <span className="font-bold">
                Fullstack Typescript (NestJS & ReactJS)
              </span>
            </div>
            <div>
              Link:{' '}
              <a
                href="https://github.com/dimastriann/full-stack-typescript"
                target="_blank"
                className="underline font-bold"
              >
                Preview
              </a>
            </div>
            <div>
              Short Descirption:{' '}
              <span className="font-bold">Simple Project Management App</span>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl shadow-xl">
            <div className="font-bold">Frontend Point of Sale</div>
            <div>
              Tech Stack: <span className="font-bold">NextJS</span>
            </div>
            <div>
              Link:{' '}
              <a
                href="https://github.com/dimastriann/pos-with-nextjs"
                target="_blank"
                className="underline font-bold"
              >
                Preview
              </a>
            </div>
            <div>
              Short Descirption:{' '}
              <span className="font-bold">
                Build Simple Point of Sale app with NextJS
              </span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-700 cursor-pointer"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-[#004D98] underline">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export function SectionHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-sm">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

export function Tag({
  text,
  active,
  onClick,
}: {
  text: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer select-none border transition ${
        active
          ? 'bg-black text-white border-black'
          : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70'
      }`}
    >
      {text}
    </span>
  );
}
