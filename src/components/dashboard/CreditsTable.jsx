import React from 'react';
import TableRow from './TableRow';

export default function CreditsTable({ data }) {
    if (!data || data.length === 0) {
        return <div className="bg-white p-8 rounded shadow text-center">No credits found!</div>;
    }
    return (
        <div className="bg-white border border-1 border-retireddark rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-subtext uppercase tracking-wider">UNIC ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-subtext uppercase tracking-wider">Project Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-subtext uppercase tracking-wider">Vintage</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-subtext uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-subtext uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map(item => <TableRow key={item.unic_id} item={item} />)}
                </tbody>
            </table>
        </div>
    );
}