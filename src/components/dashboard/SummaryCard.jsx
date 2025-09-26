import React from 'react';

export default function SummaryCard({ title, value }) {
    return (
        <div className="group cursor-pointer flex flex-col gap-4 border border-1 border-retireddark bg-none duration-300 p-6 rounded-xl">
            <div className="w-fit text-md text-textblack rounded-md">{title}</div>
            <div className={`text-4xl font-bold duration-300`}>{value}</div>
        </div>
    );
}