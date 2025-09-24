import React from 'react';

export default function Badge({ status }) {
    const isActive = status === 'Active';
    return <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isActive
            ? 'bg-activelight text-activedark border border-green-200'
            : 'bg-retiredlight text-textblack border border-gray-200'
            }`}
    >
        <span
            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isActive ? 'bg-green-400' : 'bg-gray-400'}`}
        />
        {status}
    </span>;
}