'use client';

import React, {useState} from 'react';
import {FaDownload} from 'react-icons/fa';
import {downloadCvAsPdf} from "@/app/actions/download-pdf";

const FloatingDownloadButton: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const pdfBuffer = await downloadCvAsPdf();
            const blob = new Blob([pdfBuffer], {type: 'application/pdf'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Axel_Loui_Molina_CV.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Download failed:', err);
            setError('Failed to download CV. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button id="download-pdf-button"
                    onClick={handleDownload}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-full
                    shadow-lg flex items-center justify-center transition-colors duration-300 focus:outline-none
                    focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                    disabled={isLoading}>
                {isLoading ? (
                    <span className="animate-spin mr-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12m7-9v8m-4-2H3m7-6h.01M16 16v.01M12 21.01V21m0-18V4.01"/>
                        </svg>
                    </span>
                ) : (
                    <FaDownload className="mr-2"/>
                )}
                {isLoading ? 'Generating PDF...' : 'Download CV'}
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </div>
    );
};

export default FloatingDownloadButton;