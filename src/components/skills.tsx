import React from 'react';

interface Skill {
    name: string;
    level: number;
}

interface SkillsProps {
    skills: {
        [category: string]: Skill[];
    };
}

const Skills: React.FC<SkillsProps> = ({skills}) => {
    const getLevelIndicator = (level: number) => {
        const indicators = [];
        for (let i = 0; i < 4; i++) {
            if (i < level) {
                indicators.push(<span key={i} className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-1"></span>);
            } else {
                indicators.push(<span key={i} className="inline-block w-4 h-4 bg-gray-600 rounded-full mr-1"></span>);
            }
        }
        return indicators;
    };

    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Skills</h2>
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillList.map((skill) => (
                            <div key={skill.name} id={skill.name.replace(/\s+/g, '-').toLowerCase()}
                                 className="flex items-center bg-gray-700 p-3 rounded-lg shadow-sm">
                                <span className="text-gray-300 flex-grow">{skill.name}</span>
                                <div className="flex-shrink-0 flex items-center">
                                    {getLevelIndicator(skill.level)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;