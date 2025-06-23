import React from 'react';
import LinkifySkills from "@/components/linkifySkills";

interface ExperienceItemProps {
    title: string;
    company: string;
    dates: string;
    description: string[];
    allSkills: { name: string; level: number }[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({title, company, dates, description, allSkills}) => {
    return (
        <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 experience-item">
            <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
            <p className="text-purple-500 text-lg mb-1">{company} - {dates}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {description.map((point, index) => (
                    <li key={index} className="pl-2">
                        <LinkifySkills text={point} allSkills={allSkills}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface ExperienceProps {
    experience: {
        title: string;
        company: string;
        dates: string;
        description: string[];
    }[];
    allSkills: { name: string; level: number }[];
}

const Experience: React.FC<ExperienceProps> = ({experience, allSkills}) => {
    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Experience</h2>
            <div className="space-y-6">
                {experience.map((exp, index) => (
                    <ExperienceItem key={index} {...exp}
                                    allSkills={allSkills}/>
                ))}
            </div>
        </section>
    );
};

export default Experience;