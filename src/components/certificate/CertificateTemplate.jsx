import React from 'react';

export default function CertificateTemplate({ credit, generatedAt }) {
    return (
        <div className="w-[800px] p-8 bg-white text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold">Retirement Certificate</h2>
                <p className="text-sm text-gray-500">Carbon Credit Registry</p>
            </div>

            <div className="mt-6 text-lg space-y-2">
                <p><strong>UNIC ID:</strong> {credit.unic_id}</p>
                <p><strong>Project Name:</strong> {credit.project_name}</p>
                <p><strong>Vintage:</strong> {credit.vintage}</p>
                <p><strong>Status:</strong> {credit.status}</p>
                <p className="mt-4 text-sm text-gray-600"><strong>Generated:</strong> {generatedAt}</p>
            </div>

            <div className="mt-12 text-right">
                <p>__________________________</p>
                <p className="text-sm">Authorized Signature</p>
            </div>
        </div>
    );
}