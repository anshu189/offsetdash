import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CertificateTemplate from './CertificateTemplate';

export default function CertificateDownloadButton({ data }) {

    const [isGenerating, setIsGenerating] = React.useState(false);
    const [certificateTarget, setCertificateTarget] = useState(null);

    // Effect runs when certificateTarget is set
    useEffect(() => {
        if (!certificateTarget) return;

        const generatePDF = async () => {
            try {
                const canvas = await html2canvas(certificateTarget, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'pt', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`certificate-${data.unic_id}.pdf`);
            } catch (err) {
                console.error('pdf error', err);
                alert('Failed to generate PDF');
            } finally {
                // cleanup
                certificateTarget.remove();
                setCertificateTarget(null);
                setIsGenerating(false);
            }
        };

        generatePDF();
    }, [certificateTarget, data]);

    const handleDownload = async () => {
        const generatedAt = new Date().toLocaleString();
        setIsGenerating(true);

        // create an offscreen container (must be visible to html2canvas but offscreen)
        const wrapper = document.createElement('div');
        wrapper.style.position = 'fixed';
        wrapper.style.left = '-9999px';
        wrapper.style.top = '0';
        wrapper.style.background = 'white';
        document.body.appendChild(wrapper);

        // mount a static element with Tailwind classes (rely on global CSS)
        const container = document.createElement('div');
        wrapper.appendChild(container);

        // render the certificate into the container using ReactDOM
        const { createRoot } = await import('react-dom/client');
        const root = createRoot(container);
        root.render(<CertificateTemplate credit={data} generatedAt={generatedAt} />);

        // give the browser a tick to render styles
        setTimeout(() => {
            setCertificateTarget(container);
        }, 250);
    };

    return (
        <button
            onClick={handleDownload}
            // disabled={isGenerating}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
            <Download className="w-4 h-4 mr-1.5" />
            {isGenerating ? 'Generating...' : 'Download Certificate'}
        </button>
    );
}