import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CertificateTemplate from './CertificateTemplate';

export default function CertificateDownloadButton({ data }) {
    const handleDownload = async () => {
        const generatedAt = new Date().toLocaleString();

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
        setTimeout(async () => {
            try {
                const canvas = await html2canvas(container, { scale: 2 });
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
                root.unmount();
                wrapper.remove();
            }
        }, 250);
    };

    return <button onClick={handleDownload} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Download Certificate</button>;
}