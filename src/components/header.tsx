import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface HeaderProps {
    name: string;
    title: string;
    contact: {
        phone: string;
        email: string;
        location: string;
    };
}

const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
    return (
        <header className="mb-8 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-purple-500 mb-2">{name}</h1>
            <p className="text-2xl text-gray-300 mb-4">{title}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-400 text-lg">
                <a href={`tel:${contact.phone}`}
                   className="flex items-center hover:text-purple-500 transition-colors duration-200">
                    <FaPhone className="mr-2" /> {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`}
                   className="flex items-center hover:text-purple-500 transition-colors duration-200">
                    <FaEnvelope className="mr-2" /> {contact.email}
                </a>
                <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {contact.location}
                </span>
            </div>
        </header>
    );
};

export default Header;