'use client'

declare global {
    interface Window {
        html2pdf: any; // Declaring html2pdf as any to bypass TypeScript type checking
    }
}

import React from 'react';

const generateSkillId = (skillName: string) => `skill-${skillName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

// Main App component that renders the entire CV
const App = () => {
    // Define the CV data directly within the component for a static CV
    const cvData = {
        name: "AXEL LOUI MOLINA",
        title: "Java/Kotlin Developer | Full-Stack Problem Solver",
        contact: {
            phone: "+5493512282095",
            email: "loui.developer@gmail.com",
            location: "Córdoba, Argentina",
        },
        summary: "Passionate Full-Stack Developer with nearly 5 years in Java and Kotlin, specializing in dynamic, microservice-based web applications (Angular, Next.js, React, Vue.js). I excel at designing, developing, and deploying robust solutions, leveraging expertise in SQL/NoSQL databases, Docker, and Kubernetes. My core strength lies in deep code diving, solving complex technical challenges, and collaborating through pair programming and peer support. A proactive learner, I continuously expand my skillset via documentation, AI tools, and Udemy masterclasses. Primarily backend-focused, I'm an all-around solver eager to deliver impactful technical contributions.",
        experience: [
            {
                title: "Freelance Technical Developer / Full Stack Developer",
                company: "Self-Employed",
                dates: "Jan 2024 – Present",
                description: [
                    "Delivered diverse full-stack web applications for local businesses, including an events ticketing platform and financial tools, focusing on efficient, client-centric solutions.",
                    "Drove end-to-end development for multiple projects, from architecture design to deployment, ensuring technical excellence and timely delivery.",
                    "Architected and implemented responsive frontend interfaces using Next.js, React, Angular, and Tailwind CSS, significantly enhancing user experience.",
                    "Engineered scalable backend microservices and APIs with Next.js, Java (Spring Boot), and TypeScript, solving complex performance challenges.",
                    "Designed, developed, and optimized PostgreSQL database models and relations using Drizzle and Prisma, with Zod for data integrity.",
                    "Implemented secure authentication and seamless API communication using NextAuth.js and tRPC.",
                    "Managed projects independently, demonstrating strong time management and efficient delivery while balancing professional commitments with personal well-being.",
                ],
            },
            {
                title: "Full Stack Developer",
                company: "Team International (Software Outsourcing)",
                dates: "Nov 2022 – Dec 2023",
                description: [
                    "Developed responsive frontend interfaces using Svelte and React for IoT solutions, improving user interaction and data visualization.",
                    "Crafted efficient backend microservices with Kotlin and Javalin, handling real-time data processing for smart city applications.",
                    "Designed and implemented robust database models and relations in PostgreSQL, ensuring data integrity and accessibility.",
                    "Contributed to backend microservices development using NestJS, enhancing system modularity and maintainability.",
                ],
            },
            {
                title: "Java Developer",
                company: "Distillery (Software Outsourcing)",
                dates: "May 2022 – Nov 2022",
                description: [
                    "Completed comprehensive onboarding and company-specific training, including deep dives into 'The Art of Unit Testing,' 'Algorithms in Motion,' and 'The Complete Kotlin Developer Course,' enhancing core development skills.",
                    "Gained hands-on experience with internal company tools and projects, contributing to initial development phases.",
                ],
            },
            {
                title: "Senior Developer",
                company: "Superalgos (Internet Publishing)",
                dates: "Nov 2021 – May 2022",
                description: [
                    "Provided technical guidance and contributed to the development of an open-source internal social network for trading, participating in sprint planning and execution.",
                    "Designed and built engaging frontend interfaces (landings, feeds, profiles, chats) using React and Redux, boosting user engagement.",
                    "Coached and mentored trainees through pair programming and code reviews, contributing to team's technical growth and code quality.",
                    "Engineered and optimized robust backend software using Node.js and Express, ensuring powerful and scalable API performance.",
                    "Implemented critical fixes and performance improvements, enhancing application stability and efficiency.",
                ],
            },
            {
                title: "Full Stack Developer",
                company: "Dev VOWEL (Software Development)",
                dates: "Feb 2020 – Feb 2022",
                description: [
                    "Developed comprehensive, end-to-end functionalities for an Italian bank's web application, managing, replanning, and refinancing debts, ensuring seamless front-to-back integration.",
                    "Spearheaded new tool testing and integration, streamlining development workflows and improving system capabilities.",
                    "Actively participated in code review processes and provided training and coaching to junior developers, fostering a strong team environment.",
                    "Proposed, bootstrapped, integrated, and rigorously tested new technologies (Kotlin microservices, Swagger, Nginx, Docker, Kubernetes, Keycloak) to elevate project architecture and accelerate delivery.",
                    "Built and presented compelling proof-of-concept microservices with Kotlin to clients, showcasing innovative solutions and their potential impact.",
                ],
            },
            {
                title: "Java Developer",
                company: "DXC Technology (IT Services and IT Consulting)",
                dates: "Aug 2018 – Jan 2020",
                description: [
                    "Led the migration and integration of a monolithic Sabre booking software to a modern microservices architecture, significantly improving system flexibility and scalability.",
                    "Maintained and debugged the existing monolithic architecture, ensuring continuous, stable operation.",
                    "Proactively detected and resolved critical bugs, improving software reliability and user experience.",
                    "Developed new functionalities, API endpoints, and business logic using Java, Spring Boot, Mockito, and Hibernate, expanding application capabilities.",
                ],
            },
        ],
        skills: {
            "Programming Languages": [
                {name: "Java", level: 4}, {name: "Kotlin", level: 4}, {name: "JavaScript", level: 4},
                {name: "TypeScript", level: 4}, {name: "Python", level: 3}, {name: "C++", level: 2}
            ],
            "Frontend Frameworks & Libraries": [
                {name: "React", level: 4}, {name: "Next.js", level: 4}, {name: "Angular", level: 3},
                {name: "Vue.js", level: 3}, {name: "Svelte", level: 2}, {name: "Redux", level: 3},
                {name: "Tailwind CSS", level: 4}
            ],
            "Backend Frameworks & Libraries": [
                {name: "Spring Boot", level: 4}, {name: "Micronaut", level: 3}, {name: "Node.js (Express)", level: 4},
                {name: "Javalin", level: 3}, {name: "NestJS", level: 3}, {name: "Hibernate", level: 3},
                {name: "Drizzle", level: 3}, {name: "Prisma", level: 3}, {name: "Zod", level: 3},
                {name: "tRPC", level: 3}, {name: "NextAuth.js", level: 3}
            ],
            "Databases": [
                {name: "PostgreSQL", level: 4}, {name: "SQL Server", level: 3}, {name: "MongoDB", level: 3},
                {name: "Relational Databases (SQL)", level: 4}, {name: "NoSQL Databases", level: 3}
            ],
            "Cloud Platforms": [
                {name: "AWS (Amazon Web Services)", level: 2}, {
                    name: "Google Cloud Platform (GCP)",
                    level: 2
                }, {name: "Azure (if applicable)", level: 1}
            ],
            "DevOps & Tools": [
                {name: "Git", level: 4}, {name: "Docker", level: 3}, {name: "Kubernetes", level: 2},
                {name: "Jira", level: 3}, {name: "Swagger", level: 3}, {name: "Nginx", level: 2},
                {name: "Vercel", level: 3}, {name: "Firebase", level: 2}, {name: "Keycloak", level: 2},
                {name: "Microservices", level: 4}, {
                    name: "RESTful APIs",
                    level: 4
                }, {name: "CI/CD (e.g., Jenkins, GitLab CI/CD, GitHub Actions)", level: 3},
                {name: "Prometheus", level: 1}, {
                    name: "Grafana",
                    level: 1
                }, {name: "ELK Stack (Elasticsearch, Logstash, Kibana)", level: 1}
            ],
            "Build Tools": [
                {name: "Maven", level: 3}, {name: "Gradle", level: 3}
            ],
            "Message Brokers": [
                {name: "Kafka", level: 2}, {name: "RabbitMQ (if applicable)", level: 1}
            ],
            "Testing": [
                {name: "Unit Testing (JUnit, Jest, React Testing Library)", level: 4}, {
                    name: "Integration Testing",
                    level: 3
                },
                {name: "End-to-End Testing", level: 2}, {name: "Cucumber", level: 2}, {name: "Selenium", level: 2},
                {name: "Mockito", level: 3}
            ],
            "Architectural Patterns": [
                {name: "Microservices", level: 4}, {
                    name: "RESTful APIs",
                    level: 4
                }, {name: "Event-Driven Architecture (if applicable)", level: 2}
            ],
            "Security Concepts": [
                {name: "OAuth2", level: 2}, {name: "JWT", level: 2}, {name: "OWASP Top 10 (if familiar)", level: 2}
            ],
            "Methodologies": [
                {name: "Agile", level: 4}, {name: "Scrum", level: 4}, {name: "Kanban", level: 3}
            ],
            "Soft Skills": [
                {name: "Problem-Solving & Critical Thinking", level: 4},
                {
                    name: "Collaborative Development (Pair Programming, Code Review, Cross-functional Collaboration)",
                    level: 4
                },
                {name: "Continuous Learning & Adaptability", level: 4},
                {name: "Resilience", level: 4},
                {name: "Effective Communication", level: 3},
                {name: "Technical Mentoring & Guidance", level: 3},
                {name: "Attention to Detail", level: 3},
                {name: "Project & Time Management", level: 3}
            ],
        },
        education: {
            degree: "Bachelor's Degree in Computing Engineering",
            university: "21st Century Business University",
            dates: "Jan 2019 – Present",
        },
        languages: [
            {name: "English", proficiency: "B2 (Upper Intermediate Level)"},
            {name: "Spanish", proficiency: "Native"},
        ],
    };

    // Memoize the flattened list of skills for efficient lookup
    const allSkillsWithIds = React.useMemo(() => {
        return Object.values(cvData.skills).flat().map(skill => ({
            name: skill.name,
            id: generateSkillId(skill.name)
        }));
    }, [cvData.skills]);

    // Function to format description text
    const formatDescription = (text: string) => {
        let formattedText = text;

        // Sort skills by length (longest first) to prevent partial matches (e.g., "Java" before "JavaScript")
        const sortedSkills = [...allSkillsWithIds].sort((a, b) => b.name.length - a.name.length);

        // Iterate through skills to create links
        sortedSkills.forEach(skill => {
            const skillName = skill.name;
            const skillId = skill.id;
            // Create a regex to find the skill name as a whole word, case-insensitive
            // Ensure it's not already inside an <a> tag (negative lookahead)
            const regex = new RegExp(`\\b(${skillName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?!([^<]*?<\/a>))`, 'gi');

            formattedText = formattedText.replace(regex, `<a href="#${skillId}" class="inline-block text-purple-300 hover:underline font-medium">${skillName}</a>`);
        });

        return formattedText;
    };

    // Function to handle PDF download
    const handleDownloadPdf = () => {
        const element = document.getElementById('cv-content'); // Target the main CV content div
        if (element) {
            // Options for html2pdf.js
            const options = {
                margin: 0.5,
                filename: 'Axel_Loui_Molina_CV.pdf',
                image: {type: 'jpeg', quality: 0.98},
                html2canvas: {scale: 2, logging: true, dpi: 192, letterRendering: true},
                jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'},
            };
            // Use the html2pdf library to generate and download the PDF
            if (window.html2pdf) {
                window.html2pdf().from(element).set(options).save();
            } else {
                console.error('html2pdf.js is not loaded.');
                // Fallback for user if html2pdf.js is not available
                // Using a custom message box instead of alert()
                const messageBox = document.createElement('div');
                messageBox.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]';
                messageBox.innerHTML = `
          <div class="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-xl max-w-sm text-center">
            <p class="mb-4">PDF generation library not loaded. Please try again or use your browser's print to PDF function (Ctrl+P or Cmd+P).</p>
            <button id="closeMessageBox" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Close</button>
          </div>
        `;
                document.body.appendChild(messageBox);
                let closeMessageBox = document.getElementById('closeMessageBox');
                if (closeMessageBox) {
                    closeMessageBox.onclick = () => document.body.removeChild(messageBox);
                }
            }
        } else {
            console.error('CV content element not found.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
            {/* Script for html2pdf.js - loaded dynamically */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

            {/* Download PDF Button */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={handleDownloadPdf}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Download CV as PDF
                </button>
            </div>

            {/* Main CV Content - assigned an ID for PDF generation */}
            <div id="cv-content"
                 className="bg-gray-900 text-gray-100"> {/* Ensure this div has the dark mode background */}
                {/* Header Section */}
                <header className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 text-center">
                    <h1 className="text-4xl font-bold text-purple-400 mb-2">{cvData.name}</h1>
                    <p className="text-xl font-semibold text-purple-300 mb-4">{cvData.title}</p>
                    <div
                        className="flex flex-col sm:flex-row justify-center items-center text-gray-300 text-sm sm:space-x-4">
                        <a href={`tel:${cvData.contact.phone}`}
                           className="hover:underline text-purple-300">{cvData.contact.phone}</a>
                        <span>|</span>
                        <a href={`mailto:${cvData.contact.email}`}
                           className="hover:underline text-purple-300">{cvData.contact.email}</a>
                        <span>|</span>
                        <span>{cvData.contact.location}</span>
                    </div>
                </header>

                {/* Professional Summary Section */}
                <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b-2 border-purple-600 pb-2">Professional
                        Summary</h2>
                    <p className="text-gray-300 leading-relaxed">{cvData.summary}</p>
                </section>

                {/* Experience Section */}
                <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b-2 border-purple-600 pb-2">Experience</h2>
                    {cvData.experience.map((job, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h3 className="text-xl font-semibold text-purple-300">{job.title}</h3>
                            <p className="text-gray-400 text-md">{job.company} | {job.dates}</p>
                            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                {job.description.map((point, i) => (
                                    // Use formatDescription to process each point before rendering
                                    <li key={i} dangerouslySetInnerHTML={{__html: formatDescription(point)}}/>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Skills Section */}
                <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b-2 border-purple-600 pb-2">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(cvData.skills).map(([category, skillsList], index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{category}:</h3>
                                <ul className="list-none text-gray-300 flex flex-wrap gap-2">
                                    {skillsList.map((skill, i) => (
                                        <li
                                            key={i}
                                            id={generateSkillId(skill.name)}
                                            className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm flex items-center"
                                        >
                                            {skill.name}
                                            {/* Display skill level visually */}
                                            <span className="ml-2 flex space-x-0.5">
                      {[...Array(4)].map((_, levelIndex) => (
                          <span
                              key={levelIndex}
                              className={`inline-block w-2 h-2 rounded-full ${
                                  levelIndex < skill.level ? 'bg-purple-400' : 'bg-gray-600'
                              }`}
                          ></span>
                      ))}
                    </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b-2 border-purple-600 pb-2">Education</h2>
                    <h3 className="text-xl font-semibold text-purple-300">{cvData.education.degree}</h3>
                    <p className="text-gray-400 text-md">{cvData.education.university}</p>
                    <p className="text-gray-400 text-md">{cvData.education.dates}</p>
                </section>

                {/* Languages Section */}
                <section className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b-2 border-purple-600 pb-2">Languages</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {cvData.languages.map((lang, index) => (
                            <li key={index}>{lang.name}: {lang.proficiency}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default App;
