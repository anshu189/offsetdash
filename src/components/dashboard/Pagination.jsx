import React from 'react';

export default function Pagination({ page, setPage, totalPages, maxVisible = 5 }) {
    if (totalPages <= 1) return null;

    let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center space-x-2 mt-2">
            <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>

            {startPage > 1 && (
                <>
                    <button onClick={() => setPage(1)} className="px-3 py-1 border rounded">1</button>
                    {startPage > 2 && <span className="px-2">...</span>}
                </>
            )}

            {pages.map(p => (
                <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded ${page === p ? 'bg-blue-600 text-white' : 'bg-white border'}`}
                >
                    {p}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-2">...</span>}
                    <button onClick={() => setPage(totalPages)} className="px-3 py-1 border rounded">
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}
