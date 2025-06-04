import React from 'react';

interface EducationProps {
    education: {
        degree: string;
        university: string;
        dates: string;
    };
}

const Education: React.FC<EducationProps> = ({education}) => {
    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Education</h2>
            <div className="text-gray-300">
                <h3 className="text-xl font-semibold text-gray-100">{education.degree}</h3>
                <p className="text-purple-500 text-lg">{education.university}</p>
                <p className="text-gray-400">{education.dates}</p>
            </div>
        </section>
    );
};

export default Education;