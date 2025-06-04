import React from 'react';
import LinkifySkills from "@/components/linkifySkills";

interface SummaryProps {
    summary: string;
    allSkills: { name: string; level: number }[];
}

const Summary: React.FC<SummaryProps> = ({ summary, allSkills }) => {
    return (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-500 mb-4">Summary</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
                <LinkifySkills text={summary} allSkills={allSkills} />
            </p>
        </section>
    );
};

export default Summary;