// src/pages/About.tsx
import type { Metadata } from 'next';
import {
  Settings,
  Languages,
  Frame,
  BrainCircuit,
  UserCheck,
  GraduationCap,
  CalendarDays,
} from 'lucide-react';
import Skills from '../../components/Skill';
import ScrollReveal from '../../components/motion/ScrollReveal';
import YearsExperience from '../../components/YearsExperience';

import appData from '../../data/my_data.json';

export const metadata: Metadata = {
  title: 'About | Dimas Trian Nugraha',
  description:
    'Learn more about Dimas Trian Nugraha — a Senior Odoo Developer and Software Engineer with 5+ years of experience in Python, TypeScript, Rust, and full-stack web development.',
};

export default function AboutPage() {
  const { skills, profile } = appData;
  const firstWork: number = parseInt(profile.first_yow, 10);

  return (
    <section id="about" className="about section p-4 md:mt-16">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScrollReveal delay={0}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <div className="grid md:grid-cols-2 gap-2 mb-2">
                <div className="">
                  <img
                    src="/img/Dimas Trian Nugraha.png"
                    className="rounded-[50%] max-w-[75%] m-auto"
                    alt="Profile Picture"
                  />
                </div>
                <div className="leading-8">
                  <p>
                    <strong>Name: </strong> <span>{profile.full_name}</span>
                  </p>
                  <p>
                    <strong>Role: </strong> <span>{profile.role}</span>
                  </p>
                  <p>
                    <strong>Current Role: </strong>{' '}
                    <span>{profile.current_role}</span>
                  </p>
                  <p>
                    <strong>Current Level: </strong>{' '}
                    <span>{profile.current_level}</span>
                  </p>
                  <p title="Year of Experience">
                    <strong>YoE: </strong>{' '}
                    <YearsExperience startYear={firstWork} />
                  </p>
                  <p>
                    <strong>Address: </strong>
                    <span>{profile.address}</span>
                  </p>
                </div>
              </div>

              <div className="skills-content skills-animation">
                <h5 className="text-xl uppercase font-bold underline">
                  <Languages className="inline-flex me-2" />
                  <span>Languages</span>
                </h5>
                {skills.languages.map((skill) => (
                  <Skills
                    id={skill.id}
                    label={skill.label}
                    level={skill.level}
                    level_label={skill.level_label}
                    key={skill.id}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <div className="about-me text-justify">
                <h4 className="text-xl uppercase font-bold underline mb-2">
                  <UserCheck className="inline-flex me-2" />
                  <span>About Me</span>
                </h4>
                {profile.about_me.map((paragraph, index) => (
                  <p className="text-[1rem]" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.0}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <div className="skills-content skills-animation">
                <h5 className="text-xl uppercase font-bold underline">
                  <Frame className="inline-flex me-2" />
                  <span>Frameworks | Library</span>
                </h5>
                {skills.technical_framework.map((skill) => (
                  <Skills
                    id={skill.id}
                    label={skill.label}
                    level={skill.level}
                    key={skill.id}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <div className="skills-content skills-animation">
                <h5 className="text-xl uppercase font-bold underline">
                  <Settings className="inline-flex me-2" />
                  <span>Technical Skills</span>
                </h5>
                {skills.technical_skill.map((skill) => (
                  <Skills
                    id={skill.id}
                    label={skill.label}
                    level={skill.level}
                    key={skill.id}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.0}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <div className="skills-content skills-animation">
                <h5 className="text-xl uppercase font-bold underline">
                  <BrainCircuit className="inline-flex me-2" />
                  <span>Soft Skills</span>
                </h5>
                {skills.soft_skill.map((skill) => (
                  <Skills
                    id={skill.id}
                    label={skill.label}
                    level={skill.level}
                    key={skill.id}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="shadow-xl rounded-2xl p-4 dark:bg-gray-800 h-full">
              <h5 className="text-xl uppercase font-bold underline mb-3">
                <GraduationCap className="inline-flex me-2" />
                <span>Education</span>
              </h5>
              {profile.educations.map((edu, i) => (
                <div
                  key={i}
                  className="border-l-2 border-[#004D98]/40 pl-4 py-1"
                >
                  <div className="text-xs text-[#004D98] font-medium mb-1 flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" />
                    {edu.from} — {edu.to}
                  </div>
                  <div className="font-semibold">{edu.universityName}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {edu.level} · {edu.major}
                  </div>
                  <div className="text-xs text-neutral-500">{edu.address}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
