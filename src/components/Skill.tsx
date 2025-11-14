import React from 'react';

interface Skill {
  id: string;
  label: string;
  level: number;
  level_label?: string;
  logo?: string;
}

const Skills: React.FC<Skill> = ({ id, label, level, level_label }) => {
  return (
    <div className="progress" data-id={id}>
      <div className="skill">
        <span>{label}</span>
        <span className="mx-2 fst-italic">{level_label}</span>
        <i className="val">{level}%</i>
      </div>
      <div className="progress-bar-wrap bg-blue-100 dark:bg-gray-50">
        <div
          className="progress-bar bg-gray-600"
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: level + '%' }}
        />
      </div>
    </div>
  );
};

export default Skills;
