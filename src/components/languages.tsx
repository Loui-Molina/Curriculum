'use client'

import React from 'react';

interface Language {
    name: string;
    proficiency: string;
}

interface LanguagesProps {
    languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({languages}) => {
    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Languages</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {languages.map((lang, index) => (
                    <li key={index} className="text-lg">
                        <span className="font-semibold text-gray-100">{lang.name}:</span> {lang.proficiency}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Languages;