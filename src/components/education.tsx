import React from 'react';

interface EducationItem {
    degree: string;
    university: string;
    dates: string;
}

interface EducationProps {
    education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({education}) => {
    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Education & Professional Development</h2>
            <div className="space-y-6">
                {education.map((item, index) => (
                    <div key={index} className="experience-item">
                        <h3 className="text-xl font-semibold text-gray-100">{item.degree}</h3>
                        <p className="text-purple-500 text-lg">{item.university}</p>
                        <p className="text-gray-400">{item.dates}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
