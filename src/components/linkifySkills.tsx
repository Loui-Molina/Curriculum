'use client';

import React from 'react';
import Link from 'next/link';

interface Skill {
    name: string;
    level: number;
}

interface LinkifySkillsProps {
    text: string;
    allSkills: Skill[];
}

const LinkifySkills: React.FC<LinkifySkillsProps> = ({text, allSkills}) => {
    const sortedSkills = [...allSkills].sort((a, b) => b.name.length - a.name.length);

    const skillNames = sortedSkills.map(s => s.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${skillNames.join('|')})\\b`, 'gi');

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    text.replace(regex, (match, skillName, offset) => {
        if (offset > lastIndex) {
            parts.push(text.substring(lastIndex, offset));
}

        const foundSkill = sortedSkills.find(s => s.name.toLowerCase() === skillName.toLowerCase());

        if (foundSkill) {
            const skillId = foundSkill.name.replace(/\s+/g, '-').toLowerCase();
            parts.push(
        <Link
                    key={`${skillName}-${offset}`}
                    href={`/#${skillId}`}
            className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
        >
            {skillName}
        </Link>
    );
        } else {
            parts.push(match);
        }

        lastIndex = offset + match.length;
        return match;
    });

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return <>{parts}</>;
};

export default LinkifySkills;