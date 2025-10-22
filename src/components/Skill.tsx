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
        {/* <img src="/img/my-logo.png" className="me-2 inline-flex" width={15}/> */}
        {/* <Settings className="inline-flex text-sm"/> */}
        <span>{label}</span>
        <span className="mx-2 fst-italic">{level_label}</span>
        <i className="val">{level}%</i>
      </div>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
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
