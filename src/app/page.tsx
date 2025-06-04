import React from 'react';
import {cvData} from '@/lib/cvData';
import Link from 'next/link';
import FloatingDownloadButton from "@/components/floatingDownloadButton";
import Header from "@/components/header";
import Summary from "@/components/summary";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Languages from "@/components/languages";

const Home: React.FC = () => {

    const allSkillsFlat = Object.values(cvData.skills).flat();

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 relative">
            <FloatingDownloadButton/>
            <div className="container mx-auto max-w-4xl bg-gray-900 p-6 rounded-lg shadow-xl">
                <Header name={cvData.name} title={cvData.title} contact={cvData.contact}/>
                <Summary summary={cvData.summary} allSkills={allSkillsFlat}/>
                <Experience experience={cvData.experience} allSkills={allSkillsFlat}/>
                <Skills skills={cvData.skills}/>
                <Education education={cvData.education}/>
                <Languages languages={cvData.languages}/>
            </div>
        </div>
    );
};

export default Home;