'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Skill {
  id: string;
  label: string;
  level: number;
  level_label?: string;
  logo?: string;
}

const Skills: React.FC<Skill> = ({ id, label, level, level_label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="progress" data-id={id} ref={ref}>
      <div className="skill">
        <span>{label}</span>
        {level_label && <span className="mx-2 italic">{level_label}</span>}
        <span className="float-right text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="progress-bar-wrap bg-blue-100 dark:bg-neutral-900">
        <div
          className="progress-bar bg-[#004D98] dark:bg-white"
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: isInView ? `${level}%` : '0%',
            transition: isInView ? 'width 0.9s ease-out' : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default Skills;
