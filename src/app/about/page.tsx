// src/pages/About.tsx
import {
  Settings,
  Languages,
  Frame,
  BrainCircuit,
  UserCheck,
} from 'lucide-react';
import Skills from '../../components/Skill';

import appData from '../../data/my_data.json';

export default function AboutPage() {
  const { skills, profile } = appData;
  const firstWork: number = parseInt(profile.first_yow, 10);
  const yearOfExperience: number = new Date().getFullYear() - firstWork;

  return (
    <section id="about" className="about section p-4 md:mt-16">
      <div className="container m-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="shadow-xl rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-2">
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
                  <span>{yearOfExperience}+ Years Experience</span>
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

          <div className="shadow-xl rounded-2xl p-4">
            <div className="about-me text-justify">
              <h4 className="text-xl uppercase font-bold underline mb-2">
                <UserCheck className="inline-flex me-2" />
                <span>About Me</span>
              </h4>
              {profile.about_me.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="shadow-xl rounded-2xl p-4">
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

          <div className="shadow-xl rounded-2xl p-4">
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

          <div className="shadow-xl rounded-2xl p-4">
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
        </div>
      </div>
    </section>
  );
}
