import React, { useEffect, useMemo, useState } from 'react';
import data from '../data/credits.json';
import SummaryCard from '../components/dashboard/SummaryCard';
import Filters from '../components/dashboard/Filters';
import CreditsTable from '../components/dashboard/CreditsTable';
import useDebounce from '../hooks/useDebounce';
import usePagination from '../hooks/usePagination';
import { creditFilter } from '../utils/creditsfilter';

const PAGE_SIZE = 5;

export default function Dashboard() {
    const [search, setSearch] = useState('');
    const [year, setYear] = useState('All');
    const [status, setStatus] = useState('All');
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(search, 300);
    const filtered = useMemo(() => creditFilter(data, { search: debouncedSearch, year, status }), [debouncedSearch, year, status]);

    // pagination
    const { paginated, total, totalPages } = usePagination(filtered, PAGE_SIZE, page);

    // reset to page 1 if filters change
    useEffect(() => setPage(1), [debouncedSearch, year, status]);

    const counts = useMemo(() => ({
        total: data.length,
        active: data.filter(d => d.status === 'Active').length,
        retired: data.filter(d => d.status === 'Retired').length
    }), []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <SummaryCard title="Total Credits" value={counts.total} />
                <SummaryCard title="Active Credits" value={counts.active} />
                <SummaryCard title="Retired Credits" value={counts.retired} />
            </div>

            <Filters
                search={search}
                onSearch={setSearch}
                year={year}
                onYearChange={setYear}
                status={status}
                onStatusChange={setStatus}
                years={[...new Set(data.map(d => d.vintage))].sort().reverse()}
                onClear={() => { setSearch(''); setYear('All'); setStatus('All'); }}
            />

            <div className="mt-6">
                <CreditsTable data={paginated} />
                <div className="mt-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                    <div>Showing {Math.min((page - 1) * PAGE_SIZE + 1, total)} to {Math.min(page * PAGE_SIZE, total)} of {total} results</div>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                            className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => setPage(i + 1)}
                                className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-white border'}`}>
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                            className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
