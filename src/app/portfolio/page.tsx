'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Building2,
  Briefcase,
  CalendarDays,
  Filter,
  ExternalLink,
} from 'lucide-react';
import appData from '../../data/my_data.json';
import type { Certificate } from '../../types/skills';
import type { WorkExperience, Project } from '../../types/profile';
import { Tag } from '../../components/Tag';
import { SectionHeader } from '../../components/SectionHeader';
import ScrollReveal from '../../components/motion/ScrollReveal';

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

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    work_experiences.forEach((exp) =>
      exp.projects?.forEach((p) => p.tags.forEach((t) => tags.add(t))),
    );
    return Array.from(tags).sort();
  }, [work_experiences]);

  const projectMatchesTags = (p: Project) =>
    activeTags.length === 0 || activeTags.some((t) => p.tags.includes(t));

  const myProjects = [
    {
      title: 'MobaXTauri',
      tech: 'Rust, Tauri v2, TypeScript, Xterm.js',
      github: 'https://github.com/dimastriann/mobaxtauri',
      description:
        'Open-source cross-platform SSH & terminal client — alternative to MobaXterm.',
    },
    {
      title: 'Odoo ERP MCP',
      tech: 'Rust, Odoo API, JSONRPC',
      github: 'https://github.com/dimastriann/odoo-erp-mcp',
      description:
        'Connects LLM to Odoo ERP via MCP server for AI-assisted ERP operations.',
    },
    {
      title: 'AI Workspace',
      tech: 'Python, FastAPI',
      github: 'https://github.com/dimastriann/ai-workspace',
      description:
        'Fullstack app combining conversational AI and document understanding.',
    },
    {
      title: 'Telmed Flow',
      tech: 'Python, OWL, Flutter, Odoo ERP, FastAPI',
      github: 'https://github.com/dimastriann/telmed_flow',
      description:
        'Telemedicine solution with Flutter mobile app + Odoo ERP backend.',
    },
    {
      title: 'FinanceFlow',
      tech: 'TypeScript, React Native, Drizzle ORM',
      github: 'https://github.com/dimastriann/FinanceFlow',
      description:
        'Personal finance tracker with AI integration and mobile-first design.',
    },
    {
      title: 'Project Management App',
      tech: 'TypeScript, NestJS, GraphQL, React',
      github: 'https://github.com/dimastriann/full-stack-typescript',
      description:
        'Collaborative project management workspace built with full-stack TypeScript.',
    },
    {
      title: 'Django E-Commerce',
      tech: 'Python, Django, TailwindCSS, PostgreSQL',
      github: 'https://github.com/dimastriann/django_ecommerce',
      description:
        'Simple e-commerce platform with Django backend and Tailwind frontend.',
    },
    {
      title: 'Odoo Queue Screen',
      tech: 'Python, Odoo ERP, WebSocket',
      github: 'https://github.com/dimastriann/odoo-queue-screen',
      description:
        'Queue display screen management for clinics and hospitals using Odoo.',
    },
    {
      title: 'Rust REST API',
      tech: 'Rust, Actix Web, Diesel ORM, JWT',
      github: 'https://github.com/dimastriann/learn-rust-jwt-redis',
      description:
        'REST API with JWT authentication and simple Point of Sale built in Rust.',
    },
    {
      title: 'Frontend Point of Sale',
      tech: 'TypeScript, Next.js',
      github: 'https://github.com/dimastriann/pos-with-nextjs',
      description: 'Clean and minimal Point of Sale app built with Next.js.',
    },
  ];

  const toolsGrid = [
    'Python, TypeScript, Rust',
    'Node.js, Express, React.js, Next.js',
    'Tailwind CSS, Bootstrap',
    'MySQL, PostgreSQL',
    'Odoo ERP Customization',
    'Git, GitHub, CI/CD',
    'Docker, Linux Environment',
    'Locust, Playwright',
    'VS Code, PyCharm, RustRover, Cursor',
  ];

  return (
    <section
      id="portfolio"
      className="portfolio section p-6 max-md:p-3 md:mt-16"
    >
      {/* Work Experience */}
      <ScrollReveal>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
        </div>
      </ScrollReveal>

      {/* Global tag filter bar */}
      <ScrollReveal delay={0.05}>
        <div className="mb-8 p-4 rounded-2xl border dark:border-neutral-700 bg-white/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Filter projects by technology
            </span>
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="text-xs text-[#004D98] hover:underline ml-2 cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Tag
                key={tag}
                text={tag}
                active={activeTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative pl-8 border-l-2 border-[#004D98]/30 space-y-10 mb-12">
        {work_experiences.map((exp, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15}>
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[2.65rem] top-5 w-4 h-4 rounded-full bg-[#004D98] border-4 border-white dark:border-gray-900 shadow-sm" />

              {/* Date badge */}
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-[#004D98]">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>
                  {exp.from} — {exp.to}
                </span>
                {exp.to === 'Present' && (
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 font-semibold">
                    Current
                  </span>
                )}
              </div>

              {/* Company card */}
              <div className="border rounded-2xl shadow-sm bg-white dark:bg-gray-800">
                <div className="p-5 border-b dark:border-neutral-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {exp.companyName}
                      </h3>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.role}
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

                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-4">
                      <SectionHeader title="Client Projects" icon={Building2} />
                      <AnimatePresence mode="popLayout">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                          {exp.projects.filter(projectMatchesTags).map((p) => (
                            <motion.div
                              key={p.client}
                              layout
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.2 }}
                              className="border rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-900 shadow-sm"
                            >
                              <h4 className="text-base font-semibold mb-2">
                                {p.client}
                              </h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                                {p.highlights.map((h, k) => (
                                  <li key={k} className="leading-relaxed">
                                    {h}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                  <Tag
                                    key={t}
                                    text={t}
                                    active={activeTags.includes(t)}
                                    onClick={() => toggleTag(t)}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </AnimatePresence>
                      {exp.projects.filter(projectMatchesTags).length === 0 && (
                        <p className="text-sm text-gray-400 italic py-2">
                          No projects match the current filter.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Certifications */}
      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -3,
                  boxShadow: '0 12px 32px rgba(0,77,152,0.12)',
                }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-transparent hover:border-[#004D98]/20 cursor-pointer"
                onClick={() => {
                  setSelectedCert(cert);
                  setShowModal(true);
                }}
              >
                <p className="font-medium text-sm">{cert.title}</p>
                <p className="mt-2 text-xs text-[#004D98] flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> View Certificate
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Tools & Technologies */}
      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolsGrid.map((tool, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 text-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* My Projects */}
      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {myProjects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -3,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col gap-2"
              >
                <div className="font-semibold text-sm">{proj.title}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {proj.tech}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300 flex-1">
                  {proj.description}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  className="mt-1 inline-flex items-center gap-1 text-xs text-[#004D98] hover:underline font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-4 max-w-3xl w-full relative mx-4"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 cursor-pointer hover:text-gray-900"
                onClick={() => setShowModal(false)}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
