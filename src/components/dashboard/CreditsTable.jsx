import React from 'react';
import TableRow from './TableRow';

export default function CreditsTable({ data }) {
    if (!data || data.length === 0) {
        return <div className="bg-white p-8 rounded shadow text-center">No credits found</div>;
    }
    return (
        <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full divide-y">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="p-3 text-left text-sm">UNIC ID</th>
                        <th className="p-3 text-left text-sm">Project Name</th>
                        <th className="p-3 text-left text-sm">Vintage</th>
                        <th className="p-3 text-left text-sm">Status</th>
                        <th className="p-3 text-left text-sm">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {data.map(item => <TableRow key={item.unic_id} item={item} />)}
                </tbody>
            </table>
        </div>
    );
}