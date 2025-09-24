import React from 'react';

export default function Badge({ status }) {
    const cls = status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800';
    return <span className={`px-2 py-1 rounded text-sm ${cls}`}>{status}</span>;
}