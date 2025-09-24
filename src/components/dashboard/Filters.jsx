import React from 'react';

export default function Filters({ search, onSearch, year, onYearChange, status, onStatusChange, years = [], onClear }) {
    return (
        <div className="flex flex-col bg-white duration-300 p-6 rounded-xl border border-gray-200 md:flex-row md:items-end md:space-x-4 overflow-hidden shadow-sm">

            <div className='flex flex-col basis-[60%] flex-shrink gap-1'>
                <label className="block text-sm font-medium text-subtext mb-2">
                    Search Projects
                </label>
                <input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search project name..." className="flex-1 p-3 border rounded focus:ring-2 focus:ring-primaryblue focus:border-transparent transition-all duration-200" />
            </div>

            <div className='flex flex-col basis-[15%] flex-shrink gap-1'>
                <label className="block text-sm font-medium text-subtext mb-2">
                    Vintage Year
                </label>
                <select value={year} onChange={e => onYearChange(e.target.value)} className="p-3.5 border-r-8 border-r-transparent rounded bg-retiredlight">
                    <option value="All">All Years</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>

            <div className='flex flex-col basis-[15%] flex-shrink gap-1'>
                <label className="block text-sm font-medium text-subtext mb-2">
                    Status
                </label>
                <select value={status} onChange={e => onStatusChange(e.target.value)} className="p-3.5 border-r-8 border-r-transparent rounded bg-retiredlight">
                    <option value="All">All status</option>
                    <option value="Active">Active</option>
                    <option value="Retired">Retired</option>
                </select>
            </div>

            <button onClick={onClear} className="md:basis-[10%] flex-shrink-0 md:mt-0 p-3 bg-retiredlight hover:bg-retireddark rounded duration-300">Clear Filters</button>
        </div>
    );
}