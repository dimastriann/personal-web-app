import React from 'react';

interface Skill {
    id: string,
    label: string,
    level: number
}

const Skills: React.FC<Skill> = ({id, label, level}) => {
    return (
        <div className="progress" data-id={id}>
            <span className="skill"><span>{label}</span> <i className="val">{level}%</i></span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} style={{width: level + "%"}}/>
            </div>
        </div>
    )
}

export default Skills;